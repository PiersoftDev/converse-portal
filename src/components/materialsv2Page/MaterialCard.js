import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
// import FoundationIcon from '@mui/icons-material/Foundation'
// import ConstructionIcon from '@mui/icons-material/Construction'
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
// import LinearScaleIcon from '@mui/icons-material/LinearScale'
// import EngineeringIcon from '@mui/icons-material/Engineering'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { FaThumbsDown } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'
import {} from 'react-icons/md'
import {
  MdFoundation,
  MdProductionQuantityLimits,
  MdCalendarMonth,
  MdEngineering,
  MdRemoveRedEye,
  MdHelpCenter,
} from 'react-icons/md'
import { useState } from 'react'
import MaterialsDetailModel from './MaterialsDetailModel'

const MaterialCard = ({ material, index }) => {
  const [showModal, setShowModal] = useState(false)

  const { itemDesc, quantity, plannedDate, username, subStatus } = material

  return (
    <Draggable draggableId={material.itemId} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="content">
            <span>
              <MdFoundation />
            </span>
            <p>{itemDesc}</p>
          </div>
          <div className="content">
            <span>
              <MdProductionQuantityLimits />
            </span>
            <p>{quantity}</p>
          </div>
          <div className="content">
            <span>
              <MdCalendarMonth />
            </span>
            <p>{plannedDate}</p>
          </div>
          <div className="content">
            <span>
              <MdEngineering />
            </span>
            <p>{username}</p>
          </div>
          <div className="icons-container">
            <div className="status icon-btn">{subStatus}</div>

            <div className="right-wrapper">
              <div className="first-btn icon-btn">
                <MdRemoveRedEye />
              </div>
              <div className="second-btn icon-btn">
                <MdHelpCenter />
              </div>
              <div className="third-btn icon-btn">
                <FaThumbsDown />
              </div>
            </div>
          </div>
          <span className="info-icon" onClick={() => setShowModal(true)}>
            <HiInformationCircle />
          </span>
          <MaterialsDetailModel
            showModal={showModal}
            setShowModal={setShowModal}
            material={material}
          />
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
  padding: 0.5rem 1.25rem;
  padding-top: 1.25rem;
  position: relative;

  .content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
    position: relative;
  }

  .content span {
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    color: var(--grey-400);
    cursor: pointer;
  }

  .content p {
    margin-bottom: 0;
    font-size: 0.8rem;
    color: var(--grey-700);
  }

  .icons-container {
    display: flex;
    font-size: 0.8rem;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
  }

  .icon-btn {
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    font-size: 0.7rem;
    cursor: pointer;
    transition: var(--transition);
    display: grid;
    place-items: center;
  }

  .status {
    background-color: var(--primary-200);
    color: var(--primary-600);
    font-size: 0.5rem;
  }

  .right-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .first-btn {
    background-color: var(--primary-200);
    color: var(--primary-600);
  }

  .second-btn {
    background-color: #ffeb80;
    color: #e6c200;
  }

  .third-btn {
    background-color: var(--red-light);
    color: var(--red-dark);
  }

  .status:hover {
    background-color: var(--primary-600);
    color: var(--primary-200);
  }

  .first-btn:hover {
    color: var(--red-light);
    background-color: var(--red-dark);
  }

  .second-btn:hover {
    color: #ffeb80;
    background-color: #e6c200;
  }

  .third-btn:hover {
    color: var(--red-light);
    background-color: var(--red-dark);
  }

  .content:last-child {
    margin-bottom: 0;
  }

  .info-icon {
    position: absolute;
    top: 0;
    left: 0.25rem;
    color: var(--primary-300);
    transition: var(--transition);
    cursor: pointer;
    font-size: 1.1rem;
  }

  .info-icon:hover {
    color: var(--primary-500);
  }
`
