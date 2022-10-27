import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Drawer from "../UI/Drawer/Drawer";
import DrawerTop from "../UI/DrawerTop/DrawerTop";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";



const PageLayout = (props) => {
  return (
    <>
      <Header />
      <Drawer />
      <DrawerTop />
      <Breadcrumbs/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
