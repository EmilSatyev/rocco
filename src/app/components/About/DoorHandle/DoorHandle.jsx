import React from "react";
import styles from "./DoorHandle.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const DoorHandle = () => {
  return (
    <section className={cx(styles.doorHandle, "black-section")}>
      <div className={styles.doorHandle__image_block} />
      <div className={styles.doorHandle__title_block}>
        <h2 className={cx("title", "title--h2")}>Мебельные ручки</h2>
      </div>
      <div className={styles.doorHandle__descr_block}>
        <p className={cx("text")}>
          За&nbsp;прошедшие годы компания РОССО, конечно, менялась,
          но&nbsp;осталась верна своим принципам: поставлять только качественный
          товар, выбирая тот, который нравится. География поставок постоянно
          расширяется. Нас знают во&nbsp;всех регионах России как надёжного
          поставщика и&nbsp;партнера. Компания даёт хорошую гарантию на&nbsp;всю
          поставляемую продукцию.
        </p>
        <p className={cx("text")}>
          Мы&nbsp;стали специалистами в&nbsp;поставках одного из&nbsp;самых
          сложных&nbsp;и, в&nbsp;то&nbsp;же время, самых красивых направлений
          фурнитуры для мебели&nbsp;&mdash; лицевой фурнитуры,
          а&nbsp;точнее&nbsp;&mdash; мебельных ручек.
        </p>
      </div>
      <ul className={styles.doorHandle__advantages_block}>
        <li>
          <h5 className={cx("title", "title--h5")}>
            /1 Складская программа ручек
          </h5>
          <p className={cx("text")}>
            Компания РОССО смогла создать складскую программу ручек, очень
            интересную для дизайнеров мебели, поскольку в&nbsp;этой коллекции
            можно увидеть не&nbsp;только традиционные ручки классического или
            современного стиля, в&nbsp;покрытии, например, бронза или хром,
            но&nbsp;и&nbsp;ручки для новейших, модных направлений кухонной
            и&nbsp;другой мебели, с&nbsp;необычными цветами и&nbsp;фактурами
            покрытий: олово, чугун, медь, графит и&nbsp;т.д.
          </p>
        </li>
        <li>
          <h5 className={cx("title", "title--h5")}>
            /2 Профессиональная помощь
          </h5>
          <p className={cx("text")}>
            Не&nbsp;случайно нашими клиентами за&nbsp;последние годы работы
            стали большинство самых крупных мебельных фабрик России. Этого
            удалось добиться, в&nbsp;том числе, и&nbsp;потому, что
            мы&nbsp;и&nbsp;наши зарубежные поставщики профессионально помогаем
            в&nbsp;подборе ручек и&nbsp;обеспечиваем максимально быструю
            поставку необходимого количества образцов.
          </p>
        </li>
        <li>
          <h5 className={cx("title", "title--h5")}>/3 Эргономичный дизайн</h5>
          <p className={cx("text")}>
            С&nbsp;другой стороны, наши ручки придутся по&nbsp;душе и&nbsp;будут
            долго служить покупателям мебели благодаря качеству покрытий
            и&nbsp;своему прекрасному, эргономичному дизайну, в&nbsp;котором
            продумана каждая мелочь, например&nbsp;&mdash; удобный захват,
            отсутствие каких-либо неудобных для пальцев рук швов, острых граней,
            пустот и&nbsp;т.д.; все ручки сделаны для радости пользования
            мебелью.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default DoorHandle;
