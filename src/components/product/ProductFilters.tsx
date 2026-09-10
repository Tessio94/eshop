import { Button } from "@/components/common/Button";

export type SortOption = "default" | "price-asc" | "price-desc" | "rating";

export type ProductFilterValues = {
	search: string;
	category: string;
	sort: SortOption;
};

type ProductFiltersProps = {
	filters: ProductFilterValues;
	categories?: string[];
	onSearchChange: (value: string) => void;
	onCategoryChange?: (value: string) => void;
	onSortChange: (value: SortOption) => void;
	onClear: () => void;
};

export function ProductFilters({
	filters,
	categories,
	onSearchChange,
	onCategoryChange,
	onSortChange,
	onClear,
}: ProductFiltersProps) {
	const hasFilters =
		filters.search !== "" ||
		filters.category !== "" ||
		filters.sort !== "default";

	return (
		<div className="rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5">
			<div className="flex flex-col gap-4 lg:flex-row lg:items-end">
				{/* Search */}
				<div className="flex-1">
					<label
						htmlFor="product-search"
						className="mb-2 block text-sm font-medium text-slate-700"
					>
						Search products
					</label>

					<div className="relative">
						<svg
							className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="11" cy="11" r="7" />
							<path d="m20 20-4-4" />
						</svg>

						<input
							id="product-search"
							type="search"
							value={filters.search}
							onChange={(event) => onSearchChange(event.target.value)}
							placeholder="Search products..."
							className="w-full rounded-xl border border-border bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
						/>
					</div>
				</div>

				{/* Category */}
				{categories && categories.length > 0 && onCategoryChange && (
					<div className="w-full lg:w-52">
						<label
							htmlFor="product-category"
							className="mb-2 block text-sm font-medium text-slate-700"
						>
							Category
						</label>

						<select
							id="product-category"
							value={filters.category}
							onChange={(event) => onCategoryChange(event.target.value)}
							className="w-full rounded-xl border border-border bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
						>
							<option value="">All categories</option>

							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
				)}
				{/* Sort */}
				<div className="w-full lg:w-52">
					<label
						htmlFor="product-sort"
						className="mb-2 block text-sm font-medium text-slate-700"
					>
						Sort by
					</label>

					<select
						id="product-sort"
						value={filters.sort}
						onChange={(event) => onSortChange(event.target.value as SortOption)}
						className="w-full rounded-xl border border-border bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
					>
						<option value="default">Recommended</option>
						<option value="price-asc">Price: low to high</option>
						<option value="price-desc">Price: high to low</option>
						<option value="rating">Highest rated</option>
					</select>
				</div>

				{/* Clear */}
				{hasFilters && (
					<Button variant="ghost" size="sm" onClick={onClear}>
						Clear
					</Button>
				)}
			</div>
		</div>
	);
}
