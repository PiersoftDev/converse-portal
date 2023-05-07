import { ImCross } from 'react-icons/im'
import AsnModalInputContainer from './AsnModalInputContainer'
import DeliveryContainer from './DeliveryContainer'
import styled from 'styled-components'

const AsnModal = ({ showModal, setShowModal }) => {
  return (
    <Wrapper>
      <div
        className={`asn-modal ${showModal ? 'show' : ''} `}
        onClick={() => setShowModal(false)}
      >
        <div className="asn-modal-content" onClick={(e) => e.stopPropagation()}>
          <h4 className="asn-modal-header">New ASN</h4>
          <AsnModalInputContainer />
          <DeliveryContainer />
          <button
            onClick={() => setShowModal(false)}
            className="close-modal-btn"
          >
            <ImCross />
          </button>
          <div className="btns-container">
            <button className="discard-btn">Discard</button>
            <button
              className="submit-btn"
              onClick={() => {
                setShowModal(false)
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default AsnModal

const Wrapper = styled.div`
  .asn-modal {
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

  .asn-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .asn-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 40%;
    position: relative;
  }

  .asn-modal-header {
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
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  .close-modal-btn:hover {
    color: #b52c37;
  }

  .btns-container {
    display: flex;
    justify-content: right;
    margin: 2rem 0;
    gap: 1rem;
  }

  .submit-btn,
  .discard-btn {
    background-color: transparent;
    border: 1px solid var(--grey-200);
    border-radius: 5px;
    padding: 0.25rem 1rem;
    letter-spacing: 0.1rem;
    transition: var(--transition);
  }

  .submit-btn {
    background-color: var(--primary-400);
    color: var(--white);
  }

  .submit-btn:hover {
    background-color: var(--primary-500);
    transform: scale(1.05);
  }

  .discard-btn:hover {
    background-color: var(--red-light);
    color: var(--red-dark);
    transform: scale(1.05);
    border: 1px solid var(--grey-100);
  }
`
