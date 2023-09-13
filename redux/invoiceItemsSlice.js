import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const invoiceItemsSlice = createSlice({
  name: 'invoiceItems',
  initialState,
  reducers: {
    setInvoiceItems: (state, action) => {
      state.items = action.payload
    },
    addInvoiceItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeInvoiceItem: (state, action) => {
      const id = action.payload
      return state.items.filter((e) => e.id !== id)
    },
    updateInvoiceItem: (state, action) => {
      const item = action.payload
      return state.items.map((e) => {
        return e.id === item.id ? item : e
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setInvoiceItems,
  addInvoiceItem,
  removeInvoiceItem,
  updateInvoiceItem,
} = invoiceItemsSlice.actions

export default invoiceItemsSlice.reducer
