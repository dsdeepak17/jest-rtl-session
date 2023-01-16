// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CONSTANTS = {
  DUMMY_API: 'https://dummyjson.com',
}

// Define a service using a base URL and expected endpoints
export const followerApi = createApi({
  reducerPath: 'followerApi',
  baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.DUMMY_API }),
  endpoints: (builder) => ({
    getFollowers: builder.query({
      query: ( number_of_followers = 10 ) => ({
        url: `/users?limit=${number_of_followers}`,
        method: 'GET'
      }),
      transformResponse: (response, meta, arg) => response.users,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFollowersQuery } = followerApi