import { Link } from "react-router";
import headerLogo from "@/assets/header-logo.png";
import headerLogoMobile from "@/assets/header-logo-mobile.png";

export function Footer() {
	return (
		<footer className="border-t border-border bg-white">
			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div>
						<a href="#" className="flex items-center gap-2">
							<img
								className="max-h-10 w-auto object-contain sm:block hidden"
								src={headerLogo}
								alt="Sime store logo"
								width={250}
								height={115}
							/>
							<img
								className="max-h-10 w-auto object-contain block sm:hidden"
								src={headerLogoMobile}
								alt="Sime store logo"
								width={96}
								height={44}
							/>
						</a>
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
					© 2026 SK. Practice project.
				</div>
			</div>
		</footer>
	);
}
