import Image from "next/image";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PickupButton from "./PickupButton";
import StoreInfoSlide from "../StoreInfoSlide";

const PaymentBox = () => {
  const [open, setOpen] = React.useState(false);
  const paymentMethods = [
    "/knet.png",
    "/visa.png",
    "/spay.png",
    "/apple-pay.png",
    "/google-pay.png",
    "/cash-on-delivery.png",
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="absolute z-50 w-full lg:w-[50vw] bottom-10 rounded-lg bg-white">
          <div
            className="flex border-b border-gray-300 gap-4  p-5 w-full items-center"
            onClick={() => setOpen(true)}
          >
            <Image alt="logo" src="/logo.jpg" width={70} height={70} />
            <div className="flex  items-center w-full justify-between">
              <div className="flex flex-col gap-3">
                <h1 className=" text-[2.5vw] md:text-[1.8vw] font-semibold ">
                  Fatayer Ala Al Tayer
                </h1>
                <div className="flex items-center gap-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method}
                      className="relative h-[12px] w-[20px]  md:h-[20px] md:w-[35px]   "
                    >
                      <Image
                        src={method}
                        alt="payment-method"
                        className="absolute"
                        layout="fill"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <KeyboardArrowRightIcon sx={{ fontSize: "28px" }} />
            </div>
          </div>
          <div className="p-4">
            <PickupButton />
          </div>
        </div>
      </div>
      <StoreInfoSlide
        open={open}
        paymentMethods={paymentMethods}
        setOpen={setOpen}
      />
    </>
  );
};

export default PaymentBox;
