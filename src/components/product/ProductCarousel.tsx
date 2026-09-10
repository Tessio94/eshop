import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types/product";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProductCarouselProps = {
	products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={20}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
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
			className="!pb-12"
		>
			{products.map((product) => (
				<SwiperSlide key={product.id} className="!h-auto">
					<ProductCard product={product} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
