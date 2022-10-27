import React from "react";
import styles from "./Product.module.scss";
import cnBind from "classnames/bind";
import { useParams } from "react-router-dom";

const cx = cnBind.bind(styles);

const Product = () => {
  const { product } = useParams();

  return <div className={styles.product}>{product}</div>;
};

export default Product;
