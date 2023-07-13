import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { FiFilter } from 'react-icons/fi'

import ReactLoading from 'react-loading'
import OrderComponent from '../purchaseOrderTab/OrderComponent'
import SingleRfq from './SingleRfq'
import { useEffect, useState } from 'react'
import CreateRfqModal from './CreateRfqModal'
import { useDispatch } from 'react-redux'
import { getRfqList } from '../../../features/MaterialIndent/MaterialSlice'
import { Space, Table, Tag } from 'antd'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

import {
  AccessAlarm,
  DocumentScannerOutlined,
  Drafts,
  HourglassBottomOutlined,
  SearchOutlined,
  WalletOutlined,
} from '@mui/icons-material'
import { rfqTableData } from '../../../assets/data/rfqTableData'

const RfqImpData = [
  {
    id: 1,
    icon: <AccessAlarm style={{ color: '#40128B' }} />,
    text: 'Overdue Amount',
    amount: '$64,000',
  },
  {
    id: 2,
    icon: <Drafts style={{ color: '#BE6DB7' }} />,
    text: 'Drafted Tools',
    amount: '$12,000',
  },
  {
    id: 3,
    icon: <WalletOutlined style={{ color: '#7A3E3E' }} />,
    text: 'Unpaid Totals',
    amount: '$45,000',
  },
  {
    id: 4,
    icon: <HourglassBottomOutlined style={{ color: '#0081C9' }} />,
    text: 'Average Paid time',
    amount: '64 Days',
  },
  {
    id: 5,
    icon: <DocumentScannerOutlined style={{ color: '#EB4C88' }} />,
    text: 'Invoices Scheduled today',
    amount: '74',
  },
]

const columns = [
  {
    title: 'Warehouse',
    dataIndex: 'warehouse',
    key: 'warhouse',
    responsive: ['md'],
    align: 'center',
  },
  {
    title: 'Shipment Number',
    dataIndex: 'shipmentNumber',
    key: 'shipmentNumber',
    align: 'center',
  },
  {
    title: 'Shipment Date',
    dataIndex: 'shipmentDate',
    key: 'shipmentDate',
    align: 'center',
  },
  {
    title: 'Carrier AWB',
    dataIndex: 'carrierAWB',
    key: 'carrierAWB',
    align: 'center',
  },
  {
    title: 'Delivery Date',
    dataIndex: 'deliveryDate',
    key: 'deliveryDate',
    align: 'center',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'Status',
    align: 'center',
  },

  {
    title: 'Action',
    key: 'action',
    align: 'center',
    render: (_, record) => (
      <Space size="middle">
        <span className="edit-icon">
          <FaEdit />
        </span>
        <span className="delete-icon">
          <MdOutlineDeleteOutline />
        </span>
      </Space>
    ),
  },
]

const RfqComponent = () => {
  const dispatch = useDispatch()
  const { rfqItems, rfqItemsLoading, rfqItemsError } = useSelector(
    (store) => store.material
  )

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getRfqList())
  }, [])

  if (rfqItemsLoading) {
    return (
      <LoadingWrapper>
        <ReactLoading
          type="balls"
          color="var(--grey-500)"
          height={50}
          width={50}
        />
      </LoadingWrapper>
    )
  }

  if (rfqItemsError) {
    return (
      <ErrorWrapper>
        <h4>Something went wrong while fetching data ...</h4>
      </ErrorWrapper>
    )
  }

  return (
    <Wrapper>
      <div className="filter-container">
        <div className="all-filter">
          <span className="filter-icon">
            <FiFilter />
          </span>

          <div className="filter-text">Add Filters</div>
        </div>

        <button className="create-rfq" onClick={() => setShowModal(true)}>
          <span className="create-rfq-icon">
            <GrFormAdd />
          </span>
          <span className="create-rfq-text">Create RFQ</span>
        </button>
      </div>

      <div className="rfq-cards-container">
        {RfqImpData.map((item) => {
          const { id, icon, text, amount } = item
          return (
            <div key={id} className="rfq-card">
              <div className="rfq-card-icon">{icon}</div>
              <div className="rfq-card-amount">{amount}</div>
              <div className="rfq-card-text">{text}</div>
            </div>
          )
        })}
      </div>

      <div className="table-container">
        <Table
          columns={columns}
          dataSource={rfqTableData}
          pagination={{
            pageSize: 10,
            position: ['bottomRight'],
          }}
          size="middle"
        />
      </div>

      {/* <div className="rfqs-container">
        {rfqItems.map((item) => {
          return <SingleRfq key={item.id} item={item} />
        })}
      </div> */}
      <CreateRfqModal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  )
}
export default RfqComponent

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const Wrapper = styled.div`
  padding: 2rem;
  overflow: scroll;

  .filter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .all-filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--grey-300);
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    color: var(--grey-900);
    cursor: pointer;
    transition: var(--transition);
  }

  .all-filter:hover {
    transform: scale(1.05);
  }

  .rfq-cards-container {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .rfq-card {
    border: 1px solid var(--grey-100);
    padding: 1rem;
    text-align: center;
    border-radius: 10px;
    background-color: var(--white);
    width: 100%;
  }

  .rfq-card-icon {
    font-size: 1.5rem;
    color: var(--grey-700);
    margin-bottom: 0.5rem;
  }

  .rfq-card-amount {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .rfq-card-text {
    font-size: 0.8rem;
    color: var(--grey-500);
  }

  .table-container {
    margin-top: 1rem;
  }
  .rfqs-container {
  }

  .create-rfq {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    background-color: var(--white);
    border: 1px solid var(--grey-400);
    border-radius: 5px;
    transition: var(--transition);
    cursor: pointer;
  }

  .create-rfq-icon {
    display: grid;
    place-items: center;
    font-size: 1.5rem;
  }

  .create-rfq:hover {
    transform: scale(1.05);
  }

  .edit-icon {
    font-size: 1rem;
    display: grid;
    place-items: center;
    color: green;
    cursor: pointer;
  }

  .delete-icon {
    color: red;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    cursor: pointer;
  }
`
