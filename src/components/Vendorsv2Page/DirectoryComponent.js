import { useState } from 'react'

import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ReactLoading from 'react-loading'
import axios from 'axios'

import { FiFilter } from 'react-icons/fi'
import { GrFormAdd } from 'react-icons/gr'
import VendorTableComponent from './VendorTableComponent'
import VendorModal from './VendorModal'

const DirectoryComponent = () => {
  const [showModal, setShowModal] = useState(false)

  const { vendorsList, isLoading, isError } = useSelector(
    (store) => store.vendor
  )

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
      <div className="filter-container">
        <div className="all-filter">
          <span className="filter-icon">
            <FiFilter />
          </span>

          <div className="filter-text">Add Filters</div>
        </div>

        <button className="create-order" onClick={() => setShowModal(true)}>
          <span className="create-order-icon">
            <GrFormAdd />
          </span>
          <span className="create-order-text">Create Order</span>
        </button>
      </div>

      <VendorTableComponent vendorsList={vendorsList} />
      <VendorModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default DirectoryComponent

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const Wrapper = styled.div`
  padding: 2rem;
  overflow: scroll;

  .filter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .all-filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--grey-300);
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    color: var(--grey-900);
    cursor: pointer;
    transition: var(--transition);
  }

  .all-filter:hover {
    transform: scale(1.05);
  }

  .orders-container {
  }

  .create-order {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    background-color: var(--white);
    border: 1px solid var(--grey-400);
    border-radius: 5px;
    transition: var(--transition);
  }

  .create-order-icon {
    display: grid;
    place-items: center;
    font-size: 1.5rem;
  }

  .create-order:hover {
    transform: scale(1.05);
  }
`
