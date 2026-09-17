import { redirect, type LoaderFunctionArgs } from "react-router";

import { store } from "@/app/store";
import { productApi } from "@/services/productApi";

/* Products Loaders */
export function productsLoader() {
	store.dispatch(
		productApi.endpoints.getProducts.initiate(undefined, {
			subscribe: false,
		}),
	);

	return null;
}

export function productDetailsLoader({ params }: LoaderFunctionArgs) {
	const productId = Number(params.productId);

	if (Number.isNaN(productId)) {
		throw new Response("Invalid product ID", {
			status: 400,
		});
	}

	store
		.dispatch(
			productApi.endpoints.getProduct.initiate(productId, {
				subscribe: false,
			}),
		)
		.unwrap();

	return null;
}

/* Category Loaders */
export function categoriesLoader() {
	Promise.all([
		store
			.dispatch(
				productApi.endpoints.getCategories.initiate(undefined, {
					subscribe: false,
				}),
			)
			.unwrap(),

		store
			.dispatch(
				productApi.endpoints.getProducts.initiate(undefined, {
					subscribe: false,
				}),
			)
			.unwrap(),
	]);

	return null;
}

export function categoryProductsLoader({ params }: LoaderFunctionArgs) {
	const categoryId = params.categoryId;

	if (!categoryId) {
		throw new Response("Category not found", {
			status: 404,
		});
	}

	store
		.dispatch(
			productApi.endpoints.getProductsByCategory.initiate(categoryId, {
				subscribe: false,
			}),
		)
		.unwrap();

	return null;
}

export function requireAuth({ request }: LoaderFunctionArgs) {
	const token = store.getState().auth.token;

	if (!token) {
		const url = new URL(request.url);

		const redirectTo = url.pathname + url.search;

		throw redirect(`/login?redirect=${encodeURIComponent(redirectTo)}`);
	}

	return null;
}

export function requireGuest() {
	const token = store.getState().auth.token;

	if (token) {
		throw redirect("/orders");
	}

	return null;
}
