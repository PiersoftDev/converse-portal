import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const AsnTableComponent = () => {
  return (
    <Wrapper>
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Partner</th>
            <th>Project</th>
            <th>Category</th>
            <th>Warehouse</th>
            <th>Expected Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1234-cde</td>
            <td>Samsung</td>
            <td>Project algolia</td>
            <td>infrastructure</td>
            <td>alogolia warehouse</td>
            <td>12/24/2023</td>
            <td>On the way</td>
            <td>Inform</td>
          </tr>
          <tr>
            <td>15674</td>
            <td>Apple</td>
            <td>Project algolia</td>
            <td>infrastructure</td>
            <td>alogolia warehouse</td>
            <td>12/24/2023</td>
            <td>On the way</td>
            <td>Inform</td>
          </tr>
          <tr>
            <td>4536</td>
            <td>Google</td>
            <td>Project algolia</td>
            <td>infrastructure</td>
            <td>alogolia warehouse</td>
            <td>12/24/2023</td>
            <td>On the way</td>
            <td>Inform</td>
          </tr>
          <tr>
            <td>53672</td>
            <td>Tesla</td>
            <td>Project algolia</td>
            <td>infrastructure</td>
            <td>alogolia warehouse</td>
            <td>12/24/2023</td>
            <td>On the way</td>
            <td>Inform</td>
          </tr>
          <tr>
            <td>879</td>
            <td>Oracle</td>
            <td>Project algolia</td>
            <td>infrastructure</td>
            <td>alogolia warehouse</td>
            <td>12/24/2023</td>
            <td>On the way</td>
            <td>Inform</td>
          </tr>
          <tr>
            <td>879</td>
            <td>Oracle</td>
            <td>Project algolia</td>
            <td>infrastructure</td>
            <td>alogolia warehouse</td>
            <td>12/24/2023</td>
            <td>On the way</td>
            <td>Inform</td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  )
}
export default AsnTableComponent

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
`
