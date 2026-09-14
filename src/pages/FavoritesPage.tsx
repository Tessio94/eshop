import { Link } from "react-router";

import { useAppSelector } from "@/app/hooks";
import { ProductCard } from "@/components/product/ProductCard";
import { selectFavoriteItems } from "@/features/favorites/favoritesSelectors";
import { BiHeart } from "react-icons/bi";

export function FavoritesPage() {
	const favoriteItems = useAppSelector(selectFavoriteItems);

	if (favoriteItems.length === 0) {
		return (
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-xl text-center">
					<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
						<BiHeart className="text-3xl" />
					</div>

					<h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
						No favorites yet
					</h1>

					<p className="mt-3 text-slate-500">
						Save products you love and they'll appear here.
					</p>

					<Link
						to="/products"
						className="mt-8 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white! shadow-sm transition hover:bg-brand-700"
					>
						Browse products
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
			<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
				<div>
					<p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
						Saved products
					</p>

					<h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
						Favorites
					</h1>

					<p className="mt-2 text-slate-500">
						{favoriteItems.length}{" "}
						{favoriteItems.length === 1 ? "product" : "products"} saved
					</p>
				</div>

				<Link
					to="/products"
					className="text-sm font-semibold text-brand-600 transition hover:text-brand-700"
				>
					Continue shopping →
				</Link>
			</div>

			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{favoriteItems.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}
