import { DatePicker } from '@mui/x-date-pickers'
import { toast } from 'react-toastify'
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import { addRFQToList } from '../../features/MaterialIndent/MaterialSlice'
import { useDispatch } from 'react-redux'

const url = 'http://13.232.221.196:8081/v1/purchase/rfq/create-rfq'

const MaterialModalInputContainer = ({
  setShowModal,
  loadingAndErrorStates,
}) => {
  const dispatch = useDispatch()
  const [projectCode, setProjectCode] = useState('')
  const [category, setCategory] = useState('')
  const [plannedDate, setPlannedDate] = useState('')
  const [warehouseCode, setWarehouseCode] = useState('')

  const { setIsError, setIsLoading } = loadingAndErrorStates

  const createRFQ = async () => {
    if (!projectCode || !category || !plannedDate || !warehouseCode) {
      toast.error('Pls enter all the values')
      return
    }

    let { $y: year, $M: month, $D: day } = plannedDate

    month = parseInt(month) + 1

    month = month > 9 ? month : `0${month}`
    day = day > 9 ? day : `0${day}`

    const reqBody = {
      category: category,
      plannedDate: `${year}-${month}-${day}`,
      projectCode: projectCode,
      warehouseCode: warehouseCode,
    }

    try {
      console.log(reqBody)
      setIsLoading(true)
      setIsError(false)
      await axios.post(url, reqBody)
      setIsLoading(false)
      setCategory('')
      setProjectCode('')
      setWarehouseCode('')
      setPlannedDate('')
      dispatch(addRFQToList(reqBody))
      setShowModal(false)
      toast.success('A New RFQ is created')
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      setCategory('')
      setProjectCode('')
      setWarehouseCode('')
      setPlannedDate('')
      setShowModal(false)
      toast.error('An error while creating a new RFQ')
    }
  }

  const discardRfq = () => {
    setCategory('')
    setProjectCode('')
    setWarehouseCode('')
    setPlannedDate('')
    setShowModal(false)
  }

  return (
    <Wrapper>
      <div className="input-item ">
        <label htmlFor="projectCode">Project Code </label>
        <input
          type="text"
          value={projectCode}
          onChange={(e) => setProjectCode(e.target.value)}
          id="projectCode"
        />
      </div>
      <div className="input-item ">
        <label htmlFor="category">Category </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        />
      </div>
      <div className="planned-date-container">
        <label htmlFor="Planned-date">Planned Date</label>
        <DatePicker
          slotProps={{ textField: { size: 'small' } }}
          showDaysOutsideCurrentMonth
          sx={dateFilterStyling}
          id="planned-date"
          value={plannedDate}
          onChange={(newValue) => setPlannedDate(newValue)}
          formatDate={(date) => moment(date).format('YYYY-MM-DD')}
        />
      </div>
      <div className="input-item">
        <label htmlFor="warehouseCode">Warehouse Code</label>
        <input
          type="text"
          value={warehouseCode}
          onChange={(e) => setWarehouseCode(e.target.value)}
          id="warehouseCode"
        />
      </div>

      <div className="btns-container">
        <button className="discard-btn" onClick={discardRfq}>
          Discard
        </button>
        <button className="create-btn" onClick={createRFQ}>
          Create
        </button>
      </div>
    </Wrapper>
  )
}
export default MaterialModalInputContainer

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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  position: relative;

  .input-item {
    /* max-width: 400px; */
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

  .planned-date-container label {
    display: block;
    color: var(--grey-800);
    font-weight: 500;
    font-size: 0.8rem;
  }

  .planned-date-container input {
    display: block;
    width: 100%;

    border-radius: 5px;
    margin-top: 0.2rem;
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;
    color: var(--grey-900);
    transition: var(--transition);
  }

  .btns-container {
    display: flex;
    justify-content: right;
    margin: 2rem 0;
    gap: 1rem;
  }

  .create-btn,
  .discard-btn {
    background-color: transparent;
    border: 1px solid var(--grey-200);
    border-radius: 5px;
    padding: 0.25rem 1rem;
    letter-spacing: 0.1rem;
    transition: var(--transition);
  }

  .create-btn {
    background-color: var(--primary-400);
    color: var(--white);
  }

  .create-btn:hover {
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
