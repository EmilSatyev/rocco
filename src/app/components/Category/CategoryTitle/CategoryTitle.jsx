import React from "react";
import styles from "./CategoryTitle.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const CategoryTitle = (props) => {
  const { title, description, images_for_title } = props;
  return (
    <div className={styles.categoryTitle}>
      <div className={styles.categoryTitle__image1_block}>
        <img
          src={`/images/catalog/for_title/cat19/${images_for_title[0]}`}
          alt={title}
        />
      </div>
      <div className={styles.categoryTitle__image2_block}>
        <img
          src={`/images/catalog/for_title/cat19/${images_for_title[1]}`}
          alt={title}
        />
      </div>
      <div className={styles.categoryTitle__title_block}>
        <h2 className={cx("title", "title--h2")}>{title}</h2>
      </div>
      <div className={styles.categoryTitle__descr_block}>
        <p className={cx("text")}>{description}</p>
      </div>
    </div>
  );
};

export default CategoryTitle;
