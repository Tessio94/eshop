import { Link } from "react-router";

// import { products } from "@/data/products";
import { Banner } from "@/components/category/Banner";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/services/productApi";
import { formatCategoryName } from "@/utils/productUtils";

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

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex min-h-64 items-center justify-center">
          <p className="text-sm font-medium text-slate-500">
            Loading categories...
          </p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Something went wrong
          </h1>
          <p className="mt-2 text-slate-500">
            We couldn't load the categories.
          </p>
        </div>
      </section>
    );
  }

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 12 3l9 4.5M3 7.5V16.5L12 21l9-4.5V7.5M3 7.5l9 4.5m9-4.5L12 12m0 0V21"
                  />
                </svg>
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
    </section>
  );
}
