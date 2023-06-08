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

const OrderComponent = ({ item }) => {
  const navigate = useNavigate()

  const openOrderDetails = () => {
    navigate(`/rfqdetails/123`, { state: { ...item } })
  }

  return (
    <Wrapper>
      <span className="open-order-details-icon" onClick={openOrderDetails}>
        <RiShareBoxLine />
      </span>
      <div className="order-header">
        <p className="order-header-text">
          <span>#80149 - </span> Summer Lenin Jacket SS22
        </p>
        <div className="order-status">
          <span>
            <BsGlobeAmericas />
          </span>
          <p>In Progress</p>
        </div>
      </div>
      <div className="order-subheader">
        <div className="order-subheader-element">
          <span>
            <BsFillBuildingFill />
          </span>
          <p>Bozekurt KonfesiyonSan A.S</p>
        </div>
        <div className="order-subheader-element">
          <span>
            <MdLocationOn />
          </span>
          <p>Turkey</p>
        </div>
        <div className="order-subheader-element">
          <span>
            <BsFillPersonFill />
          </span>
          <p>Stephanie carvole</p>
        </div>
        <div className="order-subheader-element">
          <span>
            <BsFillDatabaseFill />
          </span>
          <p>Jackets & Coats</p>
        </div>
      </div>
      <div className="order-sep-line"></div>
      <div className="order-footer">
        <span className="order-footer-icon">
          <TbTruckLoading />
        </span>
        <p>{`Pre-Production (2/11)`}</p>
        <span className="order-footer-time">updated 4d ago</span>
      </div>
    </Wrapper>
  )
}
export default OrderComponent

const Wrapper = styled.div`
  border: 1px solid var(--grey-100);
  border-radius: 10px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 1rem;
  position: relative;

  .order-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .order-header-text {
    color: var(--grey-800);
    font-weight: 500;
  }

  .order-header-text span {
    font-weight: 400;
    color: var(--grey-500);
  }

  .order-header p {
    margin-bottom: 0;
  }

  .order-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--grey-300);
    font-size: 0.85rem;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    background-color: var(--primary-50);
  }

  .order-status span {
    display: grid;
    align-items: center;
    color: var(--primary-500);
  }

  .order-status p {
    color: var(--grey-800);
  }

  .order-subheader {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .order-subheader-element {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--grey-500);
  }

  .order-subheader-element span {
    display: grid;
    place-items: center;
  }

  .order-subheader-element p {
    margin-bottom: 0;
  }

  .order-sep-line {
    border-bottom: 1px solid var(--grey-100);
    margin: 1rem 0;
  }

  .order-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .order-footer-icon {
    display: grid;
    place-items: center;
    background-color: var(--primary-500);
    color: var(--white);
    padding: 0.3rem;
    border-radius: 5px;
  }

  .order-footer p {
    margin-bottom: 0;
    color: var(--grey-700);
  }

  .open-order-details-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    transform: var(--transition);
  }

  .open-order-details-icon:hover {
    transform: scale(1.1);
    color: var(--grey-800);
  }
`
