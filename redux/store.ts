import { configureStore } from '@reduxjs/toolkit'
import invoiceItemsReducer from './invoiceItemsSlice'
import { baseService } from '@/services/baseService'
import { rtkQueryErrorLogger } from '@/middlewares/apiError'

const rootReducer = {
  [baseService.reducerPath]: baseService.reducer,
  invoiceItems: invoiceItemsReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      baseService.middleware,
      rtkQueryErrorLogger,
    ])
  },
})

export type RootState = ReturnType<typeof store.getState>
