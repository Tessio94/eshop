import { Link } from "react-router";

import { Button } from "@/components/common/Button";

import { useAppDispatch } from "@/app/hooks";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/features/cart/cartSlice";

import type { CartItem } from "@/types/cart";

type CartItemProps = {
  item: CartItem;
};

export function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const { product, quantity } = item;

  const itemTotal = product.price * quantity;

  return (
    <article className="flex flex-col gap-5 border-b border-border py-6 sm:flex-row">
      <Link
        to={`/products/${product.id}`}
        className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:w-32"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              {product.category}
            </p>

            <Link
              to={`/products/${product.id}`}
              className="mt-1 inline-block font-semibold text-slate-900 transition hover:text-brand-600 line-clamp-2"
            >
              {product.title}
            </Link>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(removeFromCart(product.id))}
            className="shrink-0 text-slate-400 hover:text-red-500"
          >
            Remove
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center rounded-xl border border-border">
            <Button
              variant="ghost"
              size="sm"
              aria-label={`Decrease quantity of ${product.title}`}
              onClick={() => dispatch(decreaseQuantity(product.id))}
              className="rounded-r-none"
            >
              −
            </Button>

            <span className="flex min-w-10 justify-center text-sm font-semibold text-slate-900">
              {quantity}
            </span>

            <Button
              variant="ghost"
              size="sm"
              aria-label={`Increase quantity of ${product.title}`}
              onClick={() => dispatch(increaseQuantity(product.id))}
              className="rounded-l-none"
            >
              +
            </Button>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              ${product.price.toFixed(2)} each
            </p>

            <p className="mt-1 text-lg font-bold text-slate-900">
              ${itemTotal.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
