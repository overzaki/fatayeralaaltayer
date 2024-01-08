import Image from "next/image";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-2 flex items-center justify-between w-full fixed top-0 z-50">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1330px]">
        <Link
          href="/"
          className="flex hover:text-[#ba470d] cursor-pointer gap-3 items-center "
        >
          <div className="relative w-[50px] object-cover h-[50px] ">
            <Image
              alt="logo"
              src="/fatayerlogo.jpg"
              layout="fill"
              className="absolute rounded-full object-cover "
            />
          </div>
          <h1 className="text-xl">Fatayer Ala Al Tayer</h1>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-[30px]">ﻉ</span>
          <PersonOutlineOutlinedIcon sx={{ fontSize: "30px" }} />

          <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
