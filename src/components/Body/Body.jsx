import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login/Login";
import About from "../About/About";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import ErrorPage from "../ErrorP/ErrorPage";
import Movies from "../Movies/Movies";
import TvShows from "../TvShows/TvShows";
import Wishlist from "../Wishlist/Wishlist";
import Browse from "../Browse/Browse";
import Search from "../Search/Search";
import Layout from "@/Layout";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

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
