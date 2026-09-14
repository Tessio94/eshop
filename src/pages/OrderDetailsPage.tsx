import { Link, useParams } from "react-router";

import { useAppSelector } from "@/app/hooks";
import { selectOrderById } from "@/features/orders/ordersSelectors";

export function OrderDetailsPage() {
	const { orderId } = useParams();

	const order = useAppSelector(selectOrderById(orderId ?? ""));

	if (!order) {
		return (
			<section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold text-slate-900">Order not found</h1>

				<Link
					to="/orders"
					className="mt-6 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700"
				>
					← Back to orders
				</Link>
			</section>
		);
	}

	return (
		<section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
			<div>
				<p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
					Order details
				</p>

				<h1 className="mt-2 text-3xl font-bold text-slate-900">
					Order #{order.id.slice(0, 8)}
				</h1>

				<p className="mt-2 text-slate-600">
					{new Date(order.createdAt).toLocaleDateString()}
				</p>
			</div>

			<div className="mt-8 rounded-2xl border border-border bg-white p-6">
				<div className="flex items-center justify-between">
					<span className="font-semibold text-slate-700">Status</span>

					<span className="capitalize text-brand-600">{order.status}</span>
				</div>
			</div>

			<div className="mt-6 rounded-2xl border border-border bg-white p-6">
				<h2 className="text-xl font-bold text-slate-900">Items</h2>

				<div className="mt-6 space-y-4">
					{order.items.map((item) => (
						<div
							key={item.product.id}
							className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
						>
							<div>
								<p className="font-medium text-slate-900">
									{item.product.title}
								</p>

								<p className="mt-1 text-sm text-slate-500">
									Quantity: {item.quantity}
								</p>
							</div>

							<p className="font-semibold text-slate-900">
								${(item.product.price * item.quantity).toFixed(2)}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 rounded-2xl border border-border bg-white p-6">
				<div className="flex justify-between">
					<span>Subtotal</span>
					<span>${order.subtotal.toFixed(2)}</span>
				</div>

				<div className="mt-2 flex justify-between">
					<span>Shipping</span>
					<span>
						{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}
					</span>
				</div>

				<div className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-bold">
					<span>Total</span>
					<span>${order.total.toFixed(2)}</span>
				</div>
			</div>

			<Link
				to="/orders"
				className="mt-6 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700"
			>
				← Back to orders
			</Link>
		</section>
	);
}
