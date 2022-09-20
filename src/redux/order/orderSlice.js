import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://deliveryapponnodejs.herokuapp.com/api/products/orders',
  }),
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => ({
        url: '/',
      }),
    }),
    CreateOrder: builder.mutation({
      query: newOrder => ({
        url: '/',
        method: 'POST',
        body: newOrder,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
