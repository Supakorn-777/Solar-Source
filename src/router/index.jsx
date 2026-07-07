import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Calculator from "../pages/Calculator";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Promotions from "../pages/Promotions";
import Quote from "../pages/Quote";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "promotions",
        element: <Promotions />,
      },
      {
        path: "quote",
        element: <Quote />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "calculator",
        element: <Calculator />
      }
    ],
  },
]);

export default router;