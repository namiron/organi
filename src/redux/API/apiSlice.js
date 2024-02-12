import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getShop: builder.query({
            query: ({ id }) => `/shop/${id}`,
            providesTags: ["shop"],
        }),

    })
})

export const { useGetShopQuery } = apiSlice;