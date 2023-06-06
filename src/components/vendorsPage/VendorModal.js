import axios from 'axios'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import styled from 'styled-components'
import {
  makeOnBoardAllNo,
  makeOnBoardAllYes,
  makeShowMultipleGstUnderSamePanModalTrue,
} from '../../features/vendors/VendorSlice'

// const initial = {
//   aadhaar: '',
//   gst: '',
//   pan: '',
//   pocEmail: '',
//   pocName: '',
//   pocWhatsappNo: '',
// }

const initial = {
  gst: '30AAACR5055K1ZK',
  aadhaar: '670258073448',
  pan: 'AAACR5055',
  pocName: 'Sai',
  pocWhatsappNo: '919945014010',
  pocEmail: 'gsmreddy3@gmail.com',
}

const url = 'http://13.232.221.196:9060/v1/vm/onboard'

const VendorModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch()
  const [vendorInfo, setVendorInfo] = useState(initial)

  const { showMultipleGstUnderSamePanModal, onBoardAll } = useSelector(
    (store) => store.vendor
  )

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setVendorInfo({ ...vendorInfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    for (let prop in vendorInfo) {
      if (!vendorInfo[prop]) {
        toast.error('Please add all the required fields')
        return
      }
    }

    try {
      const resp = await axios.post(url, vendorInfo)
      console.log(resp.data)

      const { data, ['message_code']: message } = resp.data

      if (
        message.includes(
          'Multiple GSTs found under PAN, would you like to onboard them all'
        )
      ) {
        dispatch(makeShowMultipleGstUnderSamePanModalTrue())
      } else {
        toast.success(`Successfully onboarded  ${vendorInfo.pocName}`)
        setVendorInfo(initial)
        setShowModal(false)
      }
    } catch (error) {
      console.log(error)
      toast.error(`Some error occured while onboarding ${vendorInfo.pocName} `)
    }
  }

  const handleMultipleGst = (e) => {
    e.preventDefault()
    setVendorInfo(initial)
    setShowModal(false)
  }

  const handleClose = () => {
    setShowModal(false)
    setVendorInfo(initial)
  }

  return (
    <Wrapper>
      <div className={`vendor-modal ${showModal ? 'show' : ''} `}>
        <div className="vendor-modal-content">
          {showMultipleGstUnderSamePanModal ? (
            <div>
              <div className="header">
                Multiple GSTs found under PAN, would you like to onboard them
                all ?
              </div>
              <form className="content">
                <div className="radio-container">
                  <input
                    type="radio"
                    id="yes"
                    name="onBoardAll"
                    value="Yes"
                    checked={onBoardAll === 'Yes'}
                    onChange={() => dispatch(makeOnBoardAllYes())}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    id="no"
                    name="onBoardAll"
                    value="No"
                    checked={onBoardAll === 'No'}
                    onChange={() => dispatch(makeOnBoardAllNo())}
                  />
                  <label htmlFor="no">No</label>
                </div>

                <div className="btns-container">
                  <button className="submit-btn" onClick={handleMultipleGst}>
                    OnBoard
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h4 className="vendor-modal-header">Onboard Business Partner</h4>
              <button onClick={handleClose} className="close-modal-btn">
                <ImCross />
              </button>

              <form className="vendor-form">
                <div className="business-credentials">
                  <div className="header">Business Credentials</div>
                  <div className="input-container">
                    <label htmlFor="gstin">
                      GSTIN <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="gstin"
                      name="gst"
                      value={vendorInfo.gst}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="aadhaar">
                      Aadhaar <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="aadhaar"
                      name="aadhaar"
                      value={vendorInfo.aadhaar}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="pan">
                      PAN <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      value={vendorInfo.pan}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="point-of-contact">
                  <div className="header">Point of Contact</div>
                  <div className="input-container">
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="pocName"
                      value={vendorInfo.pocName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="whatsappNumber">
                      Whatsapp Number <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="whatsappNumber"
                      name="pocWhatsappNo"
                      value={vendorInfo.pocWhatsappNo}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="pocEmail"
                      value={vendorInfo.pocEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>

              <div className="btns-container">
                <button className="submit-btn" onClick={handleSubmit}>
                  Onboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
export default VendorModal

const Wrapper = styled.div`
  position: absolute;
  .vendor-modal {
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

  .vendor-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .vendor-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 40%;
    position: relative;
  }

  .vendor-modal-header {
    display: inline-block;

    color: var(--grey-800);
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

  .vendor-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 1rem;
  }

  .business-credentials {
    padding: 1rem 0;
    border-radius: 7px;
    margin-bottom: 1rem;
  }

  .header {
    font-size: 1.2rem;
    color: var(--grey-500);
  }

  .input-container {
    margin: 1rem 0;
  }

  .input-container label {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
  }

  .required {
    color: red;
  }

  .input-container input {
    display: block;
    width: 100%;
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
    color: var(--grey-600);
  }

  .input-container input:focus {
    border: 1px solid var(--grey-400);
  }

  .point-of-contact {
    background-color: var(--white);
    padding: 1rem 0;
    border-radius: 7px;
    margin-bottom: 1rem;
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

  .content {
    margin-top: 1rem;
  }

  .radio-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`
