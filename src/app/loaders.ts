import { redirect, type LoaderFunctionArgs } from "react-router";

import { store } from "@/app/store";
import { productApi } from "@/services/productApi";

/* Products Loaders */
export async function productsLoader() {
	setTimeout(() => {
		console.log("mrchiooooo");
	}, 3000);
	await store
		.dispatch(
			productApi.endpoints.getProducts.initiate(undefined, {
				subscribe: false,
			}),
		)
		.unwrap();

	return null;
}

export async function productDetailsLoader({ params }: LoaderFunctionArgs) {
	const productId = Number(params.productId);

	if (Number.isNaN(productId)) {
		throw new Response("Invalid product ID", {
			status: 400,
		});
	}

	await store
		.dispatch(
			productApi.endpoints.getProduct.initiate(productId, {
				subscribe: false,
			}),
		)
		.unwrap();

	return null;
}

/* Category Loaders */
export async function categoriesLoader() {
	await Promise.all([
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

export async function categoryProductsLoader({ params }: LoaderFunctionArgs) {
	const categoryId = params.categoryId;

	if (!categoryId) {
		throw new Response("Category not found", {
			status: 404,
		});
	}

	await store
		.dispatch(
			productApi.endpoints.getProductsByCategory.initiate(categoryId, {
				subscribe: false,
			}),
		)
		.unwrap();

	return null;
}

export function requireAuth() {
	const token = store.getState().auth.token;

	if (!token) {
		throw redirect("/login");
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
