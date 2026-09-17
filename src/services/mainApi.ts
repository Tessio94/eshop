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
  const start = performance.now();

  const result = await baseQuery(args, api, extraOptions);

  const elapsed = performance.now() - start;
  const remaining = Math.max(0, 1000 - elapsed);

  await delay(remaining);

  return result;
};

export const mainEmptyApi = createApi({
  reducerPath: "mainEmptyApi",
  tagTypes: ["Users"],
  baseQuery: delayedBaseQuery,
  endpoints: () => ({}),
});
