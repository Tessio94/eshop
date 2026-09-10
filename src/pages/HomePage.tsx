import { Link } from "react-router";

import { ProductCarousel } from "@/components/product/ProductCarousel";
import { products } from "@/data/products";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ShoppingBenefits } from "@/components/home/ShoppingBenefits";

export function HomePage() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="overflow-hidden rounded-3xl bg-brand-700 px-6 py-16 text-white sm:px-10 lg:px-16 shadow-lg shadow-brand-300">
				<div className="max-w-2xl">
					<span className="inline-flex rounded-full bg-accent-400 px-3 py-1 text-sm font-bold text-slate-900">
						New collection
					</span>

					<h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
						Everything you want, in one place.
					</h1>

					<p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
						Discover products, manage your favorites, build your cart and place
						orders in our little practice marketplace.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							to="/products"
							className="rounded-xl bg-accent-400 px-5 pt-3 pb-2.5 font-bold text-slate-900! transition hover:bg-accent-300"
						>
							Shop products
						</Link>

						<Link
							to="/categories"
							className="rounded-xl border border-white/30 bg-white/10 px-5 pt-3 pb-2.5 font-semibold text-white transition hover:bg-white/20"
						>
							Browse categories
						</Link>
					</div>
				</div>
			</div>

			<div className="mt-16">
				<div className="mb-6 flex items-end justify-between gap-4">
					<div>
						<p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
							Featured
						</p>

						<h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
							Popular products
						</h2>
					</div>

					<Link
						to="/products"
						className="hidden text-sm font-semibold text-brand-600 transition hover:text-brand-700 sm:block"
					>
						View all →
					</Link>
				</div>

				<ProductCarousel products={products.slice(0, 8)} />

				<PromoBanner />

				<ShoppingBenefits />
			</div>
		</section>
	);
}
