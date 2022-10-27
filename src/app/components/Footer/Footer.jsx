import React from "react";
import styles from "./Footer.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Footer = () => {
  return (
    <footer className={cx(styles.footer, "black-section")}>
      <div className={styles.footer__nav}>
        <div>
          <h5 className={styles.footer__subtitle}>Каталог</h5>
          <ul>
            <li className={styles.footer__item}>
              <a href="#">Ручки мебельные</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Фасады мебельные</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Новинки</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Распродажа</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.footer__subtitle}>Покупателю</h5>
          <ul>
            <li className={styles.footer__item}>
              <a href="#">Доставка</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Возврат / обмен</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Гарантии</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Договор оферты</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.footer__subtitle}>Компания</h5>
          <ul>
            <li className={styles.footer__item}>
              О <a href="#">нас</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Парнеры</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Новости</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Дипломы / сертификаты</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.footer__subtitle}>Мы принимаем</h5>
          <ul>
            <li className={styles.footer__item}>
              <a href="#">Mastercard</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Visa</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">JСВ</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">МИР</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.footer__subtitle}>Социальные сети</h5>
          <ul>
            <li className={styles.footer__item}>
              <a href="#">Instagram</a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">Вконтакте</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>
          2011-2020 © РОССО - комплектующие и фурнитура для мебели высокого
          качества.
        </span>
        <span><a href="#">Политика конфиденциальности</a></span>
      </div>
    </footer>
  );
};

export default Footer;
