import { Link, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useGetProductQuery } from "@/services/productApi";
// import { products } from "@/data/products";
import { addToCart } from "@/features/cart/cartSlice";
import { addToFavorites } from "@/features/favorites/favoritesSlice";
import { selectIsFavorite } from "@/features/favorites/favoritesSelectors";

import { Button } from "@/components/common/Button";
import { cn } from "@/utils/cn";

export function ProductDetailsPage() {
  const { productId } = useParams();

  const dispatch = useAppDispatch();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductQuery(Number(productId));

  const isFavorite = useAppSelector(selectIsFavorite(product?.id as number));

  if (isError || !product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Product not found
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            We couldn't find that product
          </h1>

          <p className="mt-4 text-slate-500">
            The product you're looking for may no longer exist.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex min-h-64 items-center justify-center">
          <p className="text-sm font-medium text-slate-500">
            Loading product...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-brand-600"
      >
        <span aria-hidden="true">←</span>
        Back to products
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="rounded-2xl border border-border bg-white p-8">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto aspect-square max-h-[500px] w-full object-contain"
          />
        </div>

        <div>
          <p className="text-sm font-medium capitalize text-brand-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-accent-600">
              <span aria-hidden="true">★</span>
              <span className="font-semibold">{product.rating.rate}</span>
            </div>

            <span className="text-sm text-slate-500">
              {product.rating.count} reviews
            </span>
          </div>

          <p className="mt-6 text-3xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-6 border-t border-border pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Description
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {product.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="flex-1"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </Button>

              <Button
                variant="secondary"
                onClick={() => dispatch(addToFavorites(product))}
                className={cn(isFavorite && "bg-red-500/50!")}
              >
                ♡ Favorite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
