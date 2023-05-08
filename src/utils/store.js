import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/User/UserSlice'
import materialReducer from '../features/MaterialIndent/MaterialSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    material: materialReducer,
  },
})

export default store
