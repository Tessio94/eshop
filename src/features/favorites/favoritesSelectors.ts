import type { RootState } from "@/app/store";

export const selectFavoriteItems = (state: RootState) => state.favorites.items;

export const selectFavoriteCount = (state: RootState) =>
	state.favorites.items.length;

export const selectIsFavorite = (productId: number) => (state: RootState) =>
	state.favorites.items.some((product) => product.id === productId);
