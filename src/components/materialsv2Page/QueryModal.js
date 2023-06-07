import axios from 'axios'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const QueryModal = ({
  showModal,
  setShowModal,
  subStatusState,
  setSubStatusState,
  setComments,
  materialId,
}) => {
  const [queryPersistIsLoading, setQueryPersistIsLoading] = useState(false)
  const [queryText, setQueryText] = useState('')

  const closeModal = () => {
    setShowModal(false)
    setQueryText('')
  }

  const handleSubmit = async () => {
    try {
      setQueryPersistIsLoading(true)
      await axios.put(
        `http://13.232.221.196:9090/v1/purchase/material-indent/${materialId}/ONHOLD/${queryText}`
      )

      setComments(queryText)
      setQueryText('')
      setSubStatusState('ONHOLD')
      setQueryPersistIsLoading(false)
      setShowModal(false)
    } catch (error) {
      setQueryPersistIsLoading(false)
      console.log(error)
      toast.error('Some error occured while raising a query')
    }
  }

  return (
    <Wrapper>
      <div
        className={`query-modal ${showModal ? 'show' : ''} `}
        onClick={closeModal}
      >
        <div
          className="query-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="query-modal-header">Query</h4>
          <button onClick={closeModal} className="close-modal-btn">
            <ImCross />
          </button>

          <div className="query-modal-body">
            <textarea
              name="query"
              id="query"
              placeholder="Please Enter the Query"
              className="query-textarea"
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
            ></textarea>

            <div className="btns-container">
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          queryPersistIsLoading
            ? 'status-change-mask show'
            : 'status-change-mask'
        }
      >
        <div className="status-change-loader">{`Submitting the query ...`}</div>
      </div>
    </Wrapper>
  )
}
export default QueryModal

const Wrapper = styled.div`
  .query-modal {
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

  .query-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .query-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 90%;
    max-width: 50rem;
    position: relative;
  }

  .query-modal-header {
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

  .query-textarea {
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

  .submit-btn {
    background-color: var(--primary-400);
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--white);
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    transition: var(--transition);
    letter-spacing: 0.1rem;
  }

  .submit-btn:hover {
    background-color: var(--primary-600);
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
