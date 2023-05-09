import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/User/UserSlice'
import materialReducer from '../features/MaterialIndent/MaterialSlice'
import quotationsReducer from '../features/Quotations/QuotationsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    material: materialReducer,
    quotation: quotationsReducer,
  },
})

export default store
