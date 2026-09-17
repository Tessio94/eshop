import { CategoryCardSkeleton } from "@/components/category/CategoryCardSkeleton";

type CategoryGridSkeletonProps = {
	count?: number;
};

export function CategoryGridSkeleton({ count = 4 }: CategoryGridSkeletonProps) {
	return (
		<div
			aria-busy="true"
			className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
		>
			{Array.from({ length: count }).map((_, index) => (
				<CategoryCardSkeleton key={index} />
			))}
		</div>
	);
}
