import { configureStore } from '@reduxjs/toolkit'
import invoiceItemsReducer from './invoiceItemsSlice'
import { baseService } from '../services/baseService'

const rootReducer = {
  [baseService.reducerPath]: baseService.reducer,
  invoiceItems: invoiceItemsReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([baseService.middleware])
  },
})

// setupListeners(store.dispatch)
