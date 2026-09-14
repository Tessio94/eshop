import type { RootState } from "@/app/store";

export const selectAuthToken = (state: RootState) => state.auth.token;

export const selectIsAuthenticated = (state: RootState) =>
	Boolean(state.auth.token);
