import type { Product } from "@/types/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log("state", state.items);
      console.log("action", action);
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        product: action.payload,
        quantity: 1,
      });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );

      if (!item) {
        return;
      }

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload,
        );
        return;
      }

      item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
