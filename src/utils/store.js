import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/User/UserSlice'
import materialReducer from '../features/MaterialIndent/MaterialSlice'
import quotationsReducer from '../features/Quotations/QuotationsSlice'
import vendorReducer from '../features/vendors/VendorSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    material: materialReducer,
    quotation: quotationsReducer,
    vendor: vendorReducer,
  },
})

export default store
