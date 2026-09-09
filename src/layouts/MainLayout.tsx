import { Outlet } from "react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function MainLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-background">
			<ScrollToTop />
			<Header />

			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
