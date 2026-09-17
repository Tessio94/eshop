import { LuImage } from "react-icons/lu";

export function ProductDetailsSkeleton() {
	return (
		<section
			aria-busy="true"
			className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
		>
			{/* Back link */}
			<div className="h-5 w-32 animate-pulse rounded bg-slate-200" />

			<div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
				{/* Product image */}
				<div className="rounded-2xl border border-border bg-white p-8">
					<div className="relative mx-auto flex aspect-square max-h-[500px] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100">
						<div className="absolute inset-0 animate-pulse bg-slate-200/60" />

						<LuImage
							aria-hidden="true"
							className="relative z-10 text-6xl text-slate-300"
						/>
					</div>
				</div>

				<div>
					{/* Category */}
					<div className="h-5 w-24 animate-pulse rounded bg-slate-200" />

					{/* Title */}
					<div className="mt-3 space-y-2">
						<div className="h-9 w-full animate-pulse rounded bg-slate-200" />
						<div className="h-9 w-3/4 animate-pulse rounded bg-slate-200" />
					</div>

					{/* Rating */}
					<div className="mt-5 flex items-center gap-3">
						<div className="h-5 w-16 animate-pulse rounded bg-slate-200" />
						<div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
					</div>

					{/* Price */}
					<div className="mt-6 h-9 w-28 animate-pulse rounded bg-slate-200" />

					{/* Description */}
					<div className="mt-6 border-t border-border pt-6">
						<div className="h-4 w-28 animate-pulse rounded bg-slate-200" />

						<div className="mt-4 space-y-2">
							<div className="h-4 w-full animate-pulse rounded bg-slate-200" />
							<div className="h-4 w-full animate-pulse rounded bg-slate-200" />
							<div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
							<div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
						</div>
					</div>

					{/* Actions */}
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<div className="h-10 flex-1 animate-pulse rounded-lg bg-slate-200" />
						<div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 sm:w-32" />
					</div>
				</div>
			</div>
		</section>
	);
}
