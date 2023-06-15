import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import { BsReceiptCutoff } from 'react-icons/bs'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { Table } from 'react-bootstrap'
import BusinessPartnerViewComponent from './BusinessPartnerViewComponent'
import LineViewComponent from './LineViewComponent'

const BiddersTabComponent = ({ rfqId }) => {
  const [lineList, setLineList] = useState({})
  const [vendorList, setVendorList] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [toggle, setToggle] = useState(false)

  const [showAddItems, setShowAddItems] = useState(true)

  const segregateElements = (data) => {
    const lineList = data.reduce((acc, item) => {
      if (!acc[item.itemId]) {
        acc[item.itemId] = []
      }
      acc[item.itemId].push(item)
      return acc
    }, {})

    const vendorList = data.reduce((acc, item) => {
      if (!acc[item.vendorId]) {
        acc[item.vendorId] = []
      }
      acc[item.vendorId].push(item)
      return acc
    }, {})

    setLineList(lineList)
    setVendorList(vendorList)
  }

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        `http://13.232.221.196:9090/v1/purchase/bids/get-bids/${rfqId}`
      )
      const data = response.data

      segregateElements(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      console.log(error)
      console.log('Some error occured while fetching bids data ...')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
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

  if (isError) {
    return (
      <ErrorWrapper>
        <h4>Something went wrong while fetching data ...</h4>
      </ErrorWrapper>
    )
  }

  return (
    <Wrapper>
      <div className="bidders-tab-header">
        <h4> {toggle ? 'Business partner view' : 'Line Description view'}</h4>
        <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
          toggle
        </button>
      </div>
      {toggle ? (
        <div className="bussiness-partner-container">
          {Object.keys(vendorList).map((vendorId, index) => {
            return (
              <BusinessPartnerViewComponent
                key={index}
                vendor={vendorList[vendorId]}
                vendorId={vendorId}
              />
            )
          })}
        </div>
      ) : (
        <div className="line-description-container">
          {Object.keys(lineList).map((lineId, index) => {
            return (
              <LineViewComponent
                key={index}
                line={lineList[lineId]}
                lineId={lineId}
              />
            )
          })}
        </div>
      )}

      {/* 
      {bidsList.length > 0 && showAddItems && (
        <div className="table-container">
          <Table bordered>
            <thead>
              <tr>
                <th>id</th>
                <th>vendorId</th>
                <th>vendorName</th>
              </tr>
            </thead>
            <tbody>
              {bidsList.map(({ id, vendorId, vendorName }, index) => {
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{vendorId}</td>
                    <td>{vendorName}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      )} */}
    </Wrapper>
  )
}
export default BiddersTabComponent

const ErrorWrapper = styled.div`
  width: 100%%;
  height: 20rem;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const LoadingWrapper = styled.div`
  width: 100%;
  height: 20rem;
  display: grid;
  place-items: center;
  background-color: var(--grey-50);
`

const Wrapper = styled.div`
  padding: 2rem;
  padding-top: 1rem;
  position: relative;

  .bidders-tab-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .bidders-tab-header h4 {
    margin-top: 0 !important;
  }

  .toggle-btn {
    background-color: var(--primary-500);
    border: 1px solid var(--grey-100);
    color: var(--white);
    border-radius: 5px;
    padding: 0.2rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .toggle-btn:hover {
    background-color: var(--primary-700);
    transform: scale(1.05);
  }
`
