import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

type ProductListProps = {
	products: Product[];
};

export function ProductList({ products }: ProductListProps) {
	if (products.length === 0) {
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
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
