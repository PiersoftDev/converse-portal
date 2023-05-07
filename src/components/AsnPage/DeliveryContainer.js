import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import styled from 'styled-components'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { data } from '../../assets/data/index'
import { useState } from 'react'
const DeliveryContainer = () => {
  const [lines, setLines] = useState([...data])

  const shippingFormatter = (data, row) => {
    return <span>{data}</span>
  }

  const columns = [
    {
      dataField: 'item',
      text: 'Item',
      editable: false,
    },
    {
      dataField: 'orderedQty',
      text: 'Ordered-Qty',
      editable: false,
    },
    {
      dataField: 'shippingQty',
      text: 'Shipping-Qty',
      sort: true,
      formatter: shippingFormatter,
      editCellClasses: 'edit-cell-class',
      editorClasses: 'editor-class',
    },
    {
      dataField: 'purchaseOrder',
      text: 'purchase Order',
      editable: false,
    },
  ]

  return (
    <Wrapper>
      <h4>Delivery lines</h4>

      <BootstrapTable
        keyField="id"
        data={lines}
        columns={columns}
        cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
      />

      {/* <div className="asn-table-container">
        <Table responsive contentEditable>
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
              <td>2</td>
              <td>4</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>15674</td>
              <td>5</td>
              <td>3</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>4536</td>
              <td>10</td>
              <td>6</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>53672</td>
              <td>23</td>
              <td>2</td>
              <td>infrastructure</td>
            </tr>
            <tr>
              <td>879</td>
              <td>64</td>
              <td>1</td>
              <td>infrastructure</td>
            </tr>
          </tbody>
        </Table>
      </div> */}
    </Wrapper>
  )
}
export default DeliveryContainer

const Wrapper = styled.div`
  border: 1px solid var(--grey-100);
  border-radius: 10px;
  padding: 0 1rem;
  margin-top: 4rem;

  h4 {
    border-bottom: 1px solid var(--grey-100);
    padding: 1rem 0;
  }

  .table {
    border: transparent;
    margin-bottom: 0;
  }

  td,
  th {
    text-align: center;
    border: none;
  }

  tr {
    border-bottom: 1px solid var(--grey-100);
  }

  tr:hover {
    background-color: transparent;
  }

  .edit-cell-class {
    padding: 0.5rem 1rem;
  }

  .editor-class {
    width: 30px;
    margin: 0 auto;
    border: 1px solid var(--primary-300);
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    box-shadow: none;
  }
`
