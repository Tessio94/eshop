import { Button } from "@/components/common/Button";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) {
		return null;
	}

	return (
		<div className="mt-8 flex items-center justify-center gap-2">
			<Button
				variant="secondary"
				size="sm"
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Previous
			</Button>

			{Array.from({ length: totalPages }, (_, index) => {
				const page = index + 1;

				return (
					<Button
						key={page}
						variant={currentPage === page ? "primary" : "secondary"}
						size="icon"
						onClick={() => onPageChange(page)}
						aria-label={`Go to page ${page}`}
						aria-current={currentPage === page ? "page" : undefined}
					>
						{page}
					</Button>
				);
			})}

			<Button
				variant="secondary"
				size="sm"
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</Button>
		</div>
	);
}
