import { delay } from "@/utils/loaderDelay";
import {
	createApi,
	fetchBaseQuery,
	type BaseQueryApi,
	type FetchArgs,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "https://fakestoreapi.com/",
});

const delayedBaseQuery = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: {},
) => {
	await delay(1000);

	return baseQuery(args, api, extraOptions);
};

export const mainEmptyApi = createApi({
	reducerPath: "mainEmptyApi",
	tagTypes: ["Users"],
	baseQuery: delayedBaseQuery,
	endpoints: () => ({}),
});
