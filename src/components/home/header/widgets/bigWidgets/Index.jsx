import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { allImages } from "@/helpers/ImageProvider";
const BigWidget = () => {
  const { widget1 } = allImages;
  return (
    <div className="overflow-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[EffectCards, Pagination, Autoplay, ]}
        autoplay={{
          delay: 2500,
        }}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "var(--warning_500)",
          "--swiper-pagination-bullet-size": "18px",
          "--swiper-pagination-bullet-inactive-color": "#020202ff",
        }}
      >
        <SwiperSlide>
          <img src={widget1} alt="big Widget Images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={widget1} alt="big Widget Images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={widget1} alt="big Widget Images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={widget1} alt="big Widget Images" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BigWidget;
