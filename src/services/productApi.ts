import type { Product } from "@/types/product";
import { mainEmptyApi } from "./mainApi";

export const productApi = mainEmptyApi.injectEndpoints({
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
	overrideExisting: true,
});

export const {
	useGetProductsQuery,
	useGetProductQuery,
	useGetCategoriesQuery,
	useGetProductsByCategoryQuery,
} = productApi;
