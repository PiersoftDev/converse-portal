import { useDispatch } from 'react-redux'
import {
  addToItemsList,
  addAllItems,
} from '../../../features/MaterialIndent/MaterialSlice'

import ReactLoading from 'react-loading'
import { useState } from 'react'
import axios from 'axios'

const LineComponent = ({ newline, rfqId }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const { id, itemDesc, quantity, plannedDate } = newline

  const addItemsToAddItemsList = async (newLine) => {
    try {
      setLoading(true)
      const reqbody = [id]
      const resp = await axios.post(
        `http://13.232.221.196:9090/v1/purchase/material-indent/rfq/addLines/${rfqId}`,
        reqbody
      )
      console.log(resp.data)
      setLoading(false)
      dispatch(addToItemsList(newLine))
    } catch (error) {
      console.log(error)
      console.log('some error occued while adding items to add items list')
    }
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{itemDesc}</td>
      <td>{quantity}</td>
      <td className="date-column">
        <span>{`${plannedDate[2]}/${plannedDate[1]}/${plannedDate[0]}`}</span>
        <button
          className="add-items-btn"
          onClick={() => addItemsToAddItemsList(newline)}
        >
          Add to items
          {/* <ReactLoading
            type="balls"
            color="var(--grey-500)"
            height={15}
            width={25}
          /> */}
        </button>
      </td>
    </tr>
  )
}
export default LineComponent
