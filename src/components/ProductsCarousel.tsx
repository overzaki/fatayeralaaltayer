import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselData } from "@/constants/dummyData";
import "swiper/css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductCard } from ".";
import PrCard from "./PrCard";
import "./carousel.css";

const ProductsCarousel = () => {
  return (
    <Swiper
      direction={"horizontal"} // Set direction to horizontal
      spaceBetween={50}
      slidesPerView={4}
      loop
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
      className="mt-8 relative"
    >
      {carouselData.map((item, i) => (
        <SwiperSlide key={i}>
          <PrCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsCarousel;
