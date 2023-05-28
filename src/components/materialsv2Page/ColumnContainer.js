import MaterialCard from './MaterialCard'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ColumnContainer = ({ columnId, isDropDisabled }) => {
  const { items, columns } = useSelector((store) => store.material)

  const { id, title, materialIds, color } = columns[columnId]

  const materials = materialIds.reduce((acc, curr) => {
    const material = items.find(({ itemId }) => itemId === curr)
    acc.push(material)
    return acc
  }, [])

  return (
    <Wrapper>
      <div className="column-container">
        <div className="column-header-container">
          <div className="column-header">
            <div className="column-title">
              <div className="dot" style={{ backgroundColor: color }}></div>
              <p style={{ color: color }}>{title}</p>
            </div>
          </div>
        </div>
        <Droppable droppableId={columnId} isDropDisabled={isDropDisabled}>
          {(provided, snapshot) => (
            <div
              className="column-content"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnId === 'Item Requested' && materials.length === 0 && (
                <div className="empty-column">
                  <p>Nothing new here</p>
                </div>
              )}
              {materials.map((material, index) => {
                return (
                  <MaterialCard
                    key={material.itemId}
                    material={material}
                    index={index}
                  />
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </Wrapper>
  )
}
export default ColumnContainer

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-radius: 10px;
  overflow-y: scroll;

  .column-container {
    display: flex;
    flex-direction: column;
  }

  .column-header-container {
    background-color: var(--grey-50);
    z-index: 1;
    position: sticky;
    top: 0;
    padding: 1rem;
  }

  .column-header {
    background-color: var(--white);
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: var(--shadow-1);
  }

  .column-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: var(--primary-500);
    border-radius: 50%;
  }

  .column-title p {
    margin-bottom: 0;
    color: var(--primary-400);
    font-weight: 500;
  }

  .column-content {
    padding: 0 1rem;
    min-height: 30rem;
    flex-grow: 1;
  }

  .empty-column {
    height: 10rem;
    display: grid;
    place-items: center;
  }
`
