import { Link } from "react-router";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/common/Button";
import { clearCart } from "@/features/cart/cartSlice";
import {
	selectCartItemCount,
	selectCartItems,
	selectCartSubtotal,
} from "@/features/cart/cartSelectors";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { GiShoppingCart } from "react-icons/gi";

export function CartPage() {
	const dispatch = useAppDispatch();

	const cartItems = useAppSelector(selectCartItems);
	const cartItemsCount = useAppSelector(selectCartItemCount);
	const subtotal = useAppSelector(selectCartSubtotal);

	if (cartItems.length === 0) {
		return (
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-md text-center">
					<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
						<GiShoppingCart />
					</div>

					<h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
						Your cart is empty
					</h1>

					<p className="mt-3 text-slate-500">
						Looks like you haven't added anything yet.
					</p>

					<Link
						to="/products"
						className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white! shadow-sm transition hover:bg-brand-700"
					>
						Continue shopping
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="flex flex-wrap items-end justify-between gap-4">
				<div>
					<p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
						Shopping cart
					</p>

					<h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
						Your cart
					</h1>

					<p className="mt-2 text-slate-500">
						{cartItemsCount} {cartItemsCount === 1 ? "item" : "items"} in your
						cart
					</p>
				</div>

				<Button
					variant="ghost"
					size="sm"
					onClick={() => dispatch(clearCart())}
					className="text-slate-500 hover:text-red-500"
				>
					Clear cart
				</Button>
			</div>

			<div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
				<div>
					{cartItems.map((item) => (
						<CartItem key={item.product.id} item={item} />
					))}
				</div>

				<CartSummary subtotal={subtotal} />
			</div>
		</section>
	);
}
