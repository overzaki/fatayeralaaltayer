import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const OfferNavbar = () => {
  const [adAppbar, setAdAppbar] = useState({
    width: "",
    height: "",
    backgroundColor: "",
    AdText: "",
    href: "",
    textPosition: "",
    slider: ["Hassaan", "Ahmed", "Jr"],
  });
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1700 }}
      loop
      className="w-full flex items-center justify-center"
    >
      {adAppbar?.slider?.map((item) => (
        <SwiperSlide
          className="text-center text-lg font-semibold w-full p-2"
          key={item}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferNavbar;
