import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainEmptyApi = createApi({
	reducerPath: "mainEmptyApi",
	tagTypes: ["Users"],
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fakestoreapi.com/",
	}),
	endpoints: () => ({}),
});
