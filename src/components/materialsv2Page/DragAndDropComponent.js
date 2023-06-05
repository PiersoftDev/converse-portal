import { useState } from 'react'
import ColumnContainer from './ColumnContainer'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { setColumns } from '../../features/MaterialIndent/MaterialSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const DragAndDropComponent = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, columns, items } = useSelector(
    (store) => store.material
  )

  const [statusPersistIsLoading, setStatusPersistIsLoading] = useState(false)
  // const [statusPersistIsError, setStatusPersistIsError] = useState(false)

  const [droppableId, setDroppableId] = useState(null)

  const [homeIndex, setHomeIndex] = useState(null)

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

  const handleDragEnd = async (result) => {
    const { draggableId, destination, source } = result

    const { subStatus } = items.find(({ id }) => `${id}` === draggableId)

    if (subStatus === 'REJECTED') {
      toast.error(`Material Item cant be moved as it is rejected`)
      setHomeIndex(null)
      return
    }

    if (source.droppableId === 'Warehouse Order') {
      toast.error(`Material in Warehouse Order can't be moved`)
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

    try {
      setStatusPersistIsLoading(true)
      setDroppableId(destination.droppableId)
      const { subStatus, id } = items.find(({ id }) => `${id}` === draggableId)
      await axios.put(
        `https://13.232.221.196:8081/v1/purchase/material-indent/${id}/${destination.droppableId}/${subStatus}`
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

  if (isLoading) {
    return (
      <LoadingWrapper>
        <h4>Still Loading ...</h4>
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

            // if (homeIndex === 0 && index > 2) {
            //   isDropDisabled = true
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
          {`Promoting line to ${droppableId} ...`}
        </div>
      </div>
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
