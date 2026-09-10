import { cartReducer } from "@/features/cart/cartSlice";
import { favoritesReducer } from "@/features/favorites/favoritesSlice";
import { productFiltersReducer } from "@/features/products/productFiltersSlice";
import { uiReducer } from "@/features/ui/uiSlice";
import { productApi } from "@/services/productApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorites: favoritesReducer,
		productFilters: productFiltersReducer,
		ui: uiReducer,

		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
