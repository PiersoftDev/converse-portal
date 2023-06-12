import { TbTruckLoading } from 'react-icons/tb'

import { BsFillBuildingFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { BsFillDatabaseFill } from 'react-icons/bs'

import { GrInProgress } from 'react-icons/gr'
import { BsGlobeAmericas } from 'react-icons/bs'
import { RiShareBoxLine } from 'react-icons/ri'

import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const SingleRfq = ({ item }) => {
  const navigate = useNavigate()
  const {
    id,
    projectId,
    projectDesc,
    warehouseId,
    warehouseDesc,
    status,
    categoryId,
    categoryDesc,
    createdDate,
  } = item

  const openRfqDetails = () => {
    navigate(`/rfqdetails/${id}`, { state: { ...item } })
  }

  return (
    <Wrapper>
      <span className="open-rfq-details-icon" onClick={openRfqDetails}>
        <RiShareBoxLine />
      </span>
      <div className="rfq-header">
        <p className="rfq-header-text">
          <span>#80149 - </span> Summer Lenin Jacket SS22
        </p>
        <div className="rfq-status">
          <span>
            <BsGlobeAmericas />
          </span>
          <p>{status || 'Dummy'}</p>
        </div>
      </div>
      <div className="rfq-subheader">
        <div className="rfq-subheader-element">
          <span>
            <BsFillBuildingFill />
          </span>
          <p>{projectDesc}</p>
        </div>
        <div className="rfq-subheader-element">
          <span>
            <MdLocationOn />
          </span>
          <p>{warehouseDesc}</p>
        </div>
        <div className="rfq-subheader-element">
          <span>
            <BsFillPersonFill />
          </span>
          <p>Stephanie carvole</p>
        </div>
        <div className="rfq-subheader-element">
          <span>
            <BsFillDatabaseFill />
          </span>
          <p>Jackets & Coats</p>
        </div>
      </div>
    </Wrapper>
  )
}
export default SingleRfq

const Wrapper = styled.div`
  border: 1px solid var(--grey-100);
  border-radius: 10px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 1rem;
  position: relative;

  .rfq-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .rfq-header-text {
    color: var(--grey-800);
    font-weight: 500;
  }

  .rfq-header-text span {
    font-weight: 400;
    color: var(--grey-500);
  }

  .rfq-header p {
    margin-bottom: 0;
  }

  .rfq-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--grey-300);
    font-size: 0.85rem;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    background-color: var(--primary-50);
  }

  .rfq-status span {
    display: grid;
    align-items: center;
    color: var(--primary-500);
  }

  .rfq-status p {
    color: var(--grey-800);
  }

  .rfq-subheader {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .rfq-subheader-element {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--grey-500);
  }

  .rfq-subheader-element span {
    display: grid;
    place-items: center;
  }

  .rfq-subheader-element p {
    margin-bottom: 0;
  }

  .open-rfq-details-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    transform: var(--transition);
  }

  .open-rfq-details-icon:hover {
    transform: scale(1.1);
    color: var(--grey-800);
  }
`
