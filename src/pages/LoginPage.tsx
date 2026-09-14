import { useState } from "react";

import { Button } from "@/components/common/Button";
import { useGetUsersQuery, useLoginMutation } from "@/services/userApi";
import { useAppDispatch } from "@/app/hooks";
import { useNavigate } from "react-router";
import { setCredentials } from "@/features/auth/authSlice";

export function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [login, { isLoading, isError }] = useLoginMutation();

	const { data: users = [] } = useGetUsersQuery();
	console.log(users);

	async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			const result = await login({
				username,
				password,
			}).unwrap();

			dispatch(setCredentials(result.token));

			navigate("/orders");
		} catch (error) {
			console.error("Create user failed:", error);
		}
	}

	return (
		<section className="mx-auto flex max-w-7xl justify-center px-4 py-16 sm:px-6 lg:px-8">
			<div className="w-full max-w-md">
				<div className="text-center">
					<p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
						Welcome back
					</p>

					<h1 className="mt-2 text-3xl font-bold text-slate-900">Sign in</h1>

					<p className="mt-2 text-slate-600">
						Sign in to access your account and orders.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm"
				>
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-semibold text-slate-700"
						>
							Username
						</label>

						<input
							id="username"
							type="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
							placeholder="Username"
							required
						/>
					</div>

					<div className="mt-5">
						<label
							htmlFor="password"
							className="block text-sm font-semibold text-slate-700"
						>
							Password
						</label>

						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
							placeholder="••••••••"
							required
						/>
					</div>

					<Button type="submit" className="mt-6 w-full" disabled={isLoading}>
						{isLoading ? "Signing in..." : "Sign in"}
					</Button>

					{isError && (
						<p className="mt-4 text-sm text-red-600">
							Invalid username or password.
						</p>
					)}
				</form>
			</div>
		</section>
	);
}
