import { cn } from "@/utils/cn";
import { NavLink } from "react-router";

interface NavigationProps {
	mobile?: boolean;
	onClick?: () => void;
}

export function Navigation({ mobile = false, onClick }: NavigationProps) {
	const links = [
		{ to: "/", label: "Home", end: true },
		{ to: "/products", label: "Products" },
		{ to: "/categories", label: "Categories" },
		{ to: "/favorites", label: "Favorites" },
	];

	return (
		<nav className={mobile ? "flex flex-col gap-1" : "flex items-center gap-1"}>
			{links.map((link) => (
				<NavLink
					key={link.to}
					to={link.to}
					end={link.end}
					onClick={onClick}
					className={({ isActive }) =>
						cn(
							"rounded-lg px-4 py-2 text-base font-medium transition",
							mobile && "w-full",
							isActive
								? "bg-brand-50 text-brand-700"
								: "text-slate-600 hover:bg-slate-50 hover:text-brand-600",
						)
					}
				>
					{link.label}
				</NavLink>
			))}
		</nav>
	);
}
