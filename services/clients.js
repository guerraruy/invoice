import { baseService } from './baseService'

export const clientsApi = baseService.injectEndpoints({
  endpoints: (build) => ({
    getClients: build.query({
      query: () => {
        return {
          url: '/clients',
          method: 'GET',
        }
      },
      transformResponse: (response) => {
        return response.data
      },
      providesTags: ['Clients'],
    }),
    getClient: build.query({
      query: (id) => {
        return {
          url: `/clients/${id}`,
          method: 'GET',
        }
      },
      providesTags: (result, error, arg, meta) => {
        return [{ type: 'Clients', id: arg }]
      },
      transformResponse: (response) => response.data,
    }),
    addClient: build.mutation({
      query: (postData) => ({
        url: 'clients',
        method: 'POST',
        body: { ...postData },
      }),
      invalidatesTags: ['Clients'],
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Clients'],
    }),
    updateClient: build.mutation({
      query: (postData) => {
        return {
          url: `/clients/${postData._id}`,
          method: 'PUT',
          body: { ...postData.data },
        }
      },
      invalidatesTags: (result, error, arg, meta) => {
        return ['Clients', { type: 'Clients', id: arg._id }]
      },
    }),
  }),
})

export const {
  useGetClientsQuery,
  useGetClientQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation,
} = clientsApi
