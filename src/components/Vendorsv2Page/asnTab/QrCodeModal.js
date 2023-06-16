import { ImCross } from 'react-icons/im'
import AsnModalInputContainer from './AsnModalInputContainer'
import DeliveryContainer from './DeliveryContainer'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { FaRegShareSquare } from 'react-icons/fa'
import { Tooltip } from '@mui/material'

const toolTipStyle = {
  sx: {
    '& .MuiTooltip-tooltip': {
      backgroundColor: 'f0f4f8',
      padding: `0.5 1`,
      backgroundColor: '#334e68',
      top: '0.4rem',
      fontSize: '0.6rem',
    },
  },
}

const QrCodeModal = ({ showModal, setShowModal, setQrImage, qrImage }) => {
  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => {
      setQrImage(null)
    }, 500)
  }

  return (
    <Wrapper>
      <div
        className={`asn-modal ${showModal ? 'show' : ''} `}
        onClick={closeModal}
      >
        <div className="asn-modal-content" onClick={(e) => e.stopPropagation()}>
          <h4 className="asn-modal-header">QR</h4>
          <button onClick={closeModal} className="close-modal-btn">
            <ImCross />
          </button>

          <div className="qrImage-container">
            <img src={qrImage} alt="qrCode" />
          </div>

          <div className="btns-container">
            <Tooltip
              title="Share the QR code with your vendor"
              placement="top"
              arrow
              PopperProps={toolTipStyle}
            >
              <span>
                <FaRegShareSquare />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default QrCodeModal

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

  .qrImage-container {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
  }

  .qrImage-container img {
    display: block;
    width: 90%;
    max-width: 200px;
  }

  .btns-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btns-container span {
    font-size: 2rem;
    color: var(--primary-500);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: var(--transition);
  }

  .btns-container span:hover {
    transform: scale(1.1);
  }
`
