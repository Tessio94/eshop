import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton";

import "swiper/css";
import { Pagination } from "swiper/modules";

type ProductCarouselSkeletonProps = {
	count?: number;
};

export function ProductCarouselSkeleton({
	count = 8,
}: ProductCarouselSkeletonProps) {
	return (
		<Swiper
			modules={[Pagination]}
			spaceBetween={20}
			slidesPerView={1}
			pagination={{ clickable: false }}
			breakpoints={{
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 4,
				},
			}}
			className="pb-12!"
		>
			{Array.from({ length: count }).map((_, index) => (
				<SwiperSlide key={index} className="h-auto!">
					<ProductCardSkeleton />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
