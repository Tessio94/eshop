import { Link } from "react-router";

export function NotFoundPage() {
	return (
		<main className="mx-auto max-w-7xl px-4 py-16 text-center flex flex-col items-center gap-8">
			<h1 className="text-3xl font-bold text-slate-900">
				<span className="text-4xl text-red-500">404</span> page not found
			</h1>

			<p className="mt-3 text-slate-600">
				The site you requested cannot be found
			</p>

			<Link
				to="/"
				className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white! shadow-sm transition hover:bg-brand-700"
			>
				Back to homepage
			</Link>
		</main>
	);
}
