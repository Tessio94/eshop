import { Link } from "react-router";

import { ProductCarousel } from "@/components/product/ProductCarousel";
// import { products } from "@/data/products";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ShoppingBenefits } from "@/components/home/ShoppingBenefits";
import { useGetProductsQuery } from "@/services/productApi";
import landingPhoto from "@/assets/unsplah_home.jpg";

export function HomePage() {
	const { data: products = [], isLoading, isError } = useGetProductsQuery();

	return (
		<section>
			<div className="h-[calc(100vh-64px)] relative">
				<img
					src={landingPhoto}
					width={1920}
					height={1080}
					alt="Customer browsing a fashion collection"
					className="absolute inset-0 h-full w-full object-cover object-[0%_20%]"
				/>
				<div className="absolute inset-0 bg-brand-600/20" />
			</div>

			<div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 -mt-90.5">
				<div className="mt-16">
					<div className="mb-6 flex items-end justify-between gap-4 relative">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
								Featured
							</p>

							<h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
								Popular products
							</h2>
						</div>

						<Link
							to="/products"
							className="hidden text-sm font-semibold text-white! transition hover:text-brand-700 sm:block"
						>
							View all →
						</Link>
					</div>

					<ProductCarousel products={products.slice(0, 8)} />
					<PromoBanner />

					<ShoppingBenefits />
				</div>
			</div>
		</section>
	);
}
