import { store } from "@/app/store";
import { productApi } from "@/services/productApi";

export async function productsLoader() {
	await store
		.dispatch(
			productApi.endpoints.getProducts.initiate(undefined, {
				subscribe: false,
			}),
		)
		.unwrap();

	return null;
}
