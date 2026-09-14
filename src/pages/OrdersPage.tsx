import { Link } from "react-router";
import { useAppSelector } from "@/app/hooks";
import { selectAuthUsername } from "@/features/auth/authSelectors";
import { selectOrders } from "@/features/orders/ordersSelectors";

export function OrdersPage() {
  const orders = useAppSelector(selectOrders);

  const username = useAppSelector(selectAuthUsername);

  const userOrders = orders.filter((order) => order.username === username);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {userOrders.length === 0 ? (
        <div className="rounded-2xl border border-border bg-white p-8 text-center">
          <p className="text-slate-500">You don't have any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {userOrders.map((order) => (
            <Link
              key={order.id}
              to={`/orders/${order.id}`}
              className="block rounded-2xl border border-border bg-white p-6 transition hover:border-brand-300 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    Order #{order.id.slice(0, 8)}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-slate-900">
                    ${order.total.toFixed(2)}
                  </p>

                  <p className="mt-1 text-sm capitalize text-slate-500">
                    {order.status}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
