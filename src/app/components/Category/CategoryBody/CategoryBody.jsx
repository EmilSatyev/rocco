import React from 'react';
import styles from './CategoryBody.module.scss'
import Sort from "../Sort/Sort";
import CategoryProducts from "../CategoryProducts/CategoryProducts";

const CategoryBody = () => {
  return (
    <div className={styles.categoryBody}>
      <Sort/>
      <CategoryProducts/>
    </div>
  );
};

export default CategoryBody;