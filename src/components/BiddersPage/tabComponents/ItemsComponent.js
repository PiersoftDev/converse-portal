import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const ItemsComponent = () => {
  return (
    <Wrapper>
      <Table responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item Description</th>
            <th>Quantity</th>
            <th>PlannedDate</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Steel Enforcement rods</th>
            <th>10 tons</th>
            <th>25/07/2023</th>
            <th>Rs 40L</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Steel Enforcement rods</th>
            <th>10 tons</th>
            <th>25/07/2023</th>
            <th>Rs 40L</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Steel Enforcement rods</th>
            <th>10 tons</th>
            <th>25/07/2023</th>
            <th>Rs 40L</th>
          </tr>
          <tr>
            <th>1</th>
            <th>Steel Enforcement rods</th>
            <th>10 tons</th>
            <th>25/07/2023</th>
            <th>Rs 40L</th>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  )
}
export default ItemsComponent

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 10px;
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
