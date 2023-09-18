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
      const index = state.items.findIndex((e) => e.id === id)
      state.items.splice(index, 1)
    },
    updateInvoiceItem: (state, action) => {
      const item = action.payload
      const index = state.items.findIndex((e) => e.id === item.id)
      state.items[index] = item
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
