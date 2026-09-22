import { Link } from "react-router";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addToCart } from "@/features/cart/cartSlice";

import { Button } from "@/components/common/Button";
import type { Product } from "@/types/product";
import { selectIsFavorite } from "@/features/favorites/favoritesSelectors";
import { toggleFavorite } from "@/features/favorites/favoritesSlice";
import { cn } from "@/utils/cn";
import { BsFillHeartFill } from "react-icons/bs";

type ProductCardProps = {
	product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
	const dispatch = useAppDispatch();

	const isFavorite = useAppSelector(selectIsFavorite(product.id));

	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
			<div className="relative h-64 overflow-hidden bg-slate-50 p-6">
				<Link
					to={`/products/${product.id}`}
					className="flex h-full items-center justify-center"
					viewTransition
				>
					<img
						src={product.image}
						alt={product.title}
						style={{
							viewTransitionName: `product-image-${product.id}`,
						}}
						className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
					/>
				</Link>

				<Button
					variant="secondary"
					size="icon"
					aria-label={
						isFavorite
							? `Remove ${product.title} from favorites`
							: `Add ${product.title} to favorites`
					}
					onClick={() => dispatch(toggleFavorite(product))}
					className="absolute right-3 top-3 rounded-full shadow-sm"
				>
					<BsFillHeartFill
						className={cn(
							"text-lg ",
							isFavorite ? "fill-red-500" : "fill-slate-900/30",
						)}
					/>
				</Button>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<p className="text-xs font-medium uppercase tracking-wide text-brand-600">
					{product.category}
				</p>

				<Link to={`/products/${product.id}`} className="mt-2" viewTransition>
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

					<Button size="sm" onClick={() => dispatch(addToCart(product))}>
						Add to cart
					</Button>
				</div>
			</div>
		</article>
	);
}
