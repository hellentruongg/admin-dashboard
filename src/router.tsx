import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/HomePage";
import Users from "./pages/users/UsersPage";
import Products from "./pages/products/ProductsPage";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
