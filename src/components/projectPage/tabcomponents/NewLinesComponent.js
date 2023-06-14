import { BsReceiptCutoff } from 'react-icons/bs'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { RxCube } from 'react-icons/rx'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchaseLines } from '../../../features/MaterialIndent/MaterialSlice'
import ReactLoading from 'react-loading'

import {
  addToItemsList,
  addAllItems,
} from '../../../features/MaterialIndent/MaterialSlice'
import LineComponent from './LineComponent'

const NewLinesComponent = ({ showNewLines, rfqId }) => {
  const dispatch = useDispatch()
  const {
    rfqNewLines,
    rfqAddItems,
    isGetPurchaseLinesLoading,
    isGetPurchaseLinesError,
  } = useSelector((store) => store.material)

  const addItemsToAddItemsList = (newLine) => {
    dispatch(addToItemsList(newLine))
  }
  return (
    <>
      {rfqNewLines.length > 0 &&
        showNewLines &&
        (isGetPurchaseLinesLoading ? (
          <h4>Still Loading ...</h4>
        ) : isGetPurchaseLinesError ? (
          <h4 style={{ color: 'var(--grey-400)' }}>
            Some error occured while fetching new lines
          </h4>
        ) : (
          <div className="table-container">
            <Table bordered>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Item Description</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>PlannedDate</th>
                </tr>
              </thead>
              <tbody>
                {rfqNewLines.map((newline, index) => {
                  return (
                    <LineComponent
                      newline={newline}
                      key={newline.id}
                      rfqId={rfqId}
                    />
                  )
                })}
              </tbody>
            </Table>
          </div>
        ))}
    </>
  )
}
export default NewLinesComponent
