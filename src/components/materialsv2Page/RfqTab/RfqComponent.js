import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { FiFilter } from 'react-icons/fi'

import ReactLoading from 'react-loading'
import OrderComponent from '../purchaseTab/OrderComponent'
import SingleRfq from './SingleRfq'
import { useEffect, useState } from 'react'
import CreateRfqModal from './CreateRfqModal'
import { useDispatch } from 'react-redux'
import { getRfqList } from '../../../features/MaterialIndent/MaterialSlice'

const RfqComponent = () => {
  const dispatch = useDispatch()
  const { rfqItems, rfqItemsLoading, rfqItemsError } = useSelector(
    (store) => store.material
  )

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getRfqList())
  }, [])

  if (rfqItemsLoading) {
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

  if (rfqItemsError) {
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

        <button className="create-rfq" onClick={() => setShowModal(true)}>
          <span className="create-rfq-icon">
            <GrFormAdd />
          </span>
          <span className="create-rfq-text">Create RFQ</span>
        </button>
      </div>

      <div className="rfqs-container">
        {rfqItems.map((item) => {
          return <SingleRfq key={item.id} item={item} />
        })}
      </div>
      <CreateRfqModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default RfqComponent

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

  .rfqs-container {
  }

  .create-rfq {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    background-color: var(--white);
    border: 1px solid var(--grey-400);
    border-radius: 5px;
    transition: var(--transition);
    cursor: pointer;
  }

  .create-rfq-icon {
    display: grid;
    place-items: center;
    font-size: 1.5rem;
  }

  .create-rfq:hover {
    transform: scale(1.05);
  }
`
