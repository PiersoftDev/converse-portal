import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import styled from 'styled-components'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { useState } from 'react'
import { dummyBidsData } from '../../../assets/data'

const BidsTableComponent = () => {
  const [lines, setLines] = useState([...dummyBidsData])

  const shippingFormatter = (data, row) => {
    return <span>{data}</span>
  }

  const columns = [
    {
      dataField: 'sNo',
      text: 'sNo',
      editable: false,
    },
    {
      dataField: 'warehouse',
      text: 'warehouse',
      editable: false,
    },
    {
      dataField: 'item',
      text: 'Item',
      editable: false,
    },
    {
      dataField: 'quantity',
      text: 'quantity',
      editable: false,
    },
    {
      dataField: 'plannedDate',
      text: 'plannedDate',
      editable: false,
    },
    {
      dataField: 'vendor',
      text: 'vendor',
      sort: true,
      formatter: shippingFormatter,
      editCellClasses: 'edit-cell-class',
      editorClasses: 'editor-class vendor-editor-class',
    },
    {
      dataField: 'vendorPrice',
      text: 'vendorPrice',
      sort: true,
      formatter: shippingFormatter,
      editCellClasses: 'edit-cell-class',
      editorClasses: 'editor-class',
    },
    {
      dataField: 'vendorDate',
      text: 'vendorDate',
      editable: false,
    },
  ]
  return (
    <Wrapper>
      <BootstrapTable
        keyField="id"
        data={lines}
        columns={columns}
        cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
      />
    </Wrapper>
  )
}
export default BidsTableComponent

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
    text-align: center;
    width: 5rem;
    margin: 0 auto;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--primary-300);
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    box-shadow: none;
  }

  .vendor-editor-class {
    width: 10rem;
  }
`
