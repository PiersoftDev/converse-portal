import { ImCross } from 'react-icons/im'
import AsnModalInputContainer from './AsnModalInputContainer'
import DeliveryContainer from './DeliveryContainer'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { toast } from 'react-toastify'

const initialState = {
  warehouse: '',
  warehouseId: '',
  deliveryDate: '',
  shipmentNumber: '',
  driverContact: '',
  shipmentDate: '',
  driverName: '',
  shippingMode: '',
  vehicleNumber: '',
  carrierAwb: '',
  businessPartner: '',
  businessPartnerId: '',
}

const AsnModal = ({ showModal, setShowModal, setQrImage, setShowQrModal }) => {
  const [newAsnState, setNewAsnState] = useState(initialState)

  const [isLoading, setIsLoading] = useState(false)

  const closeModal = () => {
    setShowModal(false)
    setNewAsnState(initialState)
  }

  const getDate = (date) => {
    let { $D, $M, $y } = date

    $M = $M + 1

    if ($D < 10) $D = `0${$D}`

    if ($M < 10) $M = `0${$M}`

    return `${$y}-${$M}-${$D}`
  }

  const handleSubmit = async () => {
    console.log('newAsnState', newAsnState)

    const {
      warehouse: warehouseDesc,
      warehouseId,
      deliveryDate,
      shipmentNumber,
      driverContact,
      shipmentDate,
      driverName,
      shippingMode: shipmentMode,
      vehicleNumber,
      carrierAwb: carrierAWB,
      businessPartner: businessPartnerDesc,
      businessPartnerId,
    } = newAsnState

    if (
      !warehouseId ||
      !businessPartnerId ||
      !shipmentNumber ||
      !shipmentDate ||
      !deliveryDate ||
      !driverName ||
      !driverContact ||
      !vehicleNumber ||
      !carrierAWB ||
      !shipmentMode ||
      !warehouseDesc ||
      !businessPartnerDesc
    ) {
      toast.error('Please fill all the fields')
      return
    }

    const reqbody = {
      businessPartnerDesc,
      businessPartnerId,
      carrierAWB,
      deliveryDate: getDate(deliveryDate),
      driverContact,
      driverName,
      shipmentDate: getDate(shipmentDate),
      shipmentMode,
      shipmentNumber,
      vehicleNumber,
      warehouseDesc,
      warehouseId,
    }

    try {
      setIsLoading(true)
      console.log('reqbody', reqbody)
      const response = await axios.post(
        'http://13.232.221.196:9090/v1/purchase/asn/create-asn',
        reqbody
      )
      console.log(response.data)
      setIsLoading(false)
      setQrImage(response.data)
      setNewAsnState(initialState)
      setShowModal(false)
      setTimeout(() => {
        setShowQrModal(true)
      }, 300)
    } catch (error) {
      setIsLoading(false)
      setNewAsnState(initialState)
      setShowModal(false)
      console.log(error)
      console.log('some error occuured while creating asn')
    }
  }

  return (
    <Wrapper>
      <div
        className={`asn-modal ${showModal ? 'show' : ''} `}
        onClick={closeModal}
      >
        <div className="asn-modal-content" onClick={(e) => e.stopPropagation()}>
          {isLoading && (
            <div className="create-asn-loading">
              <ReactLoading
                type="balls"
                color="var(--grey-500)"
                height={50}
                width={50}
              />
            </div>
          )}

          <h4 className="asn-modal-header">New ASN</h4>
          <AsnModalInputContainer
            newAsnState={newAsnState}
            setNewAsnState={setNewAsnState}
          />
          <DeliveryContainer />
          <button onClick={closeModal} className="close-modal-btn">
            <ImCross />
          </button>
          <div className="btns-container">
            <button className="discard-btn" onClick={closeModal}>
              Discard
            </button>
            <button className="submit-btn" onClick={handleSubmit}>
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

  .create-asn-loading {
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
