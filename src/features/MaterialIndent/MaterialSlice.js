import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
  rfqList: [],
  rfqNewLines: [],
  rfqAddItems: [],
}

const url = 'http://13.232.221.196:8081/v1/purchase'

// const url =
//   'https://6aad-49-43-201-220.ngrok-free.app/v1/purchase/material-indent/'

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
      const getPurchaseLinesUrl = `${url}/material-indent/${projectId}/${categoryId}`
      console.log(getPurchaseLinesUrl)
      const resp = await axios.get(getPurchaseLinesUrl)
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
    addToItemsList: (state, action) => {
      state.rfqNewLines = state.rfqNewLines.filter(
        (item) => item.id !== action.payload.id
      )

      let addItems = [...state.rfqAddItems, action.payload]
      console.log(addItems)
      state.rfqAddItems = addItems.sort((a, b) => a.id - b.id)
    },
    addAllItems: (state, action) => {
      let newAdditems = [...state.rfqAddItems, ...state.rfqNewLines]
      console.log(newAdditems)
      state.rfqAddItems = newAdditems.sort((a, b) => a.id - b.id)
      state.rfqNewLines = []
    },
  },
  extraReducers: {
    [getMaterialItems.pending]: (state) => {
      state.isLoading = true
    },
    [getMaterialItems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = action.payload
    },
    [getMaterialItems.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      console.log(`${action.payload} for the url : ${url} `)
    },
    [getRFQByCategoryAndCode.fulfilled]: (state, action) => {
      action.payload.forEach((p) => {
        const exists = state.rfqList.find((s) => s.id === p.id)
        if (!exists) state.rfqList.push(p)
      })
    },
    [getPurchaseLines.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.rfqNewLines = action.payload
    },
  },
})

export const { addRFQToList, addToItemsList, addAllItems } =
  materialSlice.actions

export default materialSlice.reducer
