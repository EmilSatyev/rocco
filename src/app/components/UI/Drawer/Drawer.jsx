import React from "react";
import styles from "./Drawer.module.scss";
import { AppContext } from "../../../contextes";

import cnBind from "classnames/bind";
import DrawerContent from "./DrawerContent/DrawerContent";
import {SvgSelector} from "../../../helpers/svgSelector";

const cx = cnBind.bind(styles);

const Drawer = () => {
  const { rightDrawerData, setRightDrawerData } = React.useContext(AppContext);
  const { isOpen, name } = rightDrawerData;
  const clickHandle = (e) => {
    e.stopPropagation();
    if (
      e.target.className === styles.drawer__overlay ||
      e.currentTarget.classList.contains("drawer__close")
    ) {
      setRightDrawerData({ ...rightDrawerData, isOpen: false });
    }
  };

  return (
    <div className={cx(styles.drawer, { open: isOpen })}>
      <div onClick={clickHandle} className={styles.drawer__overlay}>
        <div className={styles.drawer__content}>
          <DrawerContent name={name} clickHandle={clickHandle} />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
