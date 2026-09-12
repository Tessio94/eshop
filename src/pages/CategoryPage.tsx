import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useDebouncedValue } from "rooks";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectProductFilters } from "@/features/products/productFilterSelectors";
import {
  clearFilters,
  setCategory,
  setSearch,
  setSort,
} from "@/features/products/productFiltersSlice";
import { useGetProductsByCategoryQuery } from "@/services/productApi";

import {
  filterAndSortProducts,
  formatCategoryName,
} from "@/utils/productUtils";

// import { products } from "@/data/products";

import { Button } from "@/components/common/Button";
import { ProductList } from "@/components/product/ProductList";
import { ProductFilters } from "@/components/product/ProductFilters";
import { Pagination } from "@/components/product/Pagination";

const PRODUCTS_PER_PAGE = 8;

export function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { categoryId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategory(""));
  }, [dispatch, categoryId]);

  const filters = useAppSelector(selectProductFilters);

  const [debouncedSearch] = useDebouncedValue(filters.search, 300);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetProductsByCategoryQuery(categoryId ?? "");

  const categoryProducts = products.filter(
    (product) => product.category === categoryId,
  );

  const filteredProducts = filterAndSortProducts(categoryProducts, {
    ...filters,
    search: debouncedSearch,
    category: "",
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

  const formattedCategory = formatCategoryName(categoryId ?? "");

  if (categoryProducts.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Category
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Category not found
          </h1>

          <p className="mt-3 text-slate-500">
            We couldn't find any products in this category.
          </p>

          <div className="mt-6">
            <Link to="/products">
              <Button>Browse all products</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Category
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          {formattedCategory}
        </h1>

        <p className="mt-3 text-slate-500">
          Browse our selection of {formattedCategory.toLowerCase()} products.
        </p>
      </div>

      <ProductFilters
        filters={filters}
        onSearchChange={(value) => {
          dispatch(setSearch(value));
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

      <div className="mt-8">
        <ProductList products={visibleProducts} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
