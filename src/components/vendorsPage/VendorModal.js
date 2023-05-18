import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { toast } from 'react-toastify'

import styled from 'styled-components'

const initial = {
  gstin: '',
  aadhaar: '',
  pan: '',
  name: '',
  whatsappNumber: '',
  email: '',
}

const VendorModal = ({ showModal, setShowModal }) => {
  const [vendorInfo, setVendorInfo] = useState(initial)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setVendorInfo({ ...vendorInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    for (let prop in vendorInfo) {
      if (!vendorInfo[prop]) {
        toast.error('Please add all the required fields')
        return
      }
    }

    toast.success(`Successfully onboarded  ${vendorInfo.name}`)
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
                  name="gstin"
                  value={vendorInfo.gstin}
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
                  name="name"
                  value={vendorInfo.name}
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
                  name="whatsappNumber"
                  value={vendorInfo.whatsappNumber}
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
                  name="email"
                  value={vendorInfo.email}
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
`
