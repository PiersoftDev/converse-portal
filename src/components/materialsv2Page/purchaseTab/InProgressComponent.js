import { FiFilter } from 'react-icons/fi'

import styled from 'styled-components'
import OrderComponent from './OrderComponent'
import { GrFormAdd } from 'react-icons/gr'
import { useState } from 'react'
import CreateOrderModal from './CreateOrderModal'
import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading'

const dummyRfqItems = [
  {
    id: 236,
    projectId: '3100_1079',
    projectDesc: 'APTIDCO-AMARAVATHI',
    categoryId: 'A02',
    categoryDesc: 'A02',
    plannedDate: [2023, 6, 17],
    warehouseId: '1083',
    warehouseDesc: 'Regional Office - Vijayawada',
    status: 'APPROVED',
    createdDate: [2023, 6, 14],
  },
  {
    id: 235,
    projectId: '3100_1079',
    projectDesc: 'APTIDCO-AMARAVATHI',
    categoryId: 'CV',
    categoryDesc: 'CV',
    plannedDate: [2023, 6, 16],
    warehouseId: '1530',
    warehouseDesc: 'CPWD-200 BED ESIC SANATHNAGAR',
    status: 'Draft',
    createdDate: [2023, 6, 14],
  },
  {
    id: 234,
    projectId: '3100_16005',
    projectDesc: 'SWDBCD-RESIDENTIAL COMPLEX RAN',
    categoryId: 'CV',
    categoryDesc: 'CV',
    plannedDate: [2023, 6, 15],
    warehouseId: '16005',
    warehouseDesc: 'SWDBCD-RESIDENTIAL COMPLEX RAN',
    status: 'Draft',
    createdDate: [2023, 6, 14],
  },
  {
    id: 233,
    projectId: '3100_1079',
    projectDesc: 'APTIDCO-AMARAVATHI',
    categoryId: 'A02',
    categoryDesc: 'A02',
    plannedDate: [2023, 6, 30],
    warehouseId: '1082',
    warehouseDesc: 'APTIDCO - GUDIVADA',
    status: 'APPROVED',
    createdDate: [2023, 6, 14],
  },
]

const InProgressComponent = () => {
  const [showModal, setShowModal] = useState(false)

  const { rfqItems, rfqItemsLoading, rfqItemsError } = useSelector(
    (store) => store.material
  )

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

        <button className="create-order" onClick={() => setShowModal(true)}>
          <span className="create-order-icon">
            <GrFormAdd />
          </span>
          <span className="create-order-text">Create Order</span>
        </button>
      </div>

      <div className="orders-container">
        {dummyRfqItems.map((item) => {
          return <OrderComponent key={item.id} item={item} />
        })}
      </div>

      <CreateOrderModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default InProgressComponent

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
