import { Link, useNavigate } from "react-router";

import { Button } from "@/components/common/Button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

import {
  selectCartItems,
  selectCartSubtotal,
} from "@/features/cart/cartSelectors";

import { clearCart } from "@/features/cart/cartSlice";
import { createOrder } from "@/features/orders/ordersSlice";

import type { Order } from "@/types/order";
import { selectAuthUsername } from "@/features/auth/authSelectors";

export function CheckoutPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const username = useAppSelector(selectAuthUsername);

  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  function handlePlaceOrder() {
    if (cartItems.length === 0 || !username) {
      return;
    }

    const order: Order = {
      id: crypto.randomUUID(),
      username,
      items: cartItems,
      subtotal,
      shipping,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    dispatch(createOrder(order));
    dispatch(clearCart());

    navigate(`/orders/${order.id}`);
  }

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            Your cart is empty
          </h1>

          <p className="mt-2 text-slate-600">
            Add some products before checking out.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-flex rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white! transition hover:bg-brand-700"
          >
            Browse products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Checkout
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Review your order
        </h1>

        <p className="mt-2 text-slate-600">
          Check your items before placing the order.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Order items */}
        <div className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Order items</h2>

          <div className="mt-6 divide-y divide-border">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="h-20 w-20 rounded-lg object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900">
                    {item.product.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Quantity: {item.quantity}
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl border border-border bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Order summary</h2>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>

              <span className="font-medium text-slate-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-600">Shipping</span>

              <span className="font-medium text-slate-900">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
          </div>

          <div className="mt-5 border-t border-border pt-5">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>

              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            type="button"
            className="mt-6 w-full"
            onClick={handlePlaceOrder}
          >
            Place order
          </Button>

          <Link
            to="/cart"
            className="mt-4 flex justify-center text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            ← Back to cart
          </Link>
        </div>
      </div>
    </section>
  );
}
