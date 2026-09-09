import { createBrowserRouter as BrowserRouter } from "react-router";
import { MainLayout } from "@/layouts/MainLayout";

import { HomePage } from "@/pages/HomePage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { Categories } from "@/pages/Categories";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { OrdersPage } from "@/pages/OrdersPage";
import { OrderDetailsPage } from "@/pages/OrderDetailsPage";
import { LoginPage } from "@/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = BrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
			{
				path: "products/:productId",
				element: <ProductDetailsPage />,
			},
			{
				path: "categories",
				element: <Categories />,
			},
			{
				path: "categories/:categoryId",
				element: <CategoryPage />,
			},
			{
				path: "favorites",
				element: <FavoritesPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
			{
				path: "checkout",
				element: <CheckoutPage />,
			},
			{
				path: "orders",
				element: <OrdersPage />,
			},
			{
				path: "orders/:orderId",
				element: <OrderDetailsPage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
