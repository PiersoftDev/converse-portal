import { ImCross } from 'react-icons/im'
import styled from 'styled-components'

const CreateRfqModal = ({ showModal, setShowModal }) => {
  return (
    <Wrapper>
      <div
        className={`comments-modal ${showModal ? 'show' : ''} `}
        onClick={() => setShowModal(false)}
      >
        <div
          className="comments-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="comments-modal-header">Comments</h4>
          <button
            onClick={() => setShowModal(false)}
            className="close-modal-btn"
          >
            <ImCross />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateRfqModal

const Wrapper = styled.div`
  .comments-modal {
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

  .comments-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .comments-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 90%;
    max-width: 50rem;
    position: relative;
  }

  .comments-modal-header {
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

  .comments-container {
    margin-top: 1rem;
  }

  .comment {
    color: var(--grey-700);
  }
`
