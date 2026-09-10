const benefits = [
	{
		title: "Easy shopping",
		description: "Find what you need without unnecessary complexity.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-1.5 1.5A1 1 0 0 0 6.2 16H18m-9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
				/>
			</svg>
		),
	},
	{
		title: "Your favorites",
		description: "Save products you love and come back to them anytime.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"
				/>
			</svg>
		),
	},
	{
		title: "Simple checkout",
		description: "Build your cart and move through checkout with ease.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12l2 2 4-4m6-1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
		),
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
