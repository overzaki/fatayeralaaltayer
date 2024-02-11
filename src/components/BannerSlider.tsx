import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const BannerSlider = ({ data }: any) => {
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 1700 }} loop>
      {data?.map((item) => (
        <SwiperSlide>
          <img className="w-full object-center" src={item?.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
