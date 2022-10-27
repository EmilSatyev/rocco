import React from "react";
import styles from "./Sort.module.scss";
import cnBind from "classnames/bind";
import { SvgSelector } from "../../../helpers/svgSelector";
import RangeSlider from "./RangeSlider/RangeSlider";

const cx = cnBind.bind(styles);

const Sort = () => {
  return (
    <div className={styles.sort}>
      <div className={styles.sort__header}>
        <h6 className={cx("sub-title")}>Фильтры</h6>
        <button className={styles.sort__btn}>Очистить все</button>
      </div>
      <div className={styles.sort__type}>
        <div className={styles.sort__header}>
          <h6 className={cx("sub-title")}>Цвет</h6>
          <button>
            <SvgSelector name="angle-right" />
          </button>
        </div>
        <ul className={styles.sort__list}>
          <li>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              Аллюминий
            </label>
            <span>112</span>
          </li>
        </ul>
        <button className={styles.sort__btn}>Показать все</button>
      </div>
      <div className={styles.sort__type}>
        <div className={styles.sort__header}>
          <h6 className={cx("sub-title")}>Производитель</h6>
          <button>
            <SvgSelector name="angle-right" />
          </button>
        </div>
        <ul className={styles.sort__list}>
          <li>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              Gamet
            </label>
            <span>112</span>
          </li>
        </ul>
        <button className={styles.sort__btn}>Показать все</button>
      </div>
      <div className={styles.sort__type}>
        <div className={styles.sort__header}>
          <h6 className={cx("sub-title")}>Тип</h6>
          <button>
            <SvgSelector name="angle-right" />
          </button>
        </div>
        <ul className={styles.sort__list}>
          <li>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              Gamet
            </label>
            <span>112</span>
          </li>
        </ul>
      </div>
      <div className={styles.sort__type}>
        <h6 className={cx("sub-title")}>Цена</h6>
        <RangeSlider />
      </div>
      <div className={styles.sort__type}>
        <div className={styles.sort__header}>
          <h6 className={cx("sub-title")}>Присадочный размер</h6>
          <button>
            <SvgSelector name="angle-right" />
          </button>
        </div>
        <ul className={styles.sort__list}>
          <li>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              32
            </label>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              32
            </label>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              32
            </label>
            <label htmlFor="color">
              <input type="checkbox" id="color" />
              32
            </label>
          </li>
        </ul>
        <button className={styles.sort__btn}>Показать все</button>
      </div>
    </div>
  );
};

export default Sort;
