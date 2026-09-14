import { BiHeart } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";

const benefits = [
	{
		title: "Easy shopping",
		description: "Find what you need without unnecessary complexity.",
		icon: <CgShoppingCart className="text-2xl" />,
	},
	{
		title: "Your favorites",
		description: "Save products you love and come back to them anytime.",
		icon: <BiHeart className="text-2xl" />,
	},
	{
		title: "Simple checkout",
		description: "Build your cart and move through checkout with ease.",
		icon: <IoBagCheckOutline className="text-2xl" />,
	},
];

export function ShoppingBenefits() {
	return (
		<section className="mt-16 border-y border-border bg-white py-10 px-6">
			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{benefits.map((benefit) => (
					<div key={benefit.title} className="flex gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
							{benefit.icon}
						</div>

						<div>
							<h3 className="font-bold text-slate-900">{benefit.title}</h3>

							<p className="mt-1 text-sm leading-6 text-slate-500">
								{benefit.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
