import { baseService } from './baseService'

export const invoicesApi = baseService.injectEndpoints({
  endpoints: (build) => ({
    getAllInvoices: build.query({
      query: () => {
        return {
          url: '/invoices',
          method: 'GET',
        }
      },
      transformResponse: (response) => {
        return response.data
      },
      providesTags: ['Invoices'],
    }),
    getInvoice: build.query({
      query: (id) => {
        return {
          url: `/invoices/${id}`,
          method: 'GET',
        }
      },
      providesTags: (result, error, arg, meta) => {
        return [{ type: 'Invoices', id: arg }]
      },
      transformResponse: (response) => response.data,
    }),
    addInvoice: build.mutation({
      query: (postData) => ({
        url: 'invoices',
        method: 'POST',
        body: { ...postData },
      }),
      invalidatesTags: ['Invoices'],
    }),
    deleteInvoice: build.mutation({
      query: (id) => ({
        url: `/invoices/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoices'],
    }),
    updateInvoice: build.mutation({
      query: (postData) => {
        console.log('####', postData)
        return {
          url: `/invoices/${postData._id}`,
          method: 'PUT',
          body: { ...postData.data },
        }
      },
      invalidatesTags: (result, error, arg, meta) => {
        return ['Invoices', { type: 'Invoices', id: arg._id }]
      },
    }),
  }),
})

export const {
  useGetAllInvoicesQuery,
  useGetInvoiceQuery,
  useAddInvoiceMutation,
  useDeleteInvoiceMutation,
  useUpdateInvoiceMutation,
} = invoicesApi
