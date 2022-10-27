import React from "react";
import styles from "./HistoryBlock.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const HistoryBlock = () => {
  return (
    <section className={styles.history}>
      <div className={styles.history__title_block}>
        <h2 className={cx("title", "title--h2", styles.history__title)}>
          История компании
        </h2>
      </div>
      <div className={styles.history__descr_block}>
        <div className={styles.history__descr}>
          <p className={cx("text")}>
            Компания РОССО была создана в&nbsp;январе 1998&nbsp;года, как
            поставщик качественной мебельной фурнитуры и&nbsp;комплектующих для
            мебельных производств Санкт-Петербурга, а&nbsp;с&nbsp;1999
            года&nbsp;&mdash; и&nbsp;Москвы. Мы&nbsp;с&nbsp;самого начала взяли
            за&nbsp;правило поставлять такой товар, который не&nbsp;только
            требовался&nbsp;бы мебельщикам и&nbsp;был для них выгодным,
            но&nbsp;ещё и&nbsp;нравился&nbsp;бы нам самим.
          </p>
          <p className={cx("text")}>
            В&nbsp;итоге мы&nbsp;отобрали для своей складской программы
            несколько известных европейских брендов с&nbsp;наилучшим
            соотношением цены и качества. Среди них: STABILUS, FRANKE, TEKA
            (Германия), METAKOR (Бельгия), FGV, GIUSTI, BOSETTI-MARELLA, EKOTECH
            (Италия), GAMET, NOMET, REJS, KORNER (Польша), LINCOS (Россия),
            и&nbsp;другие.
          </p>
        </div>
      </div>
      <div className={styles.history__image_block}>
        <div className={styles.history__image} />
      </div>
      <div className={styles.history__sub_block}>
        <div className={styles.history__sub_descr}>
          <p className={cx("text")}>
            Ежегодно, начиная с&nbsp;1999&nbsp;года, компания принимает участие
            в&nbsp;главной мебельной выставке России &laquo;Мебель&raquo;.
            Неоднократно принимала участие в&nbsp;важнейших региональных
            выставках. Сотрудники компании регулярно посещают международные
            выставки.
          </p>
        </div>
        <div className={styles.history__sub_descr}>
          <p className={cx("text")}>
            Благодаря этому и&nbsp;постоянному общению с&nbsp;клиентами
            из&nbsp;разных регионов нам удаётся быть в&nbsp;курсе основных
            мебельных тенденций и&nbsp;потребностей клиентов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoryBlock;
