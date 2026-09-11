import { store } from "@/app/store";
import { productApi } from "@/services/productApi";

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
