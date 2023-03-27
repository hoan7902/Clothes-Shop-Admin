import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner: React.FC = () => {

  const isMobile = useMediaQuery("(max-width: 600px)");

  const settings: Settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: `${styles['slick-dots']}`,
    className: `${styles.slider}`,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // touchMove:true,
  };

  return (
      !isMobile ?   
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
                alt="Slider trang chu 2"
                title="Slider trang chu 2"
                src="https://cdn.lep.vn/2022/10/images/banners/1669012126430-1667911961628-COVER---PC-1.jpeg"
              />
            </h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.wrapper__item}>
              <img
                className={styles.image}
                alt="Slider trang chu 3"
                title="Slider trang chu 3"
                src="https://cdn.lep.vn/2022/10/images/banners/1669012120989-1667911924387-pp.jpeg"
              />
            </h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.wrapper__item}>
              <img
                className={styles.image}
                alt="Slider trang chu 4"
                title="Slider trang chu 4"
                src="https://cdn.lep.vn/2022/10/images/banners/1669012108849-1667911933660-p.jpeg"
              />
            </h3>
          </div>
      </Slider> :
      //ON MOBILE
      <Slider {...settings} className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.wrapper__item}>
          <img
            className={styles.image}
            alt="Slider trang chu 1"
            title="Slider trang chu 1"
            src="https://cdn.lep.vn/2022/10/images/banners/1669012148827-COVER-MOBILE-(1).jpeg"
          />
        </h3>
      </div>
      <div className={styles.item}>
        <h3 className={styles.wrapper__item}>
          <img
            className={styles.image}
            alt="Slider trang chu 2"
            title="Slider trang chu 2"
            src="https://cdn.lep.vn/2022/10/images/banners/1669012132047-1667911964830-COVER-MOBILE-1.jpeg"
          />
        </h3>
      </div>
      <div className={styles.item}>
        <h3 className={styles.wrapper__item}>
          <img
            className={styles.image}
            alt="Slider trang chu 3"
            title="Slider trang chu 3"
            src="https://cdn.lep.vn/2022/10/images/banners/1669012123326-1667911927382-ppp.jpeg"
          />
        </h3>
      </div>
      <div className={styles.item}>
        <h3 className={styles.wrapper__item}>
          <img
            className={styles.image}
            alt="Slider trang chu 4"
            title="Slider trang chu 4"
            src="https://cdn.lep.vn/2022/10/images/banners/1669012111241-1667911936656-p1.jpeg"
          />
        </h3>
      </div>
  </Slider>  
  );
};

export default SliderBanner;