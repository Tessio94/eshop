import { useMemo, useState } from "react";
import { useDebouncedValue } from "rooks";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectProductFilters } from "@/features/products/productFilterSelectors";
import {
	clearFilters,
	setCategory,
	setSearch,
	setSort,
} from "@/features/products/productFiltersSlice";

import { filterAndSortProducts } from "@/utils/productUtils";

import { Pagination } from "@/components/product/Pagination";
import {
	ProductFilters,
	type ProductFilterValues,
} from "@/components/product/ProductFilters";
import { ProductList } from "@/components/product/ProductList";
import { useGetProductsQuery } from "@/services/productApi";

const PRODUCTS_PER_PAGE = 8;

export function ProductsPage() {
	const [currentPage, setCurrentPage] = useState(1);

	const dispatch = useAppDispatch();

	const { data: products = [], isLoading, isError } = useGetProductsQuery();

	const filters: ProductFilterValues = useAppSelector(selectProductFilters);

	const categories = useMemo(() => {
		return [...new Set(products.map((product) => product.category))];
	}, [products]);

	const [debouncedSearch] = useDebouncedValue(filters.search, 300);

	const filteredProducts = filterAndSortProducts(products, {
		...filters,
		search: debouncedSearch,
	});

	const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

	const visibleProducts = filteredProducts.slice(
		(currentPage - 1) * PRODUCTS_PER_PAGE,
		currentPage * PRODUCTS_PER_PAGE,
	);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (isLoading) {
		return (
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="flex min-h-64 items-center justify-center">
					<p className="text-sm font-medium text-slate-500">
						Loading products...
					</p>
				</div>
			</section>
		);
	}

	if (isError) {
		return (
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
					<h1 className="text-xl font-bold text-red-900">
						Something went wrong
					</h1>

					<p className="mt-2 text-sm text-red-700">
						We couldn't load the products. Please try again.
					</p>
				</div>
			</section>
		);
	}

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
				onSearchChange={(value) => {
					dispatch(setSearch(value));
					setCurrentPage(1);
				}}
				onCategoryChange={(value) => {
					dispatch(setCategory(value));
					setCurrentPage(1);
				}}
				onSortChange={(value) => {
					dispatch(setSort(value));
					setCurrentPage(1);
				}}
				onClear={() => {
					dispatch(clearFilters());
					setCurrentPage(1);
				}}
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
