import { Table, Button } from 'antd'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { dummyBidsData } from '../../../assets/data'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import axios from 'axios'

const dummyData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '4',

    name: 'Jim Red',
    age: 32,
  },
]

const BidsTable2Component = () => {
  const [lines, setLines] = useState([...dummyBidsData])

  const [editingRow, setEditingRow] = useState(null)

  const [editData, setEditData] = useState({ vendor: '', vendorPrice: '' })

  const [suggestions, setSuggestions] = useState([])

  const handleSave = (row) => {
    console.log('row', row)
    console.log('editData', editData)
    const newData = [...lines]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, { ...item, ...editData })
    setLines(newData)
    setEditingRow(null)
    setEditData({ vendor: '', vendorPrice: '' })
  }

  const handleChange = async (e) => {
    const { name, value } = e.target
    setEditData({ ...editData, [name]: value })

    if (name === 'vendor') {
      await fetchData(name, value)
    }
  }

  const fetchData = useCallback(
    debounce(async (name, value) => {
      try {
        console.log('value', value)
        const response = await axios(
          `http://13.232.221.196:9070/v1/masters/business-partner/searchBusinessPartner/${value}`
        )

        console.log('response', response)

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

    setEditData({ ...editData, vendor: result.bpDesc })
  }

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sNo',
    },
    {
      title: 'Warehouse',
      dataIndex: 'warehouse',
    },
    {
      title: 'Item',
      dataIndex: 'item',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'PlannedDate',
      dataIndex: 'plannedDate',
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
                name="vendor"
                value={editData.vendor}
                onChange={handleChange}
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
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <div>
          <Button type="link" onClick={() => setEditingRow(record.key)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleSave(record)}>
            save
          </Button>
        </div>
      ),
    },
  ]

  return (
    <Wrapper>
      <Table columns={columns} dataSource={lines} />
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
`
