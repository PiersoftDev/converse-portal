import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import FoundationIcon from '@mui/icons-material/Foundation'
import ConstructionIcon from '@mui/icons-material/Construction'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinearScaleIcon from '@mui/icons-material/LinearScale'
import EngineeringIcon from '@mui/icons-material/Engineering'

const MaterialCard = ({ content, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="content">
            <span>
              <FoundationIcon />
            </span>
            <p>Item description</p>
          </div>
          <div className="content">
            <span>
              <ProductionQuantityLimitsIcon />
            </span>
            <p>Quantity</p>
          </div>
          <div className="content">
            <span>
              <CalendarMonthIcon />
            </span>
            <p>Planned Date</p>
          </div>
          <div className="content">
            <span>
              <EngineeringIcon />
            </span>
            <p>Created userName</p>
          </div>

          <span className="sub-status">Sub Status</span>
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
  padding: 0.5rem;
  position: relative;
`
