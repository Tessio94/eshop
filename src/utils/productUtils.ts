import type { Product } from "@/types/product";
import type { ProductFilterValues } from "@/features/products/productFiltersSlice";

export function filterAndSortProducts(
	products: Product[],
	filters: ProductFilterValues,
): Product[] {
	const search = filters.search.trim().toLowerCase();

	return products
		.filter((product) => {
			const matchesSearch =
				search === "" || product.title.toLowerCase().includes(search);

			const matchesCategory =
				filters.category === "" || product.category === filters.category;

			return matchesSearch && matchesCategory;
		})
		.sort((a, b) => {
			switch (filters.sort) {
				case "price-asc":
					return a.price - b.price;

				case "price-desc":
					return b.price - a.price;

				case "rating":
					return b.rating.rate - a.rating.rate;

				default:
					return 0;
			}
		});
}

export function formatCategoryName(category: string): string {
	return category.charAt(0).toUpperCase() + category.slice(1);
}
