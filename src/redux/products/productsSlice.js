import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://deliveryapponnodejs.herokuapp.com/api/products',
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: '/',
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
