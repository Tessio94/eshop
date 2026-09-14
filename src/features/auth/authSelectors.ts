import type { RootState } from "@/app/store";

export const selectAuthToken = (state: RootState) => state.auth.token;

export const selectAuthUsername = (state: RootState) => state.auth.username;

export const selectIsAuthenticated = (state: RootState) =>
  Boolean(state.auth.token);
