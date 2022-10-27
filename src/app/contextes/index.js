import React from "react";
import { useLocation } from "react-router-dom";

export const AppContext = React.createContext(null);
export const AppProvider = ({ children }) => {
  const [rightDrawerData, setRightDrawerData] = React.useState({
    isOpen: false,
    name: "cart",
  });
  const [topDrawerData, setTopDrawerData] = React.useState({
    isOpen: false,
    name: "",
  });

  React.useEffect(() => {
    rightDrawerData.isOpen || topDrawerData.isOpen
      ? document.body.classList.add("fix-scroll")
      : document.body.classList.remove("fix-scroll");
  }, [rightDrawerData, topDrawerData]);
  const location = useLocation();

  React.useEffect(() => {
    setRightDrawerData({ ...rightDrawerData, isOpen: false });
    setTopDrawerData({ ...topDrawerData, isOpen: false });
  }, [location]);
  const openDrawer = (drawer, direction) => {
    let drawerData = rightDrawerData;
    let setDrawerData = setRightDrawerData;

    if (direction === "top") {
      drawerData = topDrawerData;
      setDrawerData = setTopDrawerData;
      setRightDrawerData({ ...rightDrawerData, isOpen: false });
    } else {
      setTopDrawerData({ ...topDrawerData, isOpen: false });
    }

    if (!drawerData.name || drawerData.name === drawer) {
      setDrawerData({ name: drawer, isOpen: !drawerData.isOpen });
    } else if (drawerData.isOpen) {
      setDrawerData({ ...drawerData, isOpen: false });
      setTimeout(() => {
        setDrawerData({ name: drawer, isOpen: true });
      }, 300);
    } else {
      setDrawerData({ name: drawer, isOpen: true });
    }
  };
  const openTopDrawer = (drawer) => {
    if (!topDrawerData.name || topDrawerData.name === drawer) {
      setTopDrawerData({ name: drawer, isOpen: !topDrawerData.isOpen });
    } else if (topDrawerData.isOpen) {
      setTopDrawerData({ ...topDrawerData, isOpen: false });
      setTimeout(() => {
        setTopDrawerData({ name: drawer, isOpen: true });
      }, 1000);
    } else {
      setTopDrawerData({ name: drawer, isOpen: true });
    }
  };

  const value = {
    openDrawer,
    openTopDrawer,
    rightDrawerData,
    topDrawerData,
    setTopDrawerData,
    setRightDrawerData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
