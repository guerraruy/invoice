import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counterSlice'
import { baseService } from '../services/baseService'
// import { usersApi } from '../services/usersApi'
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = {
  [baseService.reducerPath]: baseService.reducer,
  // counter: counterReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([baseService.middleware])
  },
})

// setupListeners(store.dispatch)
