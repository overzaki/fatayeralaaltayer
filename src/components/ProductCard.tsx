"use client";

import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "./Modal";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { addToCart } from "../../RTK/slices/cartReducer";
const ProductCard = ({
  id,
  price,
  desc,
  name,
}: {
  id: number;
  price: number;
  desc: string;
  name: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleCart = () => {
    let object = { id: id, price: price, desc: desc, name: name, quantity: 1 };
    dispatch(addToCart(object as any));
  };

  return (
    <div className="overflow-hidden sm:w-[280px]  max-sm:w-[150px] xl:w-[280px] lg:w-[220px] md:w-[320px] h-full  ">
      <Grid
        onClick={handleOpen}
        className=" w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] border max-sm:w-[150px] max-sm:h-[150px] lg:w-[220px] lg:h-[220px]  border-gray-300 rounded-lg xl:h-[280px] xl:w-[280px] overflow-hidden "
        item
        xs={6}
      >
        <Image
          style={{
            borderRadius: "7px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          className="hover:scale-110 -z-1 duration-200"
          src={"/p2.png"}
          alt="men"
          width={380}
          height={270}
        />
      </Grid>
      <p className="line-clamp-1 font-semibold ">{name}</p>
      <p className="w-full line-clamp-2 font-extralight break-all h-[50px] ">
        {desc}
      </p>
      <div className="flex gap-2">
        <p className="w-full font-semibold ">{price} KWD</p>
        <AddIcon
          onClick={handleCart}
          sx={{
            backgroundColor: "#BA470D",
            borderRadius: "9999px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </div>

      <BasicModal
        id={id}
        desc={desc && desc}
        price={price}
        name={name}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
      {/* <div
          className="w-[100%]  lg:w-[70vw]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100vh",
            backgroundColor: "white",
            border: "none",
            boxShadow: "24",
            padding: "16px",
          }}
        >
          <div className="flex items-start max-md:flex-col ">
            <ProductImage />
            <Description price={price} name={name} />
          </div>
        </div> */}
    </div>
  );
};

export default ProductCard;
