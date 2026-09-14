import { mainEmptyApi } from "./mainApi";

import type {
	CreateUserRequest,
	LoginRequest,
	LoginResponse,
	UpdateUserRequest,
	User,
} from "@/types/user";

export const userApi = mainEmptyApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({
			query: () => "users",
			providesTags: ["Users"],
		}),
		getUser: builder.query<User[], number>({
			query: (userId) => `users/${userId}`,
		}),
		createUser: builder.mutation<User, CreateUserRequest>({
			query: (user) => ({
				url: "users",
				method: "POST",
				body: user,
			}),
			invalidatesTags: ["Users"],
		}),
		updateUser: builder.mutation<User, UpdateUserRequest>({
			query: ({ id, ...user }) => ({
				url: `users/${id}`,
				method: "PUT",
				body: user,
			}),
			invalidatesTags: ["Users"],
			async onQueryStarted(
				{ id, email, username },
				{ dispatch, queryFulfilled },
			) {
				const patchResult = dispatch(
					userApi.util.updateQueryData("getUsers", undefined, (draft) => {
						const user = draft.find((user) => user.id === id);

						if (user) {
							user.email = email;
							user.username = username;
						}
					}),
				);

				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
		}),
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: "auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
	overrideExisting: true,
});

export const {
	useGetUsersQuery,
	useGetUserQuery,
	useCreateUserMutation,
	useUpdateUserMutation,
	useLoginMutation,
} = userApi;
