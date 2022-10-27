import React from "react";
import styles from "./CatalogDrawerItem.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const CatalogDrawerItem = ({ catItem }) => {
  return (
    <li
      className={cx(styles.item)}
      style={{
        backgroundImage: `url("/images/catalog/preview/${catItem.image}")`,
      }}
    >
      <h5 className={cx(styles.item__subtitle)}><a href="#">{catItem.title}</a></h5>
      {catItem.sub_categories && (
        <ul className={cx(styles.item__sublist)}>
          {catItem.sub_categories.slice(0, 3).map((subCategory) => (
            <li key={subCategory.id}><a href="#">{subCategory.title}</a></li>
          ))}
          {catItem.sub_categories.length > 3 && catItem.sub_categories && (
            <li className={cx(styles.item__show_all)}><a href="#">Показать все</a></li>
          )}
        </ul>
      )}
    </li>
  );
};

export default CatalogDrawerItem;