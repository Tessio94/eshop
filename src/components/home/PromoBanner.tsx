import { Link } from "react-router";
import bannerImage from "@/assets/banner-image.avif";

export function PromoBanner() {
	return (
		<section className="mt-16 overflow-hidden rounded-3xl bg-brand-700 shadow-xl">
			<div className="grid min-h-[360px] md:grid-cols-2">
				<div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">
					<span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-400">
						Member favorites
					</span>

					<h2 className="mt-4 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Good products. Better choices.
					</h2>

					<p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
						Discover products picked by our community and find something that
						fits your everyday life.
					</p>

					<div className="mt-7">
						<Link
							to="/products"
							className="inline-flex rounded-xl bg-accent-400 px-5 pt-3 pb-2.5 font-bold text-slate-900 transition hover:bg-accent-300"
						>
							Explore products
						</Link>
					</div>
				</div>

				<div className="relative min-h-[300px] overflow-hidden">
					<img
						src={bannerImage}
						alt="Customer browsing a fashion collection"
						className="absolute inset-0 h-full w-full object-cover object-[0%_30%]"
						loading="lazy"
					/>

					<div className="absolute inset-0 bg-brand-900/20" />
				</div>
			</div>
		</section>
	);
}
