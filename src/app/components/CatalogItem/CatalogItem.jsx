import React from "react";
import styles from "./CatalogItem.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const CatalogItem = ({ catalogItemObj }) => {
  const { title, image, sub_categories } = catalogItemObj;
  return (
    <div className={styles.catalogItem}>
      <div
        className={styles.catalogItem__img}
        style={{
          backgroundImage: `url("/images/catalog/full/${image}")`,
        }}
      />
      <div className={styles.catalogItem__info}>
        <h6 className={cx("title", "title--h6", styles.catalogItem__title)}>
          {title}
        </h6>
        {sub_categories && (
          <ul className={styles.catalogItem__list}>
            {sub_categories.slice(0, 3).map((sub_category) => (
              <li key={sub_category.id}><a href="#">{sub_category.title}</a></li>
            ))}
            {sub_categories.length > 3 && <li className={styles.catalogItem__show_all}><a href="#">Показать все</a></li>}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
