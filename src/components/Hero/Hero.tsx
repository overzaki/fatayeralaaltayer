import React from "react";
import PaymentBox from "./PaymentBox";

const Hero = () => {
  return (
    <div className="bg-[url(/heroImage.jpg)] rounded-lg z-10 relative overflow-hidden h-[455px] bg-no-repeat bg-center bg-cover ">
      <div className="bg-black/20 z-0 hidden lg:flex w-full h-full "></div>
      <PaymentBox />
    </div>
  );
};

export default Hero;
