import { Mode } from '@mui/icons-material'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
  rfqList: [
    // {
    //   category: 'Category123',
    //   plannedDate: '2023-11-03',
    //   projectCode: 'Sai123',
    //   warehouseCode: '123Warehouse',
    // },
    // {
    //   category: 'Category123',
    //   plannedDate: '2023-11-03',
    //   projectCode: 'Sai123',
    //   warehouseCode: '123Warehouse',
    // },
    // {
    //   category: 'Category123',
    //   plannedDate: '2023-11-03',
    //   projectCode: 'Sai123',
    //   warehouseCode: '123Warehouse',
    // },
  ],
}

const url = 'http://13.232.221.196:8081/v1/purchase/material-indent/'

// const url =
//   'https://6aad-49-43-201-220.ngrok-free.app/v1/purchase/material-indent/'

export const getMaterialItems = createAsyncThunk(
  'MaterialIndent/getMaterialItems',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(url)
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
    testing: (state, action) => {
      console.log('this is the testing method in material slice')
    },
    addRFQToList: (state, action) => {
      state.rfqList = [...state.rfqList, action.payload]
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
  },
})

export const { testing, addRFQToList } = materialSlice.actions

export default materialSlice.reducer
