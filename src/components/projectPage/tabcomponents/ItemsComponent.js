import { BsReceiptCutoff } from 'react-icons/bs'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { RxCube } from 'react-icons/rx'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'

const ItemsComponent = () => {
  return (
    <Wrapper>
      <div className="payments-container">
        <div className="payments-header">
          <span>
            <BsReceiptCutoff />
          </span>
          <h4>Payments Requested</h4>
        </div>
        <div className="payment-content">
          <div className="payment-left-wrapper">
            <span className="cube-icon">
              <RxCube />
            </span>
            <p>Acme Corp</p>
            <span className="numbers">15-500</span>
          </div>
          <div className="payment-right-wrapper">
            <span className="rupee-icon">
              <HiOutlineCurrencyRupee />
            </span>
            <p>&#8377;65,000</p>

            <div className="payment-btns-container">
              <button className="view-details-btn">View Details</button>
              <button className="approve-btn">Approve</button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Cost Code</th>
              <th>Description</th>
              <th>Subcontractor</th>
              <th>Scheduled Values</th>
              <th>Previously Billed</th>
              <th>Current Period Work</th>
              <th>Materials Stored</th>
              <th>Total Completed & Stored</th>
              <th>Remaining Balance</th>
              <th>Retainage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>15-1500</td>
              <td>concrete</td>
              <td>Acm</td>
              <td>&#8377; 10,000</td>
              <td>&#8377; 2,000</td>
              <td>&#8377; 3,000</td>
              <td>&#8377; 1,000</td>
              <td>Total Completed & Stored</td>
              <td>Remaining Balance</td>
              <td>Retainage</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Wrapper>
  )
}
export default ItemsComponent

const Wrapper = styled.div`
  padding: 2rem;

  .payments-container {
    background-color: var(--white);
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  .payments-header {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    border-bottom: 1px solid var(--grey-100);
  }

  .payments-header span {
    display: grid;
    place-items: center;
    color: goldenrod;
  }

  .payments-header h4 {
    font-size: 1.3rem;
    margin-bottom: 0;
  }

  .payment-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .payment-left-wrapper {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .cube-icon {
    display: grid;
    place-items: center;
    color: var(--white);
    background-color: var(--grey-600);
    padding: 0.2rem;
    border-radius: 3px;
  }

  .numbers {
    background-color: var(--grey-50);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    color: var(--grey-600);
    font-size: 0.7rem;
  }

  .payment-right-wrapper {
    display: flex;
    align-items: center;
  }

  .rupee-icon {
    font-weight: 500;
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }

  .payment-right-wrapper p {
    padding-right: 1rem;
  }

  .payment-right-wrapper p,
  .payment-left-wrapper p {
    margin-bottom: 0;
  }

  .payment-btns-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .view-details-btn {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 5px;
    background: transparent;
    border: 1px solid var(--grey-100);
    color: var(--grey-600);
    transition: var(--transition);
  }

  .view-details-btn:hover {
    transform: scale(1.05);
    background-color: var(--grey-50);
  }

  .approve-btn {
    background-color: #3fb580f5;
    color: var(--white);
    border: transparent;
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 5px;
    transition: var(--transition);
  }

  .approve-btn:hover {
    transform: scale(1.05);
    background-color: #329c6cf5;
  }

  .table-container {
    background-color: var(--white);
    border-radius: 10px;
    margin: 1rem 0;
  }

  th,
  td {
    color: var(--grey-700);
    padding: 0.5rem 1rem !important ;
  }
`
