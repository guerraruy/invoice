import { baseService } from './baseService'
import { getStatusFromInvoice } from '@/helpers/invoices'

export const invoicesApi = baseService.injectEndpoints({
  endpoints: (build) => ({
    getAllInvoices: build.query({
      query: () => {
        return {
          url: '/invoices',
          method: 'GET',
        }
      },
      transformResponse: (response: any) => {
        return response.data.map((invoice: any) => {
          return { ...invoice, status: getStatusFromInvoice(invoice) }
        })
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
      transformResponse: (response: any) => response.data,
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
