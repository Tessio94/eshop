export function CategoryCardSkeleton() {
	return (
		<article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
			<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
				<div className="h-6 w-6 animate-pulse rounded bg-slate-200" />
			</div>

			<div className="mt-6 h-6 w-40 animate-pulse rounded bg-slate-200" />

			<div className="mt-2 h-4 w-24 animate-pulse rounded bg-slate-200" />

			<div className="mt-5 h-5 w-36 animate-pulse rounded bg-slate-200" />
		</article>
	);
}
