import { Link } from "react-router";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/common/Button";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/features/cart/cartSlice";
import { selectCartItems } from "@/features/cart/cartSelectors";

export function CartPage() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 2h13m-11 3a1 1 0 1 0 2 0m8 0a1 1 0 1 0 2 0"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Start shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Shopping cart
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Your cart
        </h1>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {items.map((item) => (
            <article
              key={item.product.id}
              className="flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5"
            >
              <Link
                to={`/products/${item.product.id}`}
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="h-full w-full object-contain"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
                      {item.product.category}
                    </p>

                    <Link
                      to={`/products/${item.product.id}`}
                      className="mt-1 block"
                    >
                      <h2 className="line-clamp-2 font-semibold text-slate-900 transition hover:text-brand-600">
                        {item.product.title}
                      </h2>
                    </Link>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove ${item.product.title} from cart`}
                    onClick={() => dispatch(removeFromCart(item.product.id))}
                    className="shrink-0 text-slate-400 hover:text-red-600"
                  >
                    ×
                  </Button>
                </div>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-4">
                  <div className="flex items-center rounded-lg border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Decrease quantity of ${item.product.title}`}
                      onClick={() =>
                        dispatch(decreaseQuantity(item.product.id))
                      }
                      className="h-9 w-9 rounded-r-none"
                    >
                      −
                    </Button>

                    <span className="flex h-9 w-10 items-center justify-center border-x border-border text-sm font-semibold">
                      {item.quantity}
                    </span>

                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Increase quantity of ${item.product.title}`}
                      onClick={() =>
                        dispatch(increaseQuantity(item.product.id))
                      }
                      className="h-9 w-9 rounded-l-none"
                    >
                      +
                    </Button>
                  </div>

                  <p className="font-bold text-slate-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Order summary</h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4 text-slate-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between gap-4 text-slate-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between gap-4 text-base font-bold text-slate-900">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-6 w-full"
            onClick={() => {
              // Checkout flow will come later.
            }}
          >
            Proceed to checkout
          </Button>
        </aside>
      </div>
    </section>
  );
}
