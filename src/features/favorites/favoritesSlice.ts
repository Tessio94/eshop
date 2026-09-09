import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "@/types/product";

type FavoritesState = {
  items: Product[];
};

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const alreadyFavorite = state.items.some(
        (product) => product.id === action.payload.id,
      );

      if (!alreadyFavorite) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload,
      );
    },
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (existingIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(existingIndex, 1);
      }
    },

    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
