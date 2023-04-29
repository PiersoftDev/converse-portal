import { FaChevronDown } from 'react-icons/fa'
import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'

import styled from 'styled-components'

const FiltersComponent = () => {
  const [showOptions, setShowOptions] = useState(false)

  const dateFilterStyling = {
    margin: '0',
    padding: '0',
    backgroundColor: 'white',
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
      border: '2px solid transparent',
      transition: '0.3s ease-in-out all',
      borderRadius: '10px',
    },
    '.MuiOutlinedInput-root:hover': {
      border: '2px solid #60a5fa',
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
      <div className="filter">
        <div
          className="filter-selector"
          onClick={() => setShowOptions(!showOptions)}
        >
          <p>Project</p>
          <span>
            <FaChevronDown />
          </span>
        </div>

        {/* {showOptions && (
          <div className="options">
            <p>Kmv Project</p>
            <p>Dummy Project</p>
            <p>second Project</p>
            <p>thired Projects</p>
          </div>
        )} */}
      </div>

      <div className="filter">
        <div className="filter-selector">
          <p>Activity</p>
          <span>
            <FaChevronDown />
          </span>
        </div>
      </div>

      <div className="filter">
        <div className="filter-selector">
          <p>City</p>
          <span>
            <FaChevronDown />
          </span>
        </div>
      </div>

      <div className="filter">
        <div className="filter-selector">
          <p>Item</p>
          <span>
            <FaChevronDown />
          </span>
        </div>
      </div>

      <div className="filter">
        <DatePicker
          label="Planned Date"
          slotProps={{ textField: { size: 'small' } }}
          showDaysOutsideCurrentMonth
          sx={dateFilterStyling}
        />
      </div>

      <div className="filter">
        <DatePicker
          label="Created date"
          slotProps={{ textField: { size: 'small' } }}
          showDaysOutsideCurrentMonth
          sx={dateFilterStyling}
        />
      </div>

      {/* <div className="filter">
          <div className="filter-selector">
            <p>Status</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Availability</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Search</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div> */}
    </Wrapper>
  )
}
export default FiltersComponent

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  align-items: center;

  .filter {
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }

  .filter-selector {
    display: flex;
    background-color: var(--white);
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: all 0.1s;
    border: 2px solid transparent;
  }

  .filter-selector p {
    margin-bottom: 0;
    letter-spacing: 0.1rem;
  }

  .filter-selector span {
    font-weight: 700;
  }

  .filter-selector:hover {
    border: 2px solid var(--primary-400);
  }

  .options {
    position: absolute;
    background-color: var(--white);
    z-index: 22;
    top: 120%;
    border-radius: 15px;
    box-shadow: var(--shadow-4);
    border: 1px solid var(--grey-100);
  }

  .options p {
    padding: 0.5rem 1rem;
    letter-spacing: 0.1rem;
    transition: var(--transition);
    margin-bottom: 0;
  }

  .options p:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .options p:last-child {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .options p:hover {
    background-color: var(--primary-300);
  }
`
