import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
const ProductImage = () => {
  return (
    <Grid
      className="border border-gray-200 flex items-center justify-center h-max "
      item
      xs={6}
    >
      <Image
        style={{
          borderRadius: "7px",
          objectFit: "contain",
          cursor: "pointer",
        }}
        className=""
        src={"/p2.png"}
        alt="men"
        width={380}
        height={270}
      />
    </Grid>
  );
};

export default ProductImage;
