import React from 'react';
import styles from './CategoryProducts.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);


const CategoryProducts = () => {
  return (
    <div className={styles.categoryProducts}>CategoryProducts</div>
  );
};

export default CategoryProducts;