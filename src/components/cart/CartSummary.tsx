import { Link } from "react-router";

import { Button } from "@/components/common/Button";

type CartSummaryProps = {
  subtotal: number;
};

export function CartSummary({ subtotal }: CartSummaryProps) {
  const shipping = subtotal >= 100 ? 0 : 9.99;

  const total = subtotal + shipping;

  return (
    <aside className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Order summary</h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>Subtotal</span>

          <span className="font-medium text-slate-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Shipping</span>

          {shipping === 0 ? (
            <span className="font-medium text-green-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900">
              ${shipping.toFixed(2)}
            </span>
          )}
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-900">Total</span>

            <span className="text-xl font-bold text-slate-900">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <Button asChild className="mt-6 w-full">
        <Link to="/checkout">Proceed to checkout</Link>
      </Button>

      {subtotal < 100 && (
        <p className="mt-4 text-center text-xs text-slate-500">
          Add ${(100 - subtotal).toFixed(2)} more for free shipping.
        </p>
      )}
    </aside>
  );
}
