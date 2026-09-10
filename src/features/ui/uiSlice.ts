import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
	isMobileMenuOpen: boolean;
};

const initialState: UiState = {
	isMobileMenuOpen: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		openMobileMenu: (state) => {
			state.isMobileMenuOpen = true;
		},

		closeMobileMenu: (state) => {
			state.isMobileMenuOpen = false;
		},

		toggleMobileMenu: (state) => {
			state.isMobileMenuOpen = !state.isMobileMenuOpen;
		},
	},
});

export const { openMobileMenu, closeMobileMenu, toggleMobileMenu } =
	uiSlice.actions;

export const uiReducer = uiSlice.reducer;
