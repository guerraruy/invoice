import { baseService } from './baseService'

export const usersApi = baseService.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => {
        return {
          url: '/users',
          method: 'GET',
        }
      },
      transformResponse: (response) => response.data.users,
      providesTags: ['User'],
    }),
    getUser: build.query({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: 'GET',
        }
      },
      providesTags: (result, error, arg, meta) => {
        return [{ type: 'User', id: arg }]
      },
      transformResponse: (response) => response.data.user,
    }),
    addUser: build.mutation({
      query: (postData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: { ...postData },
      }),
      invalidatesTags: ['User'],
      // transformResponse: (response) => response.Result,
      // providesTags: (result) => [{ type: 'Workbox', id: 'UpdateWorkbox' }],
      // invalidatesTags: (result, error, { id }) => [{ type: 'Workbox', id: 'GetWorkboxes' }]
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
      // transformResponse: (response) => response.Result,
      // providesTags: (result) => [{ type: 'Workbox', id: 'UpdateWorkbox' }],
      // invalidatesTags: (result, error, { id }) => [{ type: 'Workbox', id: 'GetWorkboxes' }]
    }),
    updateUser: build.mutation({
      query: (postData, x) => ({
        url: `/users/${postData._id}`,
        method: 'PUT',
        body: { ...postData },
      }),
      invalidatesTags: (result, error, arg, meta) => {
        return [{ type: 'User', id: arg._id }]
      },
      // transformResponse: (response) => response.Result,
      // providesTags: (result) => [{ type: 'Workbox', id: 'UpdateWorkbox' }],
      // invalidatesTags: (result, error, { id }) => [{ type: 'Workbox', id: 'GetWorkboxes' }]
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi
