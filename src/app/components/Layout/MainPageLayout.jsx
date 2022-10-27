import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Drawer from "../UI/Drawer/Drawer";
import DrawerTop from "../UI/DrawerTop/DrawerTop";
import Footer from "../Footer/Footer";

const MainPageLayout = (props) => {
  return (
    <>
      <Header />
      <Drawer />
      <DrawerTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainPageLayout;
