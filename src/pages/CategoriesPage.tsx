import { Link } from "react-router";

import { Banner } from "@/components/category/Banner";
import {
	useGetCategoriesQuery,
	useGetProductsQuery,
} from "@/services/productApi";
import { formatCategoryName } from "@/utils/productUtils";
import { IoCubeSharp } from "react-icons/io5";
import { CategoryGridSkeleton } from "@/components/category/CategoryGridSkeleton";

export function CategoriesPage() {
	const {
		data: categories = [],
		isLoading: categoriesLoading,
		isError: categoriesError,
	} = useGetCategoriesQuery();

	const {
		data: products = [],
		isLoading: productsLoading,
		isError: productsError,
	} = useGetProductsQuery();

	const isLoading = categoriesLoading || productsLoading;
	const isError = categoriesError || productsError;

	return (
		<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="max-w-2xl">
				<p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
					Explore
				</p>

				<h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
					Shop by category
				</h1>

				<p className="mt-4 text-lg text-slate-500">
					Find exactly what you're looking for by browsing our product
					categories.
				</p>
			</div>
			<Banner />
			{isLoading ? (
				<CategoryGridSkeleton count={4} />
			) : isError ? (
				<div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
					<h2 className="text-xl font-bold text-red-900">
						Something went wrong
					</h2>
					<p className="mt-2 text-sm text-red-700">
						We couldn't load the categories. Please try again.
					</p>
				</div>
			) : (
				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{categories.map((category) => {
						const productCount = products.filter(
							(product) => product.category === category,
						).length;

						return (
							<Link
								key={category}
								to={`/categories/${encodeURIComponent(category)}`}
								className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
									<IoCubeSharp className="text-2xl" />
								</div>

								<h2 className="mt-6 text-xl font-bold text-slate-900 transition group-hover:text-brand-600">
									{formatCategoryName(category)}
								</h2>

								<p className="mt-2 text-sm text-slate-500">
									{productCount} {productCount === 1 ? "product" : "products"}
								</p>

								<span className="mt-5 inline-flex text-sm font-semibold text-brand-600">
									Explore category →
								</span>
							</Link>
						);
					})}
				</div>
			)}
		</section>
	);
}
