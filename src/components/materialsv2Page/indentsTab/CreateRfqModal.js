import axios from 'axios'
import { useCallback, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import { useEffect } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import debounce from 'lodash.debounce'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Warehouse } from '@mui/icons-material'

const url = 'http://14.98.177.102:9004/v1/purchase/rfq/create-rfq'

const CreateRfqModal = ({
  showModal,
  setShowModal,
  draftedRfq,
  rfqFlowState,
  setColumns,
  saveStatusChangeForRfq,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    projectId,
    projectDesc,
    categoryId,
    categoryDesc,
    warehouseId,
    warehouseDesc,
  } = draftedRfq[0]

  const [plannedDate, setPlannedDate] = useState('')
  const [warehouse, setWarehouse] = useState({ id: '', desc: '' })
  const [suggestions, setSuggestions] = useState([])

  const { destination, draggableId, temp } = rfqFlowState

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleChange = async (e) => {
    const { name, value } = e.target
    setWarehouse({ id: '', desc: value })
    fetchData(name, value)
  }

  const fetchData = useCallback(
    debounce(async (name, value) => {
      try {
        let response = await axios.post(
          `http://14.98.177.102:9001/v1/masters/warehouse/searchWarehouse/${value}`
        )
        setSuggestions(response.data)
      } catch (error) {
        console.log(error)
        console.log('some error occured while fetching sample json data')
      }
    }, 500),
    []
  )

  const handleSearchItemsClick = (result) => {
    setSuggestions([])
    setWarehouse({ id: result.whCode, desc: result.whDesc })
  }

  const discardRfq = () => {
    setShowModal(false)
    dispatch(setColumns(temp))
  }

  const createRFQ = async () => {
    if (!plannedDate || !warehouse.desc || !warehouse.id) {
      toast.error('Pls enter the  warehouse and planned date')
      return
    }

    let { $D, $M, $y } = plannedDate

    $M = $M + 1

    if ($D < 10) $D = `0${$D}`

    if ($M < 10) $M = `0${$M}`

    const reqBody = {
      categoryId: categoryId,
      categoryDesc: categoryDesc,
      projectId: projectId,
      projectDesc: projectDesc,
      warehouseId: warehouse.id,
      warehouseDesc: warehouse.desc,
      plannedDate: `${$y}-${$M}-${$D}`,
      status: 'DRAFT',
    }

    try {
      console.log(reqBody)
      setIsLoading(true)
      setIsError(false)
      const resp = await axios.post(url, reqBody)
      console.log(resp.data)
      setIsLoading(false)
      setShowModal(false)
      await saveStatusChangeForRfq({ draggableId, rfqId: resp.data.id })
      navigate(`/rfqdetails/123`, {
        state: {
          ...resp.data,
        },
      })

      toast.success('A New RFQ is created')
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      setShowModal(false)
      dispatch(setColumns(temp))
      toast.error('An error while creating a new RFQ')
    }
  }

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
      <div className={`material-modal ${showModal ? 'show' : ''} `}>
        <div className="material-modal-content">
          {isLoading && (
            <div className="create-rfq-loading">
              <ReactLoading
                type="balls"
                color="var(--grey-500)"
                height={50}
                width={50}
              />
            </div>
          )}

          <h4 className="material-modal-header">New RFQ</h4>

          <div className="input-container">
            <div className="input-item ">
              <label htmlFor="project">Project </label>
              <input
                type="text"
                value={projectDesc}
                name="project"
                id="project"
                disabled="disabled"
              />
            </div>
            <div className="input-item ">
              <label htmlFor="category">Category </label>
              <input
                type="text"
                value={categoryDesc}
                name="category"
                id="category"
                disabled="disabled"
              />
            </div>

            <div className="input-item">
              <label htmlFor="warehouse">Warehouse </label>
              <input
                type="text"
                value={warehouse.desc}
                name="warehouse"
                id="warehouse"
                onChange={handleChange}
                autoComplete="off"
              />

              {suggestions.length > 0 && (
                <ul className="drop-down-container">
                  {suggestions.map((result, index) => {
                    return (
                      <li
                        key={index}
                        className="search-item"
                        onClick={() => handleSearchItemsClick(result)}
                      >
                        {result.whDesc}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            <div className="input-item plannedDate-container">
              <label htmlFor="plannedDate">Planned Date</label>
              <DatePicker
                slotProps={{ textField: { size: 'small' } }}
                showDaysOutsideCurrentMonth
                sx={dateFilterStyling}
                value={plannedDate}
                format="DD/MM/YYYY"
                id="shipment-date"
                disablePast={true}
                onChange={(newValue) => setPlannedDate(newValue)}
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
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default CreateRfqModal

const Wrapper = styled.div`
  position: absolute;
  .material-modal {
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

  .material-modal.show {
    opacity: 1;
    pointer-events: visible;
  }

  .material-modal-content {
    background-color: var(--white);
    padding: 2rem 3rem;
    border-radius: 10px;
    color: var(--grey-700);
    width: 25%;
    max-width: 30rem;
    position: relative;
  }

  .material-modal-header {
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

  .create-rfq-loading {
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

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    position: relative;
  }

  .input-item {
    /* max-width: 400px; */
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

  .plannedDate-container input {
    border: 1px solid transparent;
  }

  .plannedDate-container input:focus {
    outline: none;
    border: 1px solid transparent;
  }
`
