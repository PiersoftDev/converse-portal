import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  items: [],
}

const url = 'http://13.232.221.196:8081/v1/purchase/material-indent/'

export const getMaterialItems = createAsyncThunk(
  'MaterialIndent/getMaterialItems',
  () =>
    axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err))
)

const materialSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    testing: (state, action) => {
      console.log('this is the testing method in material slice')
    },
  },
  extraReducers: {
    [getMaterialItems.pending]: (state) => {
      state.isLoading = true
      console.log(`loading : ${state.isLoading}`)
    },
    [getMaterialItems.fulfilled]: (state, action) => {
      state.items = action.payload
      console.log(action)
    },
    [getMaterialItems.rejected]: (state) => {
      state.isLoading = false
      console.log(`loading : ${state.isLoading}`)
      console.log('some error occured')
    },
  },
})

export const { testing } = materialSlice.actions

export default materialSlice.reducer
