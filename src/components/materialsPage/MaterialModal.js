import styled from 'styled-components'
import MaterialModalInputContainer from './MaterialModalInputContainer'
import { useState } from 'react'

const MaterialModal = ({ showModal, setShowModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const loadingAndErrorStates = {
    isLoading,
    isError,
    setIsLoading,
    setIsError,
  }

  return (
    <Wrapper>
      <div className={`material-modal ${showModal ? 'show' : ''} `}>
        <div className="material-modal-content">
          {isLoading && (
            <div className="create-rfq-loading">
              <h4>Loading ...</h4>
            </div>
          )}

          <h4 className="material-modal-header">New RFQ</h4>
          <MaterialModalInputContainer
            setShowModal={setShowModal}
            loadingAndErrorStates={loadingAndErrorStates}
          />
        </div>
      </div>
    </Wrapper>
  )
}
export default MaterialModal

const Wrapper = styled.div`
  position: absolute;
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
    width: 25%;
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
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  .close-modal-btn:hover {
    color: #b52c37;
  }

  .create-rfq-loading {
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
