import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "../Login/Login";
import About from "../About/About";
import ErrorPage from "../ErrorP/ErrorPage";
import Movies from "../Movies/Movies";
import TvShows from "../TvShows/TvShows";
import Wishlist from "../Wishlist/Wishlist";
import Browse from "../Browse/Browse";
import Search from "../Search/Search";
import Layout from "@/Layout";

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "Movies",
        element: <Movies />,
      },
      {
        path: "TvShows",
        element: <TvShows />,
      },
      {
        path: "Wishlist",
        element: <Wishlist />,
      },
      {
        path: "Search",
        element: <Search />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      },
    ],
  },
]);
