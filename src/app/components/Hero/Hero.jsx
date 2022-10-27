import React from 'react';
import styles from './Hero.module.scss'
import cnBind from "classnames/bind";
import {SvgSelector} from "../../helpers/svgSelector";
import { Link } from "react-router-dom";


const cx = cnBind.bind(styles);



const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image_block}/>
      <div className={styles.hero__title_block}>
        <h2 className={cx('title')}>Поставщик качественной мебельной фурнитуры</h2>
      </div>
      <div className={styles.hero__descr_block}>
        <p className={cx('text')}>Мы стали специалистами в поставках одного из самых сложных и, в то же время, самых красивых направлений
          фурнитуры для мебели – лицевой фурнитуры, а точнее – мебельных ручек.</p>
      </div>
      <div className={styles.hero__empty_block1}/>
      <div className={styles.hero__empty_block2}/>
      <Link to='/catalog' className={cx('btn', styles.hero__btn)}>
        В каталог
        <SvgSelector name="arrow"/>
      </Link>
    </section>
  );
};

export default Hero;