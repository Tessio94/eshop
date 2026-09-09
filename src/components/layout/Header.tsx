import { useState } from "react";
import { Link } from "react-router";
import { Navigation } from "./Navigation";
import { useAppSelector } from "@/app/hooks";
import { selectCartItemCount } from "@/features/cart/cartSelectors";
import { selectFavoriteCount } from "@/features/favorites/favoritesSelectors";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = useAppSelector(selectCartItemCount);
  const favoriteCount = useAppSelector(selectFavoriteCount);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-bold text-white shadow-sm">
            M
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Market<span className="text-brand-600">ly</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Favorites */}
          <Link
            to="/favorites"
            className="relative hidden rounded-lg p-2 text-slate-600 transition hover:bg-brand-50 hover:text-brand-600 sm:block"
            aria-label="Favorites"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
            </svg>{" "}
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
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="19" cy="20" r="1" />
              <path d="M3 4h2l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 1.95-1.57L21 8H6" />
            </svg>

            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-400 px-1 text-[10px] font-bold text-slate-900">
              {cartItemCount}
            </span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:block"
          >
            Sign in
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
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
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <Navigation mobile onNavigate={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
