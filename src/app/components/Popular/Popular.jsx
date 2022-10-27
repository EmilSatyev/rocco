import React from 'react';
import styles from './Popular.module.scss'
import cnBind from "classnames/bind";

import categoryImg1 from "../../assets/images/categories/furniture-handles.png";
import categoryImg2 from "../../assets/images/categories/facades-furniture.png";
import categoryImg3 from "../../assets/images/categories/facade-profiles.png";
import categoryImg4 from "../../assets/images/categories/drawers.png";
import {SvgSelector} from "../../helpers/svgSelector";

const cx = cnBind.bind(styles);
const popularCategories = [
  {
    id: 1,
    name: "Ручки мебельные",
    imageUrl: categoryImg1,
  },
  {
    id: 2,
    name: "Фасады мебельные",
    imageUrl: categoryImg2,
  },
  {
    id: 3,
    name: "Профили фасадные",
    imageUrl: categoryImg3,
  },
  {
    id: 4,
    name: "Выдвижные ящики",
    imageUrl: categoryImg4,
  },
];

const Popular = () => {
  return (
    <section className={styles.popular}>
      <div className={cx(styles.block, styles.block__title)}>
        <h2 className={cx('title')}>Популярные категории</h2>
      </div>
      {
        popularCategories.map(category => <div key={category.id} className={cx(styles.block, styles.block__item)}>
          <img src={category.imageUrl} alt={category.name}/>
          <h5 className={cx("title", "title--h5")}><a href="#">{category.name}</a></h5>
        </div>)
      }
      <a href="#" className={cx(styles.block,styles.block__btn, 'btn', 'btn--white')}>Все категории <SvgSelector name='arrow'/></a>
    </section>
  );
};

export default Popular;