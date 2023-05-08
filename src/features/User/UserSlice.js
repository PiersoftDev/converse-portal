import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  user: {
    name: 'Bob Test User',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    testing: (state, action) => {
      console.log('this is a testing method')
    },
  },
})

export const { testing } = userSlice.actions
export default userSlice.reducer
