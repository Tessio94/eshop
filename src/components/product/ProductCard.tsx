import { Link } from "react-router";

import { Button } from "@/components/common/Button";
import type { Product } from "@/types/product";

type ProductCardProps = {
	product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
			<div className="relative h-64 overflow-hidden bg-slate-50 p-6">
				<Link
					to={`/products/${product.id}`}
					className="flex h-full items-center justify-center"
				>
					<img
						src={product.image}
						alt={product.title}
						className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
					/>
				</Link>

				<Button
					variant="secondary"
					size="icon"
					aria-label={`Add ${product.title} to favorites`}
					onClick={() => {
						// Favorites logic will come later with Redux.
					}}
					className="absolute right-3 top-3 rounded-full text-slate-500 shadow-sm hover:text-red-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="h-4 w-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
						/>
					</svg>
				</Button>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<p className="text-xs font-medium uppercase tracking-wide text-brand-600">
					{product.category}
				</p>

				<Link to={`/products/${product.id}`} className="mt-2">
					<h2 className="line-clamp-2 text-base font-semibold text-slate-900 transition group-hover:text-brand-600">
						{product.title}
					</h2>
				</Link>

				<div className="mt-3 flex items-center gap-2">
					<div className="flex items-center gap-1 text-accent-600">
						<span aria-hidden="true">★</span>
						<span className="text-sm font-semibold">{product.rating.rate}</span>
					</div>

					<span className="text-sm text-slate-400">
						({product.rating.count})
					</span>
				</div>

				<div className="mt-auto flex items-center justify-between gap-3 pt-5">
					<span className="text-lg font-bold text-slate-900">
						${product.price.toFixed(2)}
					</span>

					<Button size="sm">Add to cart</Button>
				</div>
			</div>
		</article>
	);
}
