import { isRouteErrorResponse, useRouteError } from "react-router";

export function ErrorMessage() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<main className="mx-auto max-w-7xl px-4 py-16 text-center">
				<h1 className="text-3xl font-bold text-slate-900">{error.status}</h1>
				<p className="mt-3 text-slate-600">{error.statusText}</p>
			</main>
		);
	}

	if (error instanceof Error) {
		return (
			<main className="mx-auto max-w-7xl px-4 py-16 text-center">
				<h1 className="text-3xl font-bold text-slate-900">
					Something went wrong
				</h1>
				<p className="mt-3 text-slate-600">{error.message}</p>
			</main>
		);
	}

	return (
		<main className="mx-auto max-w-7xl px-4 py-16 text-center">
			<h1 className="text-3xl font-bold text-slate-900">
				Something went wrong
			</h1>

			<p className="mt-3 text-slate-600">
				We couldn't load this page right now.
			</p>
		</main>
	);
}
