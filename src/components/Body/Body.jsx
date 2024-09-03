import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login/Login";
import About from "../About/About";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import ErrorPage from "../ErrorP/ErrorPage";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
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
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);
