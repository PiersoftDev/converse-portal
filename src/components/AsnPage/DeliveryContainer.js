import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const DeliveryContainer = () => {
  return (
    <Wrapper>
      <h4>Delivery lines</h4>
      <div className="asn-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Ordered-Qty</th>
              <th>Shipping-Qty</th>
              <th>Purchase Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1234-cde</td>
              <td>Samsung</td>
              <td>Project algolia</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>15674</td>
              <td>Apple</td>
              <td>Project algolia</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>4536</td>
              <td>Google</td>
              <td>Project algolia</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>53672</td>
              <td>Tesla</td>
              <td>Project algolia</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>879</td>
              <td>Oracle</td>
              <td>Project algolia</td>
              <td>infrastructure</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Wrapper>
  )
}
export default DeliveryContainer

const Wrapper = styled.div`
  border: 1px solid var(--grey-300);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 4rem;

  h4 {
    border-bottom: 1px solid var(--grey-100);
    padding: 0.5rem 0;
  }
`
