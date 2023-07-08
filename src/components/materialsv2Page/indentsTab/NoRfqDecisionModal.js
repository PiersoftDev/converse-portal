import { ImCross } from 'react-icons/im'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ReactLoading from 'react-loading'

const NoRfqDecisionModal = ({
  showModal,
  setShowModal,
  createRfq,
  setCreateRfq,
  rfqFlowState,
  setColumns,
  saveStatusChangeForRfq,
  draftedRfq,
  isAddLinesLoading,
  setIsAddLinesLoading,
}) => {
  const dispatch = useDispatch()
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

  const {
    projectId,
    projectDesc,
    categoryId,
    categoryDesc,
    warehouseId,
    warehouseDesc,
  } = draftedRfq[0]

  const { destination, draggableId, temp } = rfqFlowState

  const openRfqDetails = async () => {
    await saveStatusChangeForRfq({ destination, draggableId, temp })
    navigate(`/rfqdetails/${item.id}`, { state: { ...item } })
  }

  const handleYes = () => {
    setCreateRfq(true)
    setShowModal(false)
  }

  const handleNo = () => {
    setShowModal(false)
    dispatch(setColumns(temp))
  }

  const handleCloseModal = () => {
    setShowModal(false)
    dispatch(setColumns(temp))
  }
  return (
    <Wrapper>
      <div
        className={`material-modal ${showModal ? 'show' : ''} `}
        onClick={handleCloseModal}
      >
        <div
          className="material-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {isAddLinesLoading && (
            <div className="rfq-loading">
              <ReactLoading
                type="balls"
                color="var(--grey-500)"
                height={50}
                width={50}
              />
            </div>
          )}

          <button onClick={handleCloseModal} className="close-modal-btn">
            <ImCross />
          </button>

          <div className="decision-content">
            <p className="decision-text">
              {`There is no RFQ for this ${projectDesc} and ${categoryId}. Do you want to create a new RFQ?`}
            </p>
            <div className="btns-container">
              <button className="yes-btn" onClick={handleYes}>
                Yes
              </button>
              <button className="no-btn" onClick={handleNo}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default NoRfqDecisionModal

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

  .decision-content {
    margin-top: 1rem;
  }

  .btns-container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .yes-btn,
  .no-btn {
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    background-color: var(--transition);
    border: 1px solid var(--grey-300);
    color: var(--grey-600);
    transition: var(--transition);
    cursor: pointer;
  }

  .yes-btn:hover {
    background-color: var(--green-light);
    border: 1px solid var(--grey-100);
    color: var(--green-dark);
    transform: scale(1.05);
  }

  .no-btn:hover {
    background-color: var(--red-light);
    border: 1px solid var(--grey-100);
    color: var(--red-dark);
    transform: scale(1.05);
  }

  .rfq-details-link {
    display: inline-flex;
    gap: 0.25rem;
    align-items: center;
    background-color: var(--primary-500);
    color: var(--white);
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    letter-spacing: 0.05rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .rfq-details-link:hover {
    transform: scale(1.05);
  }

  .icon {
    display: grid;
    place-items: center;
  }

  .rfq-loading {
    color: var(--white);
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 32;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
`
