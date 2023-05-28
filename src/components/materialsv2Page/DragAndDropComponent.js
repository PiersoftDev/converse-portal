import { useState } from 'react'
import { columnsData } from '../../assets/data'
import ColumnContainer from './ColumnContainer'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const DragAndDropComponent = () => {
  const [columns, setColumns] = useState(columnsData)

  const [homeIndex, setHomeIndex] = useState(null)

  const columnsOrder = [
    'column-1',
    'column-2',
    'column-3',
    'column-4',
    'column-5',
  ]

  const handleDragStart = (start) => {
    const { source } = start
    setHomeIndex(columnsOrder.indexOf(source.droppableId))
  }

  const handleDragEnd = (result) => {
    const { draggableId, destination, source } = result

    console.log(result)
    console.log(homeIndex)

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

    const start = columns[source.droppableId]
    const finish = columns[destination.droppableId]

    if (start === finish) {
      const newMaterialIdsArray = [...start.materialIds]

      newMaterialIdsArray.splice(source.index, 1)
      newMaterialIdsArray.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        materialIds: newMaterialIdsArray,
      }

      const newState = {
        ...columns,
        [newColumn.id]: newColumn,
      }

      setColumns(newState)
      return
    }

    const newStartMaterialIdsArray = start.materialIds

    newStartMaterialIdsArray.splice(source.index, 1)

    const newStartColumn = {
      ...start,
      materialIds: newStartMaterialIdsArray,
    }

    const newFinishMaterialIdsArray = finish.materialIds
    newFinishMaterialIdsArray.splice(destination.index, 0, draggableId)

    const newFinishColumn = {
      ...finish,
      materialIds: newFinishMaterialIdsArray,
    }

    const newState = {
      ...columns,
      [newStartColumn.id]: newStartColumn,
      [newFinishColumn.id]: newFinishColumn,
    }

    setColumns(newState)
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
                columns={columns}
                isDropDisabled={isDropDisabled}
              />
            )
          })}
        </div>
      </DragDropContext>
    </Wrapper>
  )
}
export default DragAndDropComponent

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
`
