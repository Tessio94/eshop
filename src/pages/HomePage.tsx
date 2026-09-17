import { Link } from "react-router";

import { ProductCarousel } from "@/components/product/ProductCarousel";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ShoppingBenefits } from "@/components/home/ShoppingBenefits";
import { useGetProductsQuery } from "@/services/productApi";
import landingPhoto from "@/assets/unsplah_home.jpg";
import { cn } from "@/utils/cn";
import { ProductCarouselSkeleton } from "@/components/product/ProductCarouselSkeleton";

export function HomePage() {
	const {
		data: products = [],
		isError,
		isLoading,
		isFetching,
	} = useGetProductsQuery();

	return (
		<section>
			<div className="h-[calc(100vh-64px)] relative">
				<img
					src={landingPhoto}
					width={1920}
					height={1080}
					fetchPriority="high"
					decoding="async"
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

					{isLoading ? (
						<ProductCarouselSkeleton count={8} />
					) : isError ? (
						<div className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-sm">
							<p className="text-lg font-semibold text-white">
								Unable to load products
							</p>

							<p className="mt-2 text-sm text-white/70">
								Something went wrong while loading the featured products.
							</p>
						</div>
					) : (
						<div
							className={cn(
								"transition-opacity duration-200",
								isFetching && "opacity-60",
							)}
						>
							<ProductCarousel products={products.slice(0, 8)} />
						</div>
					)}

					<PromoBanner />

					<ShoppingBenefits />
				</div>
			</div>
		</section>
	);
}
