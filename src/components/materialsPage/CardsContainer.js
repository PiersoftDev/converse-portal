import CardComponent from './CardComponent'
import styled from 'styled-components'
import { useState } from 'react'
import MaterialModal from './MaterialModal'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { makeAddtoRfqErrorStatusBackToNormal } from '../../features/MaterialIndent/MaterialSlice'

const CardsContainer = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const { rfqList, isGetRfqByCodeLoading, isGetRfqByCodeError } = useSelector(
    (store) => store.material
  )

  if (isGetRfqByCodeError) {
    dispatch(makeAddtoRfqErrorStatusBackToNormal())
    toast.error('Could not add the item to RFQ')
    return
  }

  if (rfqList.length === 0) {
    return (
      <EmptyListWrapper>
        <div className="content">
          <p>Select a line to add RFQ</p>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            Create RFQ
          </button>
        </div>
        <MaterialModal showModal={showModal} setShowModal={setShowModal} />
      </EmptyListWrapper>
    )
  }

  console.log(rfqList)
  console.log('this is in container')

  return (
    <Wrapper>
      <div className="cards">
        {rfqList.map((rfq) => {
          return <CardComponent rfq={rfq} key={rfq.id} />
        })}
      </div>

      <div className="content">
        <p>Select a line to add RFQ</p>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          Create RFQ
        </button>
      </div>

      <MaterialModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default CardsContainer

const EmptyListWrapper = styled.div`
  background-color: var(--white);
  margin-top: 0.5rem;
  border-radius: 1rem;
  padding-top: 0.25rem;
  height: 450px;

  display: grid;
  place-items: center;

  .content {
    text-align: center;
    color: var(--grey-300);
  }

  .add-btn {
    background-color: var(--primary-400);
    border: 1px solid var(--grey-200);
    color: var(--white);
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
  }

  .add-btn:hover {
    background-color: var(--primary-500);
    transform: scale(1.05);
  }
`

const Wrapper = styled.div`
  background-color: var(--white);
  margin-top: 0.5rem;
  border-radius: 1rem;
  padding-top: 0.25rem;
  min-height: 450px;
  align-self: flex-start;

  display: grid;
  grid-template-rows: 1fr auto;

  .content {
    text-align: center;
    color: var(--grey-300);
    justify-self: center;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  .add-btn {
    background-color: var(--primary-400);
    border: 1px solid var(--grey-200);
    color: var(--white);
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
  }

  .add-btn:hover {
    background-color: var(--primary-500);
    transform: scale(1.05);
  }
`
