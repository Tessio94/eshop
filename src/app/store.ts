import { authReducer } from "@/features/auth/authSlice";
import { cartReducer } from "@/features/cart/cartSlice";
import { favoritesReducer } from "@/features/favorites/favoritesSlice";
import { ordersReducer } from "@/features/orders/ordersSlice";
import { productFiltersReducer } from "@/features/products/productFiltersSlice";
import { uiReducer } from "@/features/ui/uiSlice";
import { mainEmptyApi } from "@/services/mainApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		productFilters: productFiltersReducer,
		favorites: favoritesReducer,
		cart: cartReducer,
		orders: ordersReducer,
		ui: uiReducer,

		[mainEmptyApi.reducerPath]: mainEmptyApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(mainEmptyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
