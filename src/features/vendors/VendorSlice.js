import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  vendorsList: [],
  isLoading: false,
  isError: false,
  showMultipleGstUnderSamePanModal: false,
  onBoardAll: false,
}

const url = 'https://13.232.221.196/v1/vm/list'

export const getVendors = createAsyncThunk(
  'vendors/getVendors',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      return resp.data
    } catch (error) {
      throw thunkApi.rejectWithValue('Some error occued while fetching date')
    }
  }
)

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    makeShowMultipleGstUnderSamePanModalFalse: (state) => {
      state.showMultipleGstUnderSamePanModal = false
    },
    makeShowMultipleGstUnderSamePanModalTrue: (state) => {
      state.showMultipleGstUnderSamePanModal = true
    },
    makeOnBoardAllNo: (state) => {
      state.onBoardAll = 'No'
    },
    makeOnBoardAllYes: (state) => {
      state.onBoardAll = 'Yes'
    },
  },
  extraReducers: {
    [getVendors.pending]: (state, action) => {
      state.isLoading = true
    },
    [getVendors.fulfilled]: (state, action) => {
      state.isLoading = false
      state.vendorsList = action.payload
    },
    [getVendors.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
    },
  },
})

export const {
  makeShowMultipleGstUnderSamePanModalFalse,
  makeShowMultipleGstUnderSamePanModalTrue,
  makeOnBoardAllNo,
  makeOnBoardAllYes,
} = vendorsSlice.actions

export default vendorsSlice.reducer
