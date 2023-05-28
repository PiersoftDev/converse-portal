import { materialsData } from '../../assets/data'
import MaterialCard from './MaterialCard'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ColumnContainer = ({ columns, columnId, isDropDisabled }) => {
  const { id, title, materialIds, color } = columns[columnId]

  const materials = materialIds.reduce((acc, curr) => {
    const material = materialsData.find(({ id }) => id === curr)
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
        <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
          {(provided, snapshot) => (
            <div
              className="column-content"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {materials.map((material, index) => {
                return (
                  <MaterialCard key={material.id} {...material} index={index} />
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
  }

  .column-content {
    padding: 0 1rem;
    min-height: 30rem;
    flex-grow: 1;
  }
`
