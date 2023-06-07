import axios from 'axios'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const RejectModal = ({
  showModal,
  setShowModal,
  subStatusState,
  setSubStatusState,
  materialId,
}) => {
  const [subStatusPersistIsLoading, setSubStatusPersistIsLoading] =
    useState(false)

  const rejectHandle = async () => {
    try {
      setSubStatusPersistIsLoading(true)
      await axios.put(
        `http://13.232.221.196:9090/v1/purchase/material-indent/${materialId}/REJECTED`
      )
      setSubStatusState('REJECTED')
      setSubStatusPersistIsLoading(false)
      setShowModal(false)
    } catch (error) {
      setSubStatusPersistIsLoading(false)
      console.log(error)
      toast.error('Some error occured while changing the Substatus')
    }
  }
  return (
    <Wrapper>
      <div
        className={`reject-modal ${showModal ? 'show' : ''} `}
        onClick={() => setShowModal(false)}
      >
        <div
          className="reject-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="reject-modal-header">Reject</h4>
          <button
            onClick={() => setShowModal(false)}
            className="close-modal-btn"
          >
            <ImCross />
          </button>

          <div className="reject-modal-body">
            <textarea
              name="reject"
              id="reject"
              placeholder="Please Enter the Query"
              className="reject-textarea"
            ></textarea>

            <div className="btns-container">
              <button className="reject-btn" onClick={rejectHandle}>
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          subStatusPersistIsLoading
            ? 'status-change-mask show'
            : 'status-change-mask'
        }
      >
        <div className="status-change-loader">{`Rejecting the item ...`}</div>
      </div>
    </Wrapper>
  )
}
export default RejectModal

const Wrapper = styled.div`
  .reject-modal {
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

  .reject-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .reject-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 90%;
    max-width: 50rem;
    position: relative;
  }

  .reject-modal-header {
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

  .reject-textarea {
    background-color: var(--grey-50);
    border-radius: 10px;
    width: 100%;
    height: 15rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--grey-200);
  }

  .btns-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .reject-btn {
    background-color: #f49aa0;
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--white);
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    transition: var(--transition);
    letter-spacing: 0.1rem;
  }

  .reject-btn:hover {
    background-color: #c22f3b;
  }

  .status-change-mask {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5) !important;
    display: grid;
    place-items: center;
    z-index: 30;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .status-change-mask.show {
    opacity: 1;
    pointer-events: visible;
  }

  .status-change-loader {
    color: var(--white);
    font-size: 2rem;
  }
`
