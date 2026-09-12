import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Product } from "@/types/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    getProduct: builder.query<Product, number>({
      query: (productId) => `products/${productId}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "products/categories",
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products/category/${encodeURIComponent(category)}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = productApi;
