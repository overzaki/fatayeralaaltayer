"use client";

import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { addToCart } from "../../RTK/slices/cartReducer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductCard = ({
  id,
  imageStyle,
  price,
  desc,
  name,
  productsLayout,
  titleStyle,
  images,
  wishlistStyle,
}: {
  id: number;
  price: number;
  desc: string;
  name: string;
  productsLayout: number;
  titleStyle: number;
  images: Array<string>;
  wishlistStyle: number;
  imageStyle: number;
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
    <div
      className={`overflow-hidden sm:w-[280px] ${
        productsLayout === 1 && "flex items-center !w-full gap-3"
      }  xl:w-[280px] lg:w-[220px] md:w-[320px] h-full`}
    >
      <Grid
        onClick={handleOpen}
        className={`w-[170px] ${titleStyle === 1 ? "" : "relative"} ${
          wishlistStyle && "relative"
        } flex items-center justify-center h-[200px] sm:w-[280px]  sm:h-[280px] border lg:w-[220px] lg:h-[220px]  border-gray-300 
         
         xl:w-[280px] ${
           imageStyle === 1 ? "rounded-lg" : "rounded-full"
         }  overflow-hidden`}
        item
        xs={6}
      >
        <Image
          style={{
            cursor: "pointer",
          }}
          className="hover:scale-110 object-center -z-1 duration-200"
          src={"/p2.png"}
          // src={images && images.length > 0 ? images[0] : ""}
          alt="men"
          width={380}
          height={270}
        />

        <FavoriteBorderOutlinedIcon
          className={`absolute text-[38px] rounded-xl ${
            wishlistStyle === 1
              ? "top-2 right-2"
              : wishlistStyle === 2
              ? "bottom-2 right-2"
              : "bottom-2 right-2"
          } bg-white p-2`}
        />

        {titleStyle == 2 && (
          <div
            className={`absolute top-0 w-full h-full inset-0 bg-black/30 `}
          />
        )}
        {titleStyle === 3 && (
          <div
            className={`absolute top-0 w-full h-full inset-0 bg-white/70 `}
          />
        )}
        {titleStyle !== 1 && (
          <p
            className={`font-semibold absolute inset-0 flex items-center justify-center text-center ${
              titleStyle === 2
                ? " text-white"
                : titleStyle === 3
                ? "text-blue-800"
                : "text-white"
            } text-white`}
          >
            {name}
          </p>
        )}
      </Grid>

      {titleStyle === 1 && (
        <p className="font-semibold absolute inset-0 flex items-center justify-center text-center text-white">
          {name}
        </p>
      )}

      <div className="w-full">
        <p className="w-full line-clamp-2 font-extralight break-all h-[50px] ">
          {desc}
        </p>
        <div className="flex gap-2">
          <p className="w-full font-semibold ">{price} KWD</p>
          <AddIcon
            onClick={handleCart}
            className="bg-primary"
            sx={{
              borderRadius: "9999px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <BasicModal
        id={id}
        desc={desc && desc}
        price={price}
        images={images}
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
