import { FiFilter } from 'react-icons/fi'

import styled from 'styled-components'

import { GrFormAdd } from 'react-icons/gr'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading'

import AsnTableComponent from './AsnTableComponent'
import AsnModal from './AsnModal'
import QrCodeModal from './QrCodeModal'

const AsnTabComponent = () => {
  const [showModal, setShowModal] = useState(false)
  const [showQrModal, setShowQrModal] = useState(false)
  const [qrImage, setQrImage] = useState(null)

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
      <AsnTableComponent />
      <AsnModal
        showModal={showModal}
        setShowModal={setShowModal}
        setQrImage={setQrImage}
        setShowQrModal={setShowQrModal}
      />

      <QrCodeModal
        showModal={showQrModal}
        setShowModal={setShowQrModal}
        setQrImage={setQrImage}
        qrImage={qrImage}
      />
    </Wrapper>
  )
}
export default AsnTabComponent

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
