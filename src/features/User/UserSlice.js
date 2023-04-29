import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  user: {
    name: 'Bob Test User',
  },
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    testing: (state, action) => {
      console.log('this is a testing method')
    },
  },
})

export const { testing } = UserSlice.actions
export default UserSlice.reducer
