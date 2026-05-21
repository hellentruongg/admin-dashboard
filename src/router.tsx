import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/login/Login";

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
