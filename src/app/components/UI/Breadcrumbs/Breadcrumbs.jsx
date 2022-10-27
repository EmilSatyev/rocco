import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import styles from "./Breadcrumbs.module.scss";

import { Link } from "react-router-dom";
import categoriesData from "../../../assets/json/categories.json";
import pagesData from "../../../assets/json/pages.json";
import { SvgSelector } from "../../../helpers/svgSelector";

const Breadcrumbs = () => {
  const DynamicCategoryBreadcrumb = ({ match }) => {
    try {
      return categoriesData.find((cat) => cat.url === match.params.category)
        .title;
    } catch (err) {
      console.log("Ошибка. Хлебные крошки. Catalog");
    }
  };
  const DynamicProductBreadcrumb = ({ match }) => {
    const { category, product } = match.params;
    try {
      const products = categoriesData.find(
        (cat) => cat.url === category
      ).products;
      const productTitle = products.find((prod) => prod.url === product).title;
      console.log(productTitle);

      return productTitle;
    } catch (err) {
      console.log("Ошибка. Хлебные крошки. Product");
    }
  };
  const routes = [
    ...pagesData.map((page) => {
      return {
        path: page.url,
        breadcrumb: page.title,
      };
    }),
    { path: "/catalog/:category", breadcrumb: DynamicCategoryBreadcrumb },
    {
      path: "/catalog/:category/:product",
      breadcrumb: DynamicProductBreadcrumb,
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.slice(0, -1).map(({ match, breadcrumb }) => (
        <span key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
          <SvgSelector name="angle-right" />
        </span>
      ))}
      {breadcrumbs.slice(-1).map(({ breadcrumb }) => (
        <span key={breadcrumb}>{breadcrumb}</span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
