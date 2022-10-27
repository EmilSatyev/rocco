import React from "react";
import styles from "./Catalog.module.scss";
import catalogData from "../../assets/json/categories.json";
import cnBind from "classnames/bind";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import {SvgSelector} from "../../helpers/svgSelector";

const cx = cnBind.bind(styles);

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      {catalogData
        .sort((a, b) => a.sort_for_catalog - b.sort_for_catalog)
        .map((cat) => (
          <CatalogItem key={cat.id} catalogItemObj={cat}/>
          /*<div className={styles.catalog__block}>
            <div className={styles.catalog__item}>
              <div
                className={styles.catalog__img}
                style={{
                  backgroundImage: `url("images/catalog/full/${cat.image}")`,
                }}
              />
              <div className={styles.catalog__info}>
                <h6 className={cx("title", "title--h6")}>{cat.title}</h6>
                {cat.sub_categories && (
                  <ul>
                    {cat.sub_categories.slice(0, 3).map((sub) => (
                      <li>cat19</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>*/
        ))}
      <div className={styles.catalog__btns}>
        <a href="#" className={cx('btn')}>Новинки<SvgSelector name="arrow"/></a>
        <a href="#" className={cx('btn')}>Распродажа<SvgSelector name="arrow"/></a>
      </div>
    </div>
  );
};

export default Catalog;
