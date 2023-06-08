import { ImCross } from 'react-icons/im'
import styled from 'styled-components'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import { useNavigate } from 'react-router-dom'
import { RiShareBoxLine } from 'react-icons/ri'
import { useState } from 'react'
import CreateRfqModal from './RfqTab/CreateRfqModal'

const RfqDecisionModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate()
  const item = {
    id: 123,
    projectId: 'random',
    categoryId: 'cat random',
    category: 'cat random',
    plannedDate: 'random date',
    warehouseId: 'random id',
    warehouseCode: 'random code',
    projectCode: 'random code',
  }

  const [createRfq, setCreateRfq] = useState(false)

  const openRfqDetails = () => {
    navigate(`/rfqdetails/${item.id}`, { state: { ...item } })
  }

  const handleNo = () => {
    setCreateRfq(true)
    setShowModal(false)
  }
  return (
    <Wrapper>
      <div
        className={`material-modal ${showModal ? 'show' : ''} `}
        onClick={() => setShowModal(false)}
      >
        <div
          className="material-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowModal(false)}
            className="close-modal-btn"
          >
            <ImCross />
          </button>

          <div className="decision-content">
            <p className="decision-text">
              There exists an RFQ
              <span className="rfq-details-link" onClick={openRfqDetails}>
                <span>#123RFDE </span>
                <span className="icon">
                  <RiShareBoxLine />
                </span>
              </span>
              . Do you want to add this line to RFQ ?
            </p>
            <div className="btns-container">
              <button className="yes-btn" onClick={openRfqDetails}>
                Yes, Take me to RFQ
              </button>
              <button className="no-btn" onClick={handleNo}>
                No, Create a new RFQ
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateRfqModal showModal={createRfq} setShowModal={setCreateRfq} />
    </Wrapper>
  )
}
export default RfqDecisionModal

const Wrapper = styled.div`
  .material-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 30;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .material-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .material-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 90%;
    max-width: 50rem;
    position: relative;
  }

  .material-modal-header {
    display: inline-block;
    border-bottom: 1px solid var(--grey-100);
    color: var(--grey-600);
    text-align: left;
    padding: 0.5rem 0;
  }

  .close-modal-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: #f8a9b0;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
  }

  .close-modal-btn:hover {
    color: #b52c37;
  }

  .details-container {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    font-size: 0.9rem;
    margin-top: 2rem;
  }

  .detail-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem 3rem;
  }

  .column-3 .detail-header {
    gap: 0;
  }

  .detail-header {
    color: var(--grey-500);
  }

  .detail-value {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .avail-inventory {
    position: relative;
    top: -0.2rem;
  }

  .refresh-icon {
    margin: 0 0.4rem;
    color: rgba(224, 73, 3, 0.964);
    transition: var(--transition);
    cursor: pointer;
  }

  .next-steps {
    display: inline-block;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--grey-300);
    background-color: var(--primary-400);
    color: var(--white);
    justify-self: flex-start;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    top: -0.5rem;
  }
`
