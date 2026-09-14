import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Order } from "@/types/order";

type OrdersState = {
	items: Order[];
};

const storedOrders = localStorage.getItem("orders");

const initialState: OrdersState = {
	items: storedOrders ? JSON.parse(storedOrders) : [],
};

const ordersSlice = createSlice({
	name: "orders",
	initialState,

	reducers: {
		createOrder: (state, action: PayloadAction<Order>) => {
			state.items.unshift(action.payload);

			localStorage.setItem("orders", JSON.stringify(state.items));
		},

		clearOrders: (state) => {
			state.items = [];
			localStorage.removeItem("orders");
		},
	},
});

export const { createOrder, clearOrders } = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;
