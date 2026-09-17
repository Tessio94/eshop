import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { cn } from "@/utils/cn";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

type ProductListProps = {
	products: Product[];
	isLoading: boolean;
	isFetching: boolean;
	isError: boolean;
};

export function ProductList({
	products,
	isLoading,
	isFetching,
	isError,
}: ProductListProps) {
	if (isError) {
		return (
			<div className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
				<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
					<svg
						className="h-7 w-7"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.8"
					>
						<circle cx="11" cy="11" r="7" />
						<path d="m20 20-4-4" />
					</svg>
				</div>

				<h2 className="mt-4 text-lg font-semibold text-slate-900">
					No products found
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					Try changing your search or filters.
				</p>
			</div>
		);
	}

	return (
		<div
			className={cn(
				"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity duration-200",
				isFetching && "opacity-60",
			)}
		>
			{isLoading
				? Array.from({ length: 8 }, (_, i) => i).map((numberIndex) => (
						<ProductCardSkeleton key={numberIndex} />
					))
				: products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
		</div>
	);
}
