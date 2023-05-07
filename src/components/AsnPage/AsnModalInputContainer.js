import { DatePicker } from '@mui/x-date-pickers'
import styled from 'styled-components'

const AsnModalInputContainer = () => {
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
  return (
    <Wrapper>
      <div className="input-item ">
        <label htmlFor="warehouse">Warehouse </label>
        <input type="text" id="warehouse" />
      </div>
      <div className="input-item ">
        <label htmlFor="delivery-date">Delivery Date </label>
        <input type="text" id="delivery-date" />
      </div>
      <div className="input-item ">
        <label htmlFor="shipment-number">Shipment Number </label>
        <input type="text" id="shipment-number" />
      </div>
      <div className="input-item ">
        <label htmlFor="driver-contact">Driver Contact </label>
        <input type="text" id="driver-contact" />
      </div>
      <div className="shipment-date-container">
        <label htmlFor="shipment-date">Shipment Date</label>
        <DatePicker
          slotProps={{ textField: { size: 'small' } }}
          showDaysOutsideCurrentMonth
          sx={dateFilterStyling}
          id="shipment-date"
        />
        {/* <input type="text" id="shipment-date" /> */}
      </div>

      <div className="input-item ">
        <label htmlFor="driver-name">Drive Name </label>
        <input type="text" id="driver-name" />
      </div>
      <div className="input-item ">
        <label htmlFor="shipping-mode">Shipping mode</label>
        <input type="text" id="shipping-mode" />
      </div>
      <div className="input-item ">
        <label htmlFor="vehicle-number">Vehicle number</label>
        <input type="text" id="vehicle-number" />
      </div>
      <div className="input-item ">
        <label htmlFor="carrier-awb">Carrier AWB</label>
        <input type="text" id="carrier-awb" />
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
`
