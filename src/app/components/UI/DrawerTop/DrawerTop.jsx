import React from "react";
import styles from "./DrawerTop.module.scss";
import { AppContext } from "../../../contextes";

import cnBind from "classnames/bind";
import SimpleBar from "simplebar-react";
import Cities from "./DrawerTopContent/Cities";
import CatalogDrawer from "./DrawerTopContent/CatalogDrawer/CatalogDrawer";

const cx = cnBind.bind(styles);

const DrawerTop = () => {
  const { topDrawerData, setTopDrawerData } = React.useContext(AppContext);
  const { isOpen, name } = topDrawerData;

  const clickHandle = (e) => {
    if (e.target.className === styles.drawer_top__overlay) {
      setTopDrawerData({ ...topDrawerData, isOpen: false });
    }
  };

  return (
    <div className={cx(styles.drawer_top, { open: topDrawerData.isOpen })}>
      <div onClick={clickHandle} className={styles.drawer_top__overlay}>
        <div className={styles.drawer_top__content}>
          <SimpleBar style={{ maxHeight: "calc(100vh - 123px)" }}>
            {name === "cities" ? (
              <Cities />
            ) : name === "catalog" ? (
              <CatalogDrawer />
            ) : (
              <h1>нет</h1>
            )}
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default DrawerTop;
