import { LuImage } from "react-icons/lu";

export function ProductCardSkeleton() {
	return (
		<article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white">
			<div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100 p-6">
				<div className="absolute inset-0 animate-pulse bg-slate-200/60" />

				<LuImage
					aria-hidden="true"
					className="relative z-10 text-5xl text-slate-300"
				/>
			</div>

			<div className="flex flex-1 flex-col px-5 py-6.25">
				<div className="h-3 w-20 animate-pulse rounded bg-slate-200" />

				<div className="mt-3 space-y-2">
					<div className="h-4 w-full animate-pulse rounded bg-slate-200" />
					<div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
				</div>

				<div className="mt-4 flex items-center gap-2">
					<div className="h-4 w-10 animate-pulse rounded bg-slate-200" />
					<div className="h-4 w-12 animate-pulse rounded bg-slate-200" />
				</div>

				<div className="mt-auto flex items-center justify-between gap-3 pt-5">
					<div className="h-6 w-20 animate-pulse rounded bg-slate-200" />
					<div className="h-9 w-24 animate-pulse rounded-lg bg-slate-200" />
				</div>
			</div>
		</article>
	);
}
