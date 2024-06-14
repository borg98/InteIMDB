import { createBrowserRouter } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Login } from "./pages/Login";
import { MovieDetails } from "./pages/MovieDetails";
import { Movies } from "./pages/Movies";
import { Layout } from "./Layout";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/movies",
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
    ],
  },
]);
