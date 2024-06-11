import { createBrowserRouter } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Login } from "./pages/Login";
import { MovieDetails } from "./pages/MovieDetails";
import { Movies } from "./pages/Movies";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
        index: true,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
