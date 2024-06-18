import { createBrowserRouter } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { MovieDetails } from "./pages/MovieDetails";
import { Movies } from "./pages/Movies";
import { Layout } from "./Layout";
import { Contact } from "./pages/Contact";
import { Order } from "./pages/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Movies />,
        index: true,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/#/order",
        element: <Order />,
      },
    ],
  },
]);
