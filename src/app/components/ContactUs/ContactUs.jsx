import React from "react";
import styles from "./ContactUs.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const ContactUs = () => {
  return (
    <section className={cx(styles.contactUs, "black-section")}>
      <div className={cx(styles.contactUs__title_block)}>
        <h2 className="title">
          Связаться
          <br /> с нами
        </h2>
      </div>
      <div className={styles.contactUs__phone_block}>
        <h6 className={styles.contactUs__subtitle}>Контакты</h6>
        <div>
          <p className={styles.contactUs__desc}>
            <span>+7(812) 380-66-86 (Санкт-Петербург)</span>
            <span>+7(495) 506-78-32 (Москва)</span>
            <span>info@rosso.su</span>
          </p>
        </div>
      </div>
      <div className={styles.contactUs__address_block}>
        <h6 className={styles.contactUs__subtitle}>Адрес</h6>
        <div>
          <p className={styles.contactUs__desc}>
            <span>г. Санкт-Петербург</span>
            <span>Полюстровский пр., д. 50</span>
            <span>Пн-Пт. С 10.00 ДО 18.00</span>
          </p>
          <p className={styles.contactUs__desc}>
            <span>г. Москва, Московская область</span>
            <span>ул. Фабричная, д.6</span>
            <span>Пн-Пт. С 10.00 ДО 18.00</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
