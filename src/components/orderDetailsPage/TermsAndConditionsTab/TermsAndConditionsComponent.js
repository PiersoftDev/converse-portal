import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

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
          {dummyData.map(({ id, terms, description }) => {
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
    </Wrapper>
  )
}
export default TermsAndConditionsComponent

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  border: 1px solid var(--grey-100);
  margin: 2rem;

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
`
