import { Link } from "react-router";
import { Navigation } from "./Navigation";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectCartItemCount } from "@/features/cart/cartSelectors";
import { selectFavoriteCount } from "@/features/favorites/favoritesSelectors";
import { selectIsMobileMenuOpen } from "@/features/ui/uiStateSelector";
import { closeMobileMenu, toggleMobileMenu } from "@/features/ui/uiSlice";
import headerLogo from "@/assets/header-logo.png";
import headerLogoMobile from "@/assets/header-logo-mobile.png";
import { CgShoppingCart } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import { selectIsAuthenticated } from "@/features/auth/authSelectors";
import { Button } from "../common/Button";
import { logout } from "@/features/auth/authSlice";

export function Header() {
	const dispatch = useAppDispatch();

	const isMobileMenuOpen = useAppSelector(selectIsMobileMenuOpen);
	const cartItemCount = useAppSelector(selectCartItemCount);
	const favoriteCount = useAppSelector(selectFavoriteCount);
	const isSignedIn = useAppSelector(selectIsAuthenticated);

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<img
						className="max-h-9 w-auto object-contain sm:block hidden"
						src={headerLogo}
						alt="Sime store logo"
						width={250}
						height={115}
					/>
					<img
						className="max-h-6 w-auto object-contain block sm:hidden"
						src={headerLogoMobile}
						alt="Sime store logo"
						width={96}
						height={44}
					/>
				</Link>

				{/* Desktop navigation */}
				<div className="hidden lg:block">
					<Navigation />
				</div>

				{/* Actions */}
				<div className="flex items-center gap-4">
					{/* Favorites */}
					<Link
						to="/favorites"
						className="relative  rounded-lg p-2 text-slate-600 transition hover:bg-brand-50 hover:text-brand-600 block"
						aria-label="Favorites"
					>
						<BiHeart className="text-2xl" />
						<span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
							{favoriteCount}
						</span>
					</Link>

					{/* Cart */}
					<Link
						to="/cart"
						className="relative rounded-lg p-2 text-slate-600 transition hover:bg-brand-50 hover:text-brand-600"
						aria-label="Shopping cart"
					>
						<CgShoppingCart className="text-2xl" />

						<span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-400 px-1 text-[10px] font-bold text-slate-900">
							{cartItemCount}
						</span>
					</Link>

					{/* Login */}
					{isSignedIn ? (
						<Button size="sm" onClick={() => dispatch(logout())}>
							Log out
						</Button>
					) : (
						<Link
							to="/login"
							className="hidden rounded-lg bg-brand-600 px-3 pt-2 pb-1.5 text-sm font-semibold text-white! shadow-sm transition hover:bg-brand-700 sm:block"
						>
							Sign in
						</Link>
					)}

					{/* Mobile menu */}
					<button
						type="button"
						onClick={() => dispatch(toggleMobileMenu())}
						className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? (
							<svg
								className="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M6 6l12 12M18 6L6 18" />
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile navigation */}
			{isMobileMenuOpen && (
				<div className="border-t border-border bg-white px-4 py-4 lg:hidden">
					<Navigation mobile onClick={() => dispatch(closeMobileMenu())} />
				</div>
			)}
		</header>
	);
}
