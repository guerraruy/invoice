import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseService = createApi({
  reducerPath: 'api',
  tagTypes: ['User', 'Clients'],
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    // fetchFn: async (...args) => {
    //   console.log('=======> args', args)
    //   return fetch(...args)
    // },
  }),
  endpoints: () => ({}),
  refetchOnReconnect: false,
  refetchOnFocus: false,
})
