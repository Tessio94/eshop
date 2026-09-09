import { Link } from "react-router";

export function Footer() {
	return (
		<footer className="border-t border-border bg-white">
			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div>
						<Link to="/" className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
								M
							</div>

							<span className="font-bold text-slate-900">
								Market<span className="text-brand-600">ly</span>
							</span>
						</Link>

						<p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
							A modern marketplace built with React, TypeScript, Redux Toolkit
							and RTK Query.
						</p>
					</div>

					{/* Shop */}
					<div>
						<h3 className="text-sm font-semibold text-slate-900">Shop</h3>

						<ul className="mt-4 space-y-2 text-sm text-slate-500">
							<li>
								<Link to="/products" className="hover:text-brand-600">
									Products
								</Link>
							</li>
							<li>
								<Link to="/favorites" className="hover:text-brand-600">
									Favorites
								</Link>
							</li>
							<li>
								<Link to="/cart" className="hover:text-brand-600">
									Cart
								</Link>
							</li>
						</ul>
					</div>

					{/* Account */}
					<div>
						<h3 className="text-sm font-semibold text-slate-900">Account</h3>

						<ul className="mt-4 space-y-2 text-sm text-slate-500">
							<li>
								<Link to="/login" className="hover:text-brand-600">
									Sign in
								</Link>
							</li>
							<li>
								<Link to="/orders" className="hover:text-brand-600">
									Orders
								</Link>
							</li>
							<li>
								<Link to="/checkout" className="hover:text-brand-600">
									Checkout
								</Link>
							</li>
						</ul>
					</div>

					{/* Practice project */}
					<div>
						<h3 className="text-sm font-semibold text-slate-900">
							Built for practice
						</h3>

						<p className="mt-4 text-sm leading-6 text-slate-500">
							React + TypeScript
							<br />
							Redux Toolkit + RTK Query
							<br />
							React Router
						</p>
					</div>
				</div>

				<div className="mt-10 border-t border-border pt-6 text-center text-xs text-slate-400">
					© 2026 Marketly. Practice project.
				</div>
			</div>
		</footer>
	);
}
