import React from "react";
import cnBind from "classnames/bind";
import styles from "./CatalogDrawer.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CatalogDrawerItem from "./CatalogDrawerItem/CatalogDrawerItem";
import Skeleton from "../../../Skeleton/Skeleton";

const cx = cnBind.bind(styles);
const CatalogDrawer = () => {
  const { catalog, status } = useSelector((state) => state.catalog);

  return (
    <div className={styles.catalogDrawer}>
      <div className={cx(styles.catalogDrawer__head)}>
        <Link
          to="catalog/door_handlers"
          className={cx("btn", "btn--white", styles.catalogDrawer__btn)}
        >
          Ручки мебельные
        </Link>
        <button className={cx("btn", "btn--white", styles.catalogDrawer__btn)}>
          Фасады мебельные
        </button>
      </div>
      <ul className={cx(styles.catalogDrawer__list)}>
        {status === "loading"
          ? [...new Array(4)].map((_, i) => <li><Skeleton key={i} /></li>)
          : catalog
              .slice(2)
              .map((catItem) => (
                <CatalogDrawerItem key={catItem.id} catItem={catItem} />
              ))}
      </ul>
    </div>
  );
};

export default CatalogDrawer;
