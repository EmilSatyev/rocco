import React from "react";
import styles from "./Partners.module.scss";
import { SvgSelector } from "../../helpers/svgSelector";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={cx(styles.block, styles.block__title_block)}>
        <h1 className="title">Бренды партнеров</h1>
      </div>
      <div className={cx(styles.block, styles.block__partners_block)}>
        <a
          href="#"
          className={cx(styles.block__item)}
          style={{ backgroundImage: 'url("/images/partners/transformica.jpg")' }}
        />
        <a
          href="#"
          className={cx(styles.block__item)}
          style={{ backgroundImage: 'url("/images/partners/salice.jpg")' }}
        />
        <a
          href="#"
          className={cx(styles.block__item)}
          style={{ backgroundImage: 'url("/images/partners/stabilus.jpg")' }}
        />
        <a
          href="#"
          className={cx(styles.block__item)}
          style={{ backgroundImage: 'url("/images/partners/rejs.jpg")' }}
        />
        <a
          href="#"
          className={cx(styles.block__item)}
          style={{ backgroundImage: 'url("/images/partners/confurn.jpg")' }}
        />
        <a
          href="#"
          className={cx(styles.block__item)}
          style={{ backgroundImage: 'url("/images/partners/ozmf.jpg")' }}
        />
        <a href="#" className={cx(styles.block__btn, "btn", "btn--white")}>
          Все бренды
          <SvgSelector name="arrow" />
        </a>
      </div>
    </section>
  );
};

export default Partners;
