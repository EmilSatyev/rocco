import React from "react";
import styles from "./Miscellaneous.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Miscellaneous = () => {
  return (
    <div className={styles.miscellaneous}>
      <div className={styles.miscellaneous__image_block}>
        <div className={styles.miscellaneous__image_wrap}>
          <div className={styles.miscellaneous__image} />
        </div>
      </div>
      <div className={styles.miscellaneous__sub_block}>
        <div className={styles.miscellaneous__sub_descr}>
          <p className={cx("text")}>
            Кроме ручек, компания РОССО предлагает широкий интересный
            ассортимент товара как для мебельных производств, так и&nbsp;для
            частных лиц.
          </p>
        </div>
        <div className={styles.miscellaneous__sub_descr}>
          <p className={cx("text")}>
            Для небольших мебельных производителей мы&nbsp;также сможем сделать
            интересные предложения на&nbsp;наш товар. Забрать его можно будет
            у&nbsp;наших представителей в&nbsp;регионах, либо, если таких нет,
            мы&nbsp;отправим товар транспортной компанией.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
