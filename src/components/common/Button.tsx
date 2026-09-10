import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-brand-600 text-white hover:bg-brand-700 disabled:hover:bg-brand-600",
	secondary:
		"border border-border bg-white text-slate-700 hover:bg-slate-50 disabled:hover:bg-white",
	ghost:
		"text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:hover:bg-transparent",
	danger: "bg-red-600 text-white hover:bg-red-700 disabled:hover:bg-red-600",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-3 pt-2 pb-1.5 text-sm",
	md: "px-4 pt-2.5 pb-2 text-sm",
	lg: "px-6 pt-3 pb-2.5",
	icon: "h-9 w-9 p-0",
};

export function Button({
	variant = "primary",
	size = "md",
	className,
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"inline-flex items-center justify-center rounded-lg font-semibold shadow-sm transition disabled:cursor-not-allowed! disabled:opacity-50",
				variantClasses[variant],
				sizeClasses[size],
				className,
			)}
			{...props}
		/>
	);
}
