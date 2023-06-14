import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import { useState } from 'react'

const dummyData = [
  {
    id: 1,
    terms: 'Payment Terms',
    description: 'Payment Terms',
  },
  {
    id: 2,
    terms: 'Delivery Terms',
    description: 'Delivery Terms',
  },
  {
    id: 3,
    terms: 'Penalty Terms',
    description: 'Penalty Terms',
  },
  {
    id: 4,
    terms: 'Liquidated Damages',
    description: 'Liquidated Damages',
  },
  {
    id: 5,
    terms: 'Retention Money',
    description: 'Retention Money',
  },
]

const TermsAndConditionsComponent = () => {
  const [termsAndConditions, setTermsAndConditions] = useState([...dummyData])

  const addNewRow = () => {
    const newRow = {
      id: termsAndConditions.length + 1,
      terms: `New Term - ${termsAndConditions.length + 1}`,
      description: 'New Description',
    }
    setTermsAndConditions([...termsAndConditions, newRow])
  }

  return (
    <Wrapper>
      <Table responsive>
        <thead>
          <tr>
            <th style={{ width: '5%' }}>S.No</th>
            <th style={{ width: '20%' }}>Terms</th>
            <th style={{ width: '50%' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {termsAndConditions.map(({ id, terms, description }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{terms}</td>
                <td>{description}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <div className="btn-container">
        <button className="add-row-btn" onClick={addNewRow}>
          Add row
        </button>
      </div>
    </Wrapper>
  )
}
export default TermsAndConditionsComponent

const Wrapper = styled.div`
  margin: 2rem;

  .table-responsive {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow-1);
  }

  th,
  td {
    color: var(--grey-700);
    padding: 0.5rem 1rem !important ;
  }

  .table-hover tbody tr:hover td,
  .table-hover tbody tr:hover th {
    background-color: #f9fcff;
  }

  .table {
    margin-bottom: 0;
  }

  td,
  th {
    text-align: center;
  }

  .btn-container {
    margin-top: 2rem;
    margin-right: 2rem;
    display: flex;
    justify-content: flex-end;
  }

  .add-row-btn {
    border: 1px solid var(--grey-300);
    border-radius: 5px;
    background-color: var(--primary-400);
    color: var(--white);
    padding: 0.2rem 1rem;
    font-size: 0.9rem;
    transition: var(--transition);
  }

  .add-row-btn:hover {
    transform: scale(1.05);
    background-color: var(--primary-500);
  }
`
