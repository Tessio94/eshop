import { createBrowserRouter as BrowserRouter } from "react-router";
import { MainLayout } from "@/layouts/MainLayout";

import { HomePage } from "@/pages/HomePage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { CategoriesPage } from "@/pages/CategoriesPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { OrdersPage } from "@/pages/OrdersPage";
import { OrderDetailsPage } from "@/pages/OrderDetailsPage";
import { LoginPage } from "@/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import {
	categoriesLoader,
	categoryProductsLoader,
	productDetailsLoader,
	productsLoader,
	requireAuth,
	requireGuest,
} from "./loaders";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import { AuthLayout } from "@/layouts/AuthLayout";

export const router = BrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorMessage />,
		children: [
			{
				index: true,
				loader: productsLoader,
				element: <HomePage />,
			},
			{
				path: "products",
				loader: productsLoader,
				element: <ProductsPage />,
			},
			{
				path: "products/:productId",
				loader: productDetailsLoader,
				element: <ProductDetailsPage />,
			},
			{
				path: "categories",
				loader: categoriesLoader,
				element: <CategoriesPage />,
			},
			{
				path: "categories/:categoryId",
				loader: categoryProductsLoader,
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
				loader: requireAuth,
				element: <AuthLayout />,
				children: [
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
				],
			},
			{
				path: "login",
				loader: requireGuest,
				element: <LoginPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
