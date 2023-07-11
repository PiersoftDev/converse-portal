import { Table, Button, Spin } from 'antd'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { dummyBidsData } from '../../../assets/data'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DatePicker } from '@mui/x-date-pickers'
import { FiEdit } from 'react-icons/fi'
import { CiSaveUp2 } from 'react-icons/ci'
import ReactLoading from 'react-loading'

import { BsCheck2Square } from 'react-icons/bs'
import { Tooltip } from '@mui/material'

const initialEditData = {
  vendorName: '',
  vendorId: '',
  vendorPrice: '',
  vendorDate: { year: '', month: '', day: '' },
}

const toolTipStyle = {
  sx: {
    '& .MuiTooltip-tooltip': {
      backgroundColor: 'f0f4f8',
      padding: `0.5 1`,
      backgroundColor: '#334e68',
      top: '0.7rem',
      fontSize: '0.6rem',
    },
  },
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

const BidsTable2Component = ({ bidsList, setBidsList }) => {
  const [editingRow, setEditingRow] = useState(null)
  const [editData, setEditData] = useState({ ...initialEditData })
  const [suggestions, setSuggestions] = useState([])

  const [isSaveLoading, setIsSaveLoading] = useState(false)

  const handleSave = async (row) => {
    if (editingRow !== row.key) return

    if (!editData.vendorName || !editData.vendorPrice || !editData.vendorDate) {
      toast.error('Please add the vendor and vendorPrice')
      return
    }

    const newData = [...bidsList]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]

    const newItemState = { ...item, ...editData }

    const {
      projectDesc,
      plannedDate,
      itemDesc,
      itemId,
      id,
      quantity,
      rfqId,
      status,
      uom,
      warehouseId,
      warehouseName,
      vendorDate,
      vendorId,
      vendorName,
      vendorPrice,
    } = newItemState

    const { year, month, day } = vendorDate

    const reqbody = [
      {
        bidCreatedDate: '2023-06-15',
        bidUpdatedDate: '2023-06-15',
        currency: 'INR',
        itemDescription: itemDesc,
        itemId,
        lineId: id,
        possibleDeliveryDate: `${year}-${month}-${day}`,
        quantity,
        rfqId,
        status,
        totalAmount: vendorPrice * quantity,
        unitPrice: vendorPrice,
        uom,
        vendorId,
        vendorName,
        warehouseId,
        warehouseName,
      },
    ]

    // const dummyReqbody = [
    //   {
    //     id: 261,
    //     rfqId: 241,
    //     lineId: 237,
    //     itemId: 'CV00000012',
    //     itemDescription: 'Std. Reinforcement TMT',
    //     quantity: 1000,
    //     uom: 'MT',
    //     vendorId: '14880',
    //     vendorName: 'CAUVERY TARPAULINS',
    //     warehouseId: '',
    //     warehouseName: '',
    //     unitPrice: 200,
    //     totalAmount: 200000,
    //     currency: 'INR',
    //     status: 'RFQ',
    //     possibleDeliveryDate: [2023, 6, 23],
    //     bidCreatedDate: [2023, 6, 15],
    //     bidUpdatedDate: [2023, 6, 15],
    //   },
    // ]

    try {
      setIsSaveLoading(true)
      const resp = await axios.post(
        `http://14.98.177.102:9004/v1/purchase/bids/save-bids`,
        reqbody
      )

      newData.splice(index, 1, newItemState)
      setIsSaveLoading(false)
      setBidsList(newData)
      setEditingRow(null)
      setEditData({ ...initialEditData })
    } catch (error) {
      setIsSaveLoading(false)
      console.log(error)
      console.log('some error occured while fetching sample json data')
    }
  }

  const renderRow = (record) => {
    return {
      className:
        editingRow === record.key && isSaveLoading ? 'editing-row' : '',
    }
  }

  const handleChange = async (e) => {
    const { name, value } = e.target
    setEditData({ ...editData, [name]: value })

    if (name === 'vendorName') {
      await fetchData(name, value)
    }
  }

  const fetchData = useCallback(
    debounce(async (name, value) => {
      try {
        console.log('value', value)
        const response = await axios(
          `http://14.98.177.102:9001/v1/masters/business-partner/searchBusinessPartner/${value}`
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
    console.log(result)

    setSuggestions([])

    setEditData({ ...editData, vendorName: result.bpDesc, vendorId: result.id })
  }

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'id',
    },
    {
      title: 'Warehouse',
      dataIndex: 'projectDesc',
    },
    {
      title: 'Item',
      dataIndex: 'itemDesc',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'PlannedDate',
      dataIndex: 'plannedDate',
      render: (text, record) => {
        return <span>{`${text[2]}/${text[1]}/${text[0]}`}</span>
      },
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <div className="input-item">
              <input
                type="text"
                name="vendorName"
                value={editData.vendorName}
                onChange={handleChange}
                autoComplete="off"
                disabled={editingRow === record.key && isSaveLoading}
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
                        {result.bpDesc}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        }
        return text
      },
    },
    {
      title: 'VendorPrice',
      dataIndex: 'vendorPrice',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <div className="input-item">
              <input
                type="text"
                name="vendorPrice"
                value={editData.vendorPrice}
                onChange={handleChange}
                autoComplete="off"
                disabled={editingRow === record.key && isSaveLoading}
              />
            </div>
          )
        }
        return text
      },
    },
    {
      title: 'VendorDate',
      dataIndex: 'vendorDate',
      render: (text, record) => {
        if (editingRow === record.key) {
          const date = editData.vendorDate

          return (
            <div className="input-item vendor-date">
              <DatePicker
                slotProps={{ textField: { size: 'small' } }}
                showDaysOutsideCurrentMonth
                sx={dateFilterStyling}
                value={`${date.day}-${date.month}-${date.year}`}
                format="DD/MM/YYYY"
                id="shipment-date"
                disablePast={true}
                disabled={editingRow === record.key && isSaveLoading}
                onChange={(newValue) => {
                  let { $D, $M, $y } = newValue
                  $M = $M + 1
                  if ($D < 10) $D = `0${$D}`
                  if ($M < 10) $M = `0${$M}`

                  setEditData({
                    ...editData,
                    vendorDate: { day: $D, month: $M, year: $y },
                  })
                }}
              />
            </div>
          )
        }
        return text
      },
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <div className="actions-container">
          {editingRow === record.key && isSaveLoading && (
            <div className="bid-save-loading">
              <ReactLoading
                type="balls"
                color="var(--grey-500)"
                height={20}
                width={30}
              />
            </div>
          )}

          <Tooltip
            title="edit"
            placement="top"
            arrow
            PopperProps={toolTipStyle}
          >
            <Button
              type="link"
              className="icon"
              onClick={() => setEditingRow(record.key)}
            >
              <FiEdit />
            </Button>
          </Tooltip>

          <Tooltip
            title={editingRow !== record.key ? 'save disabled' : 'save'}
            placement="top"
            arrow
            PopperProps={toolTipStyle}
          >
            <Button
              type="link"
              className="icon"
              onClick={() => handleSave(record)}
              // disabled={editingRow !== record.key}
            >
              <BsCheck2Square />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ]

  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={bidsList}
        onRow={renderRow}
        rowClassName={() => 'table-row save-loading'}
        pagination={false}
      />
    </Wrapper>
  )
}
export default BidsTable2Component

const Wrapper = styled.div`
  border: 1px solid var(--grey-100);
  border-radius: 10px;

  .ant-table-cell {
    padding: 0.5rem !important;
  }

  .input-item {
    position: relative;
  }

  .input-item input {
    display: block;
    width: %;
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

  .vendor-date {
  }

  .vendor-date input {
    border: 1px solid transparent;
    background-color: var(--white);
  }

  .vendor-date input:focus {
    outline: none;
    border: 1px solid transparent;
  }

  .icon {
    color: var(--primary-500);
    border: none;
  }

  .table-row {
    position: relative;
  }
  .actions-container {
    /* border: 1px solid red; */
    position: relative;
  }

  .bid-save-loading {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 32;
    top: 0;
    left: 0;
    border-radius: 5px;
  }
`
