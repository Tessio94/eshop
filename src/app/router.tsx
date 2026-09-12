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
} from "./loaders";

export const router = BrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
