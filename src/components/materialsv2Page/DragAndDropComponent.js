import { useEffect, useState } from 'react'
import ColumnContainer from './ColumnContainer'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import {
  getMaterialItems,
  setColumns,
} from '../../features/MaterialIndent/MaterialSlice'
import { useDispatch } from 'react-redux'
import ReactLoading from 'react-loading'
import axios from 'axios'

import CreateRfqModal from './CreateRfqModal'
import RfqDecisionModal from './RfqDecisionModal'
import NoRfqDecisionModal from './NoRfqDecisionModal'

const DragAndDropComponent = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, columns, items } = useSelector(
    (store) => store.material
  )

  const [statusPersistIsLoading, setStatusPersistIsLoading] = useState(false)
  // const [statusPersistIsError, setStatusPersistIsError] = useState(false)

  const [isAddLinesLoading, setIsAddLinesLoading] = useState(false)

  const [droppableId, setDroppableId] = useState(null)

  const [homeIndex, setHomeIndex] = useState(null)

  const [createRfq, setCreateRfq] = useState(false)

  const [rfqDecision, setRfqDecision] = useState(false)

  const [noRfqDecision, setNoRfqDecision] = useState(false)

  const [dragItem, setDragItem] = useState(null)

  const [rfqFlowState, setRfqFlowState] = useState({
    destination: null,
    draggableId: null,
    temp: null,
  })

  const [draftedRfq, setDraftedRfq] = useState([
    {
      projectId: '',
      projectDesc: '',
      categoryId: '',
      categoryDesc: '',
      warehouseId: '',
      warehouseDesc: '',
    },
  ])

  const columnsOrder = [
    'Item Requested',
    'Warehouse Order',
    'Purchase Request',
    'RFQ',
    'Purchase Order',
  ]

  const handleDragStart = (start) => {
    const { source } = start
    setHomeIndex(columnsOrder.indexOf(source.droppableId))
  }

  const saveStatusChangeForRfq = async ({ draggableId, rfqId }) => {
    try {
      setIsAddLinesLoading(true)
      const reqbody = [draggableId]
      const resp = await axios.post(
        `http://13.232.221.196:9090/v1/purchase/material-indent/rfq/addLines/${rfqId}`,
        reqbody
      )
      console.log(resp.data)
      console.log(reqbody)
      setIsAddLinesLoading(false)
    } catch (error) {
      setIsAddLinesLoading(false)
      console.log(error)
      console.log('some error occured while adding items to add items list')
    }
  }

  const saveStatusChange = async (destination, draggableId, temp) => {
    try {
      setStatusPersistIsLoading(true)
      setDroppableId(destination.droppableId)
      const tempitem = items.find(({ id }) => `${id}` === draggableId)
      const { subStatus, id, projectId, categoryId, projectDesc, category } =
        tempitem

      if (destination.droppableId === 'RFQ') {
        // Some api call to check whether line falls in to existing RFQ or not

        const response = await axios(
          `http://13.232.221.196:9090/v1/purchase/rfq/drafted/${projectId}/${categoryId}`
        )

        // const response = await axios(
        //   `http://13.232.221.196:9090/v1/purchase/rfq/drafted/EXE000022/A05`
        // )

        if (response.data.length > 0) {
          setDraftedRfq(response.data)
          setRfqDecision(true)
          setStatusPersistIsLoading(false)
          return
        } else {
          setNoRfqDecision(true)

          let state = {
            ...draftedRfq[0],
            projectId,
            projectDesc,
            categoryId,
            categoryDesc: category,
          }

          setDraftedRfq([state])
          setStatusPersistIsLoading(false)
          return
        }
      }

      await axios.put(
        `http://13.232.221.196:9090/v1/purchase/material-indent/updateStatus/${id}/${destination.droppableId}/${subStatus}`
      )

      setStatusPersistIsLoading(false)
      return
    } catch (error) {
      setStatusPersistIsLoading(false)
      console.log(error)
      dispatch(setColumns(temp))
      toast.error('Some error occured while changing the status')
      return
    }
  }

  const handleDragEnd = async (result) => {
    const { draggableId, destination, source } = result

    const draggingItem = items.find(({ id }) => `${id}` === draggableId)

    const { subStatus } = draggingItem

    if (source.droppableId === 'Warehouse Order') {
      toast.error(`Material in Warehouse Order can't be moved`)
      setHomeIndex(null)
      return
    }

    if (subStatus === 'REJECTED') {
      toast.error(`Material Item cant be moved as it is rejected`)
      setHomeIndex(null)
      return
    }

    if (subStatus === 'ONHOLD') {
      toast.error(`Material Item cant be moved as it is on hold`)
      setHomeIndex(null)
      return
    }

    if (homeIndex > columnsOrder.indexOf(destination?.droppableId)) {
      toast.error(`can't be moved back to ${destination?.droppableId}`)
      setHomeIndex(null)
      return
    }

    if (homeIndex === 0 && columnsOrder.indexOf(destination?.droppableId) > 2) {
      toast.error("Requested can't be moved to Rfq and purchase order directly")
      setHomeIndex(null)
      return
    }
    setHomeIndex(null)

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const temp = { ...columns }

    setRfqFlowState({ destination, draggableId, temp })

    const start = columns[source.droppableId]
    const finish = columns[destination.droppableId]

    if (start === finish) {
      const newMaterialIdsArray = [...start.materialIds]

      newMaterialIdsArray.splice(source.index, 1)
      newMaterialIdsArray.splice(destination.index, 0, `${draggableId}`)

      const newColumn = {
        ...start,
        materialIds: newMaterialIdsArray,
      }

      const newState = {
        ...columns,
        [newColumn.title]: newColumn,
      }

      dispatch(setColumns(newState))

      return
    }

    const newStartMaterialIdsArray = [...start.materialIds]

    newStartMaterialIdsArray.splice(source.index, 1)

    const newStartColumn = {
      ...start,
      materialIds: newStartMaterialIdsArray,
    }

    const newFinishMaterialIdsArray = [...finish.materialIds]
    newFinishMaterialIdsArray.splice(destination.index, 0, `${draggableId}`)

    const newFinishColumn = {
      ...finish,
      materialIds: newFinishMaterialIdsArray,
    }

    const newState = {
      ...columns,
      [newStartColumn.title]: newStartColumn,
      [newFinishColumn.title]: newFinishColumn,
    }

    dispatch(setColumns(newState))

    setDragItem(draggingItem)

    saveStatusChange(destination, draggableId, temp)
  }

  // useEffect(() => {
  //   dispatch(getMaterialItems())
  // }, [])

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ReactLoading
          type="balls"
          color="var(--grey-500)"
          height={50}
          width={50}
        />
      </LoadingWrapper>
    )
  }

  if (isError) {
    return (
      <ErrorWrapper>
        <h4>Something went wrong while fetching data ...</h4>
      </ErrorWrapper>
    )
  }

  return (
    <Wrapper>
      <div className="info-component">
        <h4>Info component</h4>
      </div>
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="dnd-container">
          {columnsOrder.map((id, index) => {
            let isDropDisabled = false
            // let isDragDisabled = false

            // if (homeIndex === 0 && index > 2) {
            //   isDropDisabled = true
            // }

            // if (id === 'Warehouse Order') {
            //   isDragDisabled = true
            // }

            return (
              <ColumnContainer
                key={id}
                columnId={id}
                isDropDisabled={isDropDisabled}
              />
            )
          })}
        </div>
      </DragDropContext>

      <div
        className={
          statusPersistIsLoading
            ? 'status-change-mask show'
            : 'status-change-mask'
        }
      >
        <div className="status-change-loader">
          {droppableId === 'RFQ'
            ? `checking if there are any open RFQ for the this ${dragItem?.projectDesc} and ${dragItem?.category} ...`
            : `Promoting line to ${droppableId} ...`}
        </div>
      </div>

      <CreateRfqModal
        showModal={createRfq}
        setShowModal={setCreateRfq}
        draftedRfq={draftedRfq}
        rfqFlowState={rfqFlowState}
        setColumns={setColumns}
        saveStatusChangeForRfq={saveStatusChangeForRfq}
      />
      <RfqDecisionModal
        showModal={rfqDecision}
        setShowModal={setRfqDecision}
        createRfq={createRfq}
        setCreateRfq={setCreateRfq}
        isAddLinesLoading={isAddLinesLoading}
        setIsAddLinesLoading={setIsAddLinesLoading}
        rfqFlowState={rfqFlowState}
        setColumns={setColumns}
        draftedRfq={draftedRfq}
        saveStatusChangeForRfq={saveStatusChangeForRfq}
      />
      <NoRfqDecisionModal
        showModal={noRfqDecision}
        setShowModal={setNoRfqDecision}
        createRfq={createRfq}
        setCreateRfq={setCreateRfq}
        isAddLinesLoading={isAddLinesLoading}
        setIsAddLinesLoading={setIsAddLinesLoading}
        rfqFlowState={rfqFlowState}
        setColumns={setColumns}
        saveStatusChangeForRfq={saveStatusChangeForRfq}
        draftedRfq={draftedRfq}
      />
    </Wrapper>
  )
}
export default DragAndDropComponent

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  .info-component {
    padding: 2rem 2rem;
    border-bottom: 1px solid var(--grey-100);
  }

  .dnd-container {
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    overflow: hidden;
  }

  .status-change-mask {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 30;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .status-change-mask.show {
    opacity: 1;
    pointer-events: visible;
  }

  .status-change-loader {
    color: var(--white);
    font-size: 2rem;
  }
`
