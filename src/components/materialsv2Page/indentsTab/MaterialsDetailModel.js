import { ImCross } from 'react-icons/im'
import styled from 'styled-components'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'

const MaterialsDetailModel = ({ showModal, setShowModal, material }) => {
  const {
    projectDesc,
    activityDesc,
    createdDate,
    budgetedQty,
    inventory,
    procuredTillDate,
    variance,
  } = material

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
          <h4 className="material-modal-header">Material Details</h4>
          <button
            onClick={() => setShowModal(false)}
            className="close-modal-btn"
          >
            <ImCross />
          </button>

          <div className="details-container">
            <div className="detail-column column-1">
              <div className="detail-header">Project :</div>
              <div className="detail-value">{projectDesc}</div>
              <div className="detail-header">Activity :</div>
              <div className="detail-value">{activityDesc}</div>
              <div className="detail-header">Created Date :</div>
              <div className="detail-value">{createdDate || '23/02/2024'}</div>
            </div>

            <div className="detail-column">
              <div className="detail-header">Budgeted Quantity :</div>
              <div className="detail-value">{budgetedQty}</div>

              <div className="detail-header">Inventory :</div>
              <div className="detail-value avail-inventory">
                {inventory}
                <span className="refresh-icon">
                  <RotateLeftIcon style={{ fontSize: '1.2rem' }} />
                </span>
              </div>

              <div className="detail-header">Procured till date :</div>
              <div className="detail-value">{procuredTillDate}</div>
            </div>
            <div className="detail-column column-3">
              <div className="detail-header">Created by :</div>
              <div className="detail-value">25/04/2023</div>

              <div className="detail-header">Current Price :</div>
              <div className="detail-value">0</div>

              <div className="detail-header">Variance :</div>
              <div className="detail-value">{variance}</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default MaterialsDetailModel

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
    /* width: 40%; */
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
