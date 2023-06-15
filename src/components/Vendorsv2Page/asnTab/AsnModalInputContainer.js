import { DatePicker } from '@mui/x-date-pickers'
import axios from 'axios'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { useEffect } from 'react'

const dateFilterStyling = {
  margin: '0',
  padding: '0',
  borderRadius: '10px',
  fontSize: '12px',

  '.MuiFormControl-root': {
    borderRadius: '10px',
    padding: '0.25rem 0.5rem',
  },
  '.MuiFormLabel-root': {
    color: 'black',
  },
  '.MuiOutlinedInput-notchedOutline ': {
    top: '0px',
  },
  '.MuiOutlinedInput-root': {
    border: '1px solid var(--grey-200)',
    transition: '0.3s ease-in-out all',
    borderRadius: '5px',
  },
  '.MuiOutlinedInput-root:hover': {
    border: '1px solid var(--grey-400)',
  },

  '.MuiOutlinedInput-input': {
    border: '1px solid transparent',
  },

  '.MuiOutlinedInput-input:hover': {
    border: '1px solid transparent',
  },

  '.MuiOutlinedInput-notchedOutline': {
    border: 'transparent',
  },
  '.MuiOutlinedInput-notchedOutline span': {
    border: 'transparent',
  },
}

const AsnModalInputContainer = ({ newAsnState, setNewAsnState }) => {
  const [wareHouseSuggestions, setWareHouseSuggestions] = useState([])
  const [BusinessPartnerSuggestions, setBusinessPartnerSuggestions] = useState(
    []
  )

  const handleChange = async (e) => {
    const { name, value } = e.target
    setNewAsnState({ ...newAsnState, [name]: value })
    fetchData(name, value)
  }

  const fetchData = useCallback(
    debounce(async (name, value) => {
      try {
        let response = []
        switch (name) {
          case 'warehouse':
            response = await axios.post(
              `http://13.232.221.196:9070/v1/masters/warehouse/searchWarehouse/${value}`
            )
            setWareHouseSuggestions(response.data)
            break

          case 'businessPartner':
            response = await axios(
              `http://13.232.221.196:9070/v1/masters/business-partner/searchBusinessPartner/${value}`
            )
            setBusinessPartnerSuggestions(response.data)
            break

          default:
            break
        }
      } catch (error) {
        console.log(error)
        console.log('some error occured while fetching sample json data')
      }
    }, 500),
    []
  )

  const handleSearchItemsClick = (name, result) => {
    switch (name) {
      case 'warehouse':
        setNewAsnState({ ...newAsnState, [name]: result.whDesc })

        setWareHouseSuggestions([])

        break

      case 'businessPartner':
        setNewAsnState({ ...newAsnState, [name]: result.bpDesc })
        setBusinessPartnerSuggestions([])
        break

      default:
        break
    }
  }

  return (
    <Wrapper>
      <div className="input-item ">
        <label htmlFor="warehouse">Warehouse </label>
        <input
          type="text"
          id="warehouse"
          name="warehouse"
          value={newAsnState.warehouse}
          onChange={handleChange}
        />

        {wareHouseSuggestions.length > 0 && (
          <ul className="drop-down-container">
            {wareHouseSuggestions.map((result, index) => {
              return (
                <li
                  key={index}
                  className="search-item"
                  onClick={() => handleSearchItemsClick('warehouse', result)}
                >
                  {result.whDesc}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className="input-item ">
        <label htmlFor="deliveryDate">Delivery Date </label>
        <input
          type="text"
          id="deliveryDate"
          name="deliveryDate"
          value={newAsnState.deliveryDate}
          onChange={handleChange}
        />
      </div>
      <div className="input-item ">
        <label htmlFor="shipmentNumber">Shipment Number </label>
        <input
          type="text"
          id="shipmentNumber"
          name="shipmentNumber"
          value={newAsnState.shipmentNumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-item ">
        <label htmlFor="driverContact">Driver Contact </label>
        <input
          type="text"
          id="driverContact"
          name="driverContact"
          value={newAsnState.driverContact}
          onChange={handleChange}
        />
      </div>
      <div className="shipment-date-container">
        <label htmlFor="shipmentDate">Shipment Date</label>
        <DatePicker
          slotProps={{ textField: { size: 'small' } }}
          showDaysOutsideCurrentMonth
          sx={dateFilterStyling}
          value={newAsnState.shipmentDate}
          format="DD/MM/YYYY"
          id="shipmentDate"
          disablePast={true}
          onChange={(newValue) => {
            setNewAsnState({ ...newAsnState, shipmentDate: newValue })
          }}
        />
        {/* <input type="text" id="shipment-date" /> */}
      </div>

      <div className="input-item ">
        <label htmlFor="driverName">Drive Name </label>
        <input
          type="text"
          id="driverName"
          name="driverName"
          value={newAsnState.driverName}
          onChange={handleChange}
        />
      </div>
      <div className="input-item ">
        <label htmlFor="shippingMode">Shipping mode</label>
        <input
          type="text"
          id="shippingMode"
          name="shippingMode"
          value={newAsnState.shippingMode}
          onChange={handleChange}
        />
      </div>
      <div className="input-item ">
        <label htmlFor="vehicleNumber">Vehicle number</label>
        <input
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          value={newAsnState.vehicleNumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-item ">
        <label htmlFor="carrierAwb">Carrier AWB</label>
        <input
          type="text"
          id="carrierAwb"
          name="carrierAwb"
          value={newAsnState.carrierAwb}
          onChange={handleChange}
        />
      </div>
      <div className="input-item ">
        <label htmlFor="businessPartner">Business Partner</label>
        <input
          type="text"
          id="businessPartner"
          name="businessPartner"
          value={newAsnState.businessPartner}
          onChange={handleChange}
        />

        {BusinessPartnerSuggestions.length > 0 && (
          <ul className="drop-down-container">
            {BusinessPartnerSuggestions.map((result, index) => {
              return (
                <li
                  key={index}
                  className="search-item"
                  onClick={() =>
                    handleSearchItemsClick('businessPartner', result)
                  }
                >
                  {result.bpDesc}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Wrapper>
  )
}
export default AsnModalInputContainer

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 1rem 3rem;
  margin: 1rem 0;

  .input-item {
    max-width: 400px;
    position: relative;
  }

  .input-item label {
    display: block;
    color: var(--grey-800);
    font-weight: 500;
    font-size: 0.8rem;
  }

  .input-item input {
    display: block;
    width: 100%;
    border: 1px solid var(--grey-100);
    border-radius: 5px;
    margin-top: 0.2rem;
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;
    color: var(--grey-900);
    transition: var(--transition);
  }

  .input-item input:focus {
    border: 1px solid var(--grey-300);
  }

  .shipment-date-container label {
    display: block;
    color: var(--grey-800);
    font-weight: 500;
    font-size: 0.8rem;
  }

  .shipment-date-container input {
    display: block;
    width: 100%;
    border-radius: 5px;
    margin-top: 0.2rem;
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;
    color: var(--grey-900);
    transition: var(--transition);
  }

  .drop-down-container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 0;
    background-color: rgba(255, 255, 255, 1);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    max-height: 15rem;
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    z-index: 2;
    border: 1px solid var(--grey-200);
  }

  .search-item {
    padding: 0.1rem 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    color: var(--grey-500);
  }

  .search-item:hover {
    background-color: var(--primary-50);
  }
`
