import React, { useEffect, useState } from "react";
import PaymentBox from "./PaymentBox";
import { useSelector } from "react-redux";

const Hero = () => {

  const [themeHeaderImage, setThemeHeaderImage] = useState<any>(null)
  const configrationState = useSelector((state: any) => state?.configration);

  useEffect(() => {
    if (configrationState?.defaultData) {
      const imageValue = configrationState?.defaultData?.layout?.homePage?.header?.image;
      setThemeHeaderImage(imageValue || "");
    }
  }, [configrationState?.defaultData])


  return (
    <div className={`bg-[url(${themeHeaderImage || '/heroImage.jpg'})] rounded-lg z-10 relative overflow-hidden h-[455px] bg-no-repeat bg-center bg-cover `}
      style={{ backgroundImage: `url('${themeHeaderImage || '/heroImage.jpg'}')` }} >
      <div className="bg-black/20 z-0 hidden lg:flex w-full h-full "></div>
      <PaymentBox />
    </div>
  );
};

export default Hero;
