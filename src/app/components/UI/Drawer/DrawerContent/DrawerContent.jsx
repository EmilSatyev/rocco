import React from "react";
import SimpleBar from "simplebar-react";
import cnBind from "classnames/bind";

import styles from "./DrawerContent.module.scss";
import "simplebar-react/dist/simplebar.min.css";

import { SvgSelector } from "../../../../helpers/svgSelector";
import { AppContext } from "../../../../contextes";

const cx = cnBind.bind(styles);

const drawerNames = {
  cart: {
    title: "Ваша корзина пуста",
    desc: "Для совершения заказа добавьте понравившиеся товары в корзину через каталог.",
  },
  favorites: {
    title: "Ваш список избранных пуст",
    desc: "Добавьте понравившиеся товары в список избранных через каталог",
  },
};

const DrawerContent = ({ name, clickHandle }) => {
  return (
    <>
      <div className={styles.drawerContent__wrap}>
        <h2 className={cx("title", "title--h5", styles.drawerContent__title)}>
          <span>{name === "cart" ? "Корзина" : "Избранное"}</span>
          <button
            onClick={clickHandle}
            className={cx("btn-reset", "drawer__close")}
          >
            <SvgSelector name="close" />
          </button>
        </h2>
        <div className={styles.drawerContent__goods}>
          <SimpleBar style={{ maxHeight: "100%" }}>
            <h3
              className={cx(
                "title",
                "title--h6",
                styles.drawerContent__subtitle
              )}
            >
              {drawerNames[name].title}
            </h3>
            <p className={cx("text")}>{drawerNames[name].desc}</p>
          </SimpleBar>
        </div>
      </div>
      <button className={cx("btn", styles.drawerContent__btn)}>
        Перейти к покупкам
      </button>
    </>
  );
};

export default DrawerContent;
