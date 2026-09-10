import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SortOption = "default" | "price-asc" | "price-desc" | "rating";

export type ProductFilterValues = {
	search: string;
	category: string;
	sort: SortOption;
};

const initialState: ProductFilterValues = {
	search: "",
	category: "",
	sort: "default",
};

const productFiltersSlice = createSlice({
	name: "productFilters",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},

		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
		setSort: (state, action: PayloadAction<SortOption>) => {
			state.sort = action.payload;
		},
		clearFilters: (state) => {
			state.search = "";
			state.category = "";
			state.sort = "default";
		},
	},
});

export const { setSearch, setCategory, setSort, clearFilters } =
	productFiltersSlice.actions;

export const productFiltersReducer = productFiltersSlice.reducer;
