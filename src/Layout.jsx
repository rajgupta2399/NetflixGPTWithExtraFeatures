import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./components/Header/Headers";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
