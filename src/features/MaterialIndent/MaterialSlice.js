import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
// import { columnsData } from '../../assets/data'

const columnsData = {
  'Item Requested': {
    id: 'column-1',
    title: 'Item Requested',
    color: '#47B5FF',
    materialIds: [],
  },
  'Warehouse Order': {
    id: 'column-2',
    title: 'Warehouse Order',
    color: '#FF6D60',
    materialIds: [],
  },
  'Purchase Request': {
    id: 'column-3',
    title: 'Purchase Request',
    color: '#804674',
    materialIds: [],
  },
  RFQ: {
    id: 'column-4',
    title: 'RFQ',
    color: '#EB455F',
    materialIds: [],
  },
  'Purchase Order': {
    id: 'column-5',
    title: 'Purchase Order',
    color: '#BB6464',
    materialIds: [],
  },
}

const initialState = {
  isLoading: false,
  isError: false,
  isGetRfqByCodeLoading: false,
  isGetRfqByCodeError: false,
  isGetPurchaseLinesLoading: false,
  isGetPurchaseLinesError: false,
  items: [],
  columns: { ...columnsData },
  rfqList: [],
  rfqNewLines: [],
  rfqAddItems: [],

  rfqItems: [],
  rfqItemsLoading: false,
  rfqItemsError: false,
}

const url = 'http://13.232.221.196:9090/v1/purchase'

// const url =
//   'https://6aad-49-43-201-220.ngrok-free.app/v1/purchase/material-indent/'

const rfqListUrl = 'http://13.232.221.196:9090/v1/purchase/rfq/list-all-rfqs'

export const getRfqList = createAsyncThunk(
  'Quotations/getRfqList',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(rfqListUrl)
      return resp.data
    } catch (error) {
      throw thunkApi.rejectWithValue('Some error happened while fetching data')
    }
  }
)

export const getMaterialItems = createAsyncThunk(
  'MaterialIndent/getMaterialItems',
  async (_, thunkApi) => {
    try {
      const getMaterialItemsUrl = `${url}/material-indent/`
      const resp = await axios.get(getMaterialItemsUrl)
      return resp.data
    } catch (error) {
      return thunkApi.rejectWithValue(
        'Some thing went wrong while fetching data'
      )
    }
  }
)

export const getRFQByCategoryAndCode = createAsyncThunk(
  'MaterialIndent/getRFQByCategoryAndCode',
  async ({ categoryId, projectId }, thunkApi) => {
    try {
      const getRFQDetailsUrl = `${url}/rfq/${projectId}/${categoryId}`
      const resp = await axios.get(getRFQDetailsUrl)
      return resp.data
    } catch (error) {
      return thunkApi.rejectWithValue(
        'Some thing went wrong while fetching data'
      )
    }
  }
)

export const getPurchaseLines = createAsyncThunk(
  'MaterialIndent/getPurchaseLines',
  async ({ categoryId, projectId }, thunkApi) => {
    try {
      const getPurchaseLinesUrl = `${url}/material-indent/purchase/${projectId}/${categoryId}`
      console.log(getPurchaseLinesUrl)
      const resp = await axios.get(getPurchaseLinesUrl)

      console.log(resp.data)
      return resp.data
    } catch (error) {
      return thunkApi.rejectWithValue(
        'Some thing went wrong while fetching data'
      )
    }
  }
)
const materialSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    addRFQToList: (state, action) => {
      state.rfqList = [...state.rfqList, action.payload]
    },
    makeAddToRfqErrorStatusBackToNormal: (state, action) => {
      state.isGetRfqByCodeError = false
      state.isGetPurchaseLinesLoading = false
    },
    addToItemsList: (state, action) => {
      state.rfqNewLines = state.rfqNewLines.filter(
        (item) => item.id !== action.payload.id
      )

      let addItems = [...state.rfqAddItems, action.payload]
      state.rfqAddItems = addItems.sort((a, b) => a.id - b.id)
    },
    addAllItems: (state, action) => {
      let newAddItems = [...state.rfqAddItems, ...state.rfqNewLines]
      console.log(newAddItems)
      state.rfqAddItems = newAddItems.sort((a, b) => a.id - b.id)
      state.rfqNewLines = []
    },
    setColumns: (state, action) => {
      state.columns = action.payload
    },
    addRfqToRfqItemsList: (state, action) => {
      state.rfqItems = [action.payload, ...state.rfqItems]
    },
    persistStatusChange: async (state, action) => {
      const { items, columns } = state
      const { draggableId, droppableId } = action.payload

      try {
        const { subStatus, id } = items.find(
          ({ itemId }) => itemId === draggableId
        )
        await axios.put(
          `http://13.232.221.196:9090/v1/purchase/material-indent/${id}/${droppableId}/${subStatus}`
        )
      } catch (error) {
        console.log(error)
        toast.error('Some error occured while changing the status')
        return
      }
    },
  },
  extraReducers: {
    [getMaterialItems.pending]: (state) => {
      state.isLoading = true
    },
    [getMaterialItems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = action.payload
      state.items.forEach(({ status, id }) => {
        state?.columns[status]?.materialIds?.push(`${id}`)
      })
    },
    [getMaterialItems.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      console.log(`${action.payload} for the url : ${url} `)
    },
    [getRFQByCategoryAndCode.pending]: (state, action) => {
      state.isGetRfqByCodeLoading = true
    },
    [getRFQByCategoryAndCode.fulfilled]: (state, action) => {
      state.isGetRfqByCodeLoading = false
      action.payload.forEach((p) => {
        const exists = state.rfqList.find((s) => s.id === p.id)
        if (!exists) state.rfqList.push(p)
      })
    },
    [getRFQByCategoryAndCode.rejected]: (state, action) => {
      state.isGetRfqByCodeLoading = false
      state.isGetRfqByCodeError = true
    },
    [getPurchaseLines.pending]: (state, action) => {
      state.isGetPurchaseLinesLoading = true
    },

    [getPurchaseLines.fulfilled]: (state, action) => {
      state.isGetPurchaseLinesLoading = false
      console.log(action.payload)
      state.rfqNewLines = action.payload
    },
    [getPurchaseLines.rejected]: (state, action) => {
      state.isGetPurchaseLinesLoading = false
      state.isGetPurchaseLinesError = true
    },
    [getRfqList.pending]: (state, action) => {
      state.rfqItemsLoading = true
    },
    [getRfqList.fulfilled]: (state, action) => {
      state.rfqItemsLoading = false
      state.rfqItems = action.payload
    },
    [getRfqList.rejected]: (state, action) => {
      state.rfqItemsLoading = false
      state.rfqItemsError = true
    },
  },
})

export const {
  addRFQToList,
  addToItemsList,
  addAllItems,
  makeAddToRfqErrorStatusBackToNormal,
  setColumns,
  persistStatusChange,
  addRfqToRfqItemsList,
} = materialSlice.actions

export default materialSlice.reducer
