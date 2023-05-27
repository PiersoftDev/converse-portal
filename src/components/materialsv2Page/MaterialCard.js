import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const MaterialCard = ({ content, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <p>{content}</p>
        </Wrapper>
      )}
    </Draggable>
  )
}
export default MaterialCard

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: var(--shadow-1);
  margin: 0.5rem 0;

  p {
    text-align: center;
    padding: 3rem 0;
  }
`
