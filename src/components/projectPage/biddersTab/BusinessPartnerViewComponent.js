import { BsReceiptCutoff } from 'react-icons/bs'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { Table } from 'react-bootstrap'
import { useState } from 'react'
import styled from 'styled-components'

const BusinessPartnerViewComponent = ({ vendor, vendorId }) => {
  const [showAddItems, setShowAddItems] = useState(false)

  return (
    <Wrapper>
      <div className="line-container">
        <div className="left-wrapper">
          <span>
            <BsReceiptCutoff />
          </span>
          <h4>{vendorId}</h4>
        </div>

        {
          <div className="right-wrapper">
            <button
              className="drop-down-btn"
              onClick={() => setShowAddItems(!showAddItems)}
            >
              {showAddItems ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>
          </div>
        }
      </div>

      {vendor.length > 0 && showAddItems && (
        <div className="table-container">
          <Table bordered>
            <thead>
              <tr>
                <th>LineId</th>
                <th>ItemDesc</th>
                <th>Price Quoted</th>
                <th>Possible DeliveryDate</th>
              </tr>
            </thead>
            <tbody>
              {vendor.map(
                (
                  {
                    lineId,
                    itemDescription,
                    unitPrice,
                    uom,
                    possibleDeliveryDate,
                  },
                  index
                ) => {
                  const [y, m, d] = possibleDeliveryDate

                  return (
                    <tr key={index}>
                      <td>{lineId}</td>
                      <td>{itemDescription}</td>
                      <td>{`Rs ${unitPrice} Per ${uom}` }</td>
                      <td>{`${d}-${m}-${y}`}</td>
                    </tr>
                  )
                }
              )}
            </tbody>
          </Table>
        </div>
      )}
    </Wrapper>
  )
}
export default BusinessPartnerViewComponent

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .line-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 5px;
  }

  .left-wrapper {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
  }

  .left-wrapper span {
    display: grid;
    place-items: center;
    color: goldenrod;
  }

  .left-wrapper h4 {
    font-size: 1.3rem;
    margin-bottom: 0;
    margin-top: 0 !important;
  }

  .right-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .drop-down-btn {
    margin-right: 2rem;
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    color: var(--grey-500);
    font-weight: 600;
    cursor: pointer;
  }

  .table-bordered {
    border: 1px solid var(--grey-100) !important;
    border-radius: 10px;
  }

  .table-container {
    background-color: var(--white);
    border-radius: 10px;
    margin: 0.5rem 0;
  }

  th,
  td {
    color: var(--grey-700);
    padding: 0.5rem 1rem !important ;
  }
`
