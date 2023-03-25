import React from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.wrapper__item}>
          <img
            className={styles.image}
            alt="Slider trang chu 1"
            title="Slider trang chu 1"
            src="https://cdn.lep.vn/2022/10/images/banners/1669012145337-cover-pc-(2).jpeg"
          />
        </h3>
      </div>
      <div className={styles.item}>
        <h3 className={styles.wrapper__item}>
          <img
            className={styles.image}
            alt="Slider trang chu 1"
            title="Slider trang chu 1"
            src="https://cdn.lep.vn/2022/10/images/banners/1669012126430-1667911961628-COVER---PC-1.jpeg"
          />
        </h3>
      </div>
    </Slider>
  );
};

export default SliderBanner;
