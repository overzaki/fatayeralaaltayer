import { ToggleButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import TopMethods from "./PaymentMethod/TopMethods";
import PaymentItem from "./PaymentMethod/PaymentItem";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const PaymentMethod = () => {
  return (
    <div className="mt-5">
      <h1 className="font-semibold text-xl">Pay With</h1>
      <div className="w-full border mt-3 border-gray-200 rounded-lg p-4 bg-white">
        <TopMethods />
        <div className="flex flex-col gap-4">
          <PaymentItem src={"/samsung-pay-.svg"} name="" />
          <PaymentItem src={"/google-pay.png"} name="Google Pay" />
          <div className="w-full  border rounded-lg mt-3 border-gray-300 p-5 flex items-center justify-between ">
            <h3 className="font-extralight">
              For faster and more secure checkout. Save your card details.
            </h3>
            <h1 className="font-semibold ">
              {" "}
              <ToggleSwitch />
            </h1>
          </div>
          <PaymentItem src={"/cash-on-delivery.png"} name="Cash On Delivery" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
