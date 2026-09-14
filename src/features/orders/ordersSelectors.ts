import type { RootState } from "@/app/store";

export const selectOrders = (state: RootState) => state.orders.items;

export const selectOrderById = (orderId: string) => (state: RootState) =>
	state.orders.items.find((order) => order.id === orderId);
