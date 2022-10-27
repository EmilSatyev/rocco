import React from "react";
import styles from "./Slider.module.scss";
import cnBind from "classnames/bind";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css";
import { SvgSelector } from "../../helpers/svgSelector";

import slide1 from '../../assets/images/slider/slider1.jpg'
import slide2 from '../../assets/images/slider/slider2.jpg'

const cx = cnBind.bind(styles);

const slidesData = [
  {
    title: "Универсальная алюминевая каркасная система",
    desc: "В\xa0нашем интернет-магазине предлагается под заказ алюминиевая система полок различной геометрии, которая позволит создать легкие, невесомые, но\xa0в\xa0тоже время прочные конструкции, способные сэкономить пространство, придать помещению эффектный дизайнерский вид.",
    imgUrl: slide1,
    isNew: true,
  },
  {
    title: "Мебельные ручки",
    desc: "Мы\xa0стали специалистами в\xa0поставках одного из\xa0самых сложных\xa0и, в\xa0то\xa0же время, самых красивых направлений фурнитуры для мебели\xa0 лицевой фурнитуры, а\xa0точнее\xa0 мебельных ручек.",
    imgUrl: slide2,
    isNew: false,
  },
];

const Slider = () => {
  const [prevEl, setPrevEl] = React.useState(null);
  const [nextEl, setNextEl] = React.useState(null);
  const [slideIndex, setSlideIndex] = React.useState(1);

  return (
    <section className={cx(styles.slider, "black-section")}>
      <div className={styles.slider__title_block}>
        <h5 className={cx("title", "title--h5")}>
          {slidesData[slideIndex-1].title}
        </h5>
      </div>
      <div className={styles.slider__descr_block}>
        <p className={cx("text")}>
          {slidesData[slideIndex-1].desc}
        </p>
      </div>
      <div className={styles.slider__image_block}>
        <Swiper
          navigation={{ prevEl, nextEl }}
          modules={[Navigation]}
          slidesPerView={1}
          onActiveIndexChange={({ realIndex }) => {
            setSlideIndex(realIndex + 1);
          }}
        >
          {slidesData.map((item) => (
            <SwiperSlide key={item.title}>
              <div
                className={styles.slider__image}
                style={{ backgroundImage: `url('${item.imgUrl}')` }}
              >
                {item.isNew && (
                  <span className={styles.slider__new}>NEW</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.slider__controls_block}>
        <div className={cx(styles.slider__count)}>
          {slideIndex}/{slidesData.length}
        </div>
        <div className={styles.slider__controls}>
          <button
            ref={(node) => setPrevEl(node)}
            className={cx(styles.slider__prev)}
          >
            <SvgSelector name="angle-right" />
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className={cx(styles.slider__next)}
          >
            <SvgSelector name="angle-right" />
          </button>
        </div>
      </div>
      <a href="#" className={cx(styles.slider__btn, "btn")}>
        В каталог
        <SvgSelector name="angle-right" />
      </a>
    </section>
  );
};

export default Slider;