import { useMemo, useState } from "react";

import { Pagination } from "@/components/product/Pagination";
import {
	ProductFilters,
	type ProductFilterValues,
} from "@/components/product/ProductFilters";
import { ProductList } from "@/components/product/ProductList";
import { products } from "@/data/products";

const PRODUCTS_PER_PAGE = 8;

export function ProductsPage() {
	const [filters, setFilters] = useState<ProductFilterValues>({
		search: "",
		category: "",
		sort: "default",
	});

	const [currentPage, setCurrentPage] = useState(1);

	const categories = useMemo(() => {
		return [...new Set(products.map((product) => product.category))];
	}, [products]);

	const filteredProducts = useMemo(() => {
		const result = products.filter((product) => {
			const matchesSearch = product.title
				.toLowerCase()
				.includes(filters.search.toLowerCase());

			const matchesCategory =
				filters.category === "" || product.category === filters.category;

			return matchesSearch && matchesCategory;
		});

		switch (filters.sort) {
			case "price-asc":
				return [...result].sort((a, b) => a.price - b.price);

			case "price-desc":
				return [...result].sort((a, b) => b.price - a.price);

			case "rating":
				return [...result].sort((a, b) => b.rating.rate - a.rating.rate);

			default:
				return result;
		}
	}, [filters]);

	const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

	const visibleProducts = filteredProducts.slice(
		(currentPage - 1) * PRODUCTS_PER_PAGE,
		currentPage * PRODUCTS_PER_PAGE,
	);

	const handleFiltersChange = (newFilters: ProductFilterValues) => {
		setFilters(newFilters);
		setCurrentPage(1);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
			{/* Header */}
			<div className="mb-8">
				<p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
					Discover
				</p>

				<div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<div>
						<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
							All products
						</h1>

						<p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
							Explore our collection and find something you'll love.
						</p>
					</div>

					<p className="text-sm text-slate-500">
						<span className="font-semibold text-slate-900">
							{filteredProducts.length}
						</span>{" "}
						products
					</p>
				</div>
			</div>

			{/* Filters */}
			<ProductFilters
				filters={filters}
				categories={categories}
				onChange={handleFiltersChange}
			/>

			{/* Products */}
			<div className="mt-8">
				<ProductList products={visibleProducts} />
			</div>

			{/* Pagination */}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
