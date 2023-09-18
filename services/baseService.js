import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseService = createApi({
  reducerPath: 'api',
  tagTypes: ['User', 'Clients', 'Invoices'],
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  endpoints: () => ({}),
  refetchOnReconnect: false,
  refetchOnFocus: false,
})
