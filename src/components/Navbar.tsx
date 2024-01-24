"use client";

import React, { Fragment, useEffect, useState } from "react";
import NavbarButton from "./Navbar/NavbarButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/navigation";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavSlide from "./NavSlide";
import CartButton from "./Navbar/CartButton";
import { useSelector } from "react-redux";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const globalState: any = useSelector((state: any) => state?.cartList);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {

    setIsClient(true);
  }, [])


  return (
    <>
      <div className="navbar bg-transparent z-60 px-6 py-4 fixed w-full top-0 flex items-center justify-between min-h-[50px] ">
        <div className="flex items-center gap-2">
          <div onClick={() => setOpen(true)}>
            <NavbarButton Icon={PersonOutlineOutlinedIcon} />
          </div>
          <div onClick={() => router.push("/search")}>
            <NavbarButton Icon={SearchOutlinedIcon} />
          </div>
        </div>
        <div className="flex items-center gap-3 text-white">
          <span className="text-xl">ﻉ</span>
          {/* <ShoppingCartOutlinedIcon /> */}
          <CartButton />
        </div>
      </div>
      <NavSlide open={open} setOpen={setOpen} />

      {/* if cart is not empty */}

      {isClient && globalState?.selected?.length > 0 && (
        <div className="fixed flex bottom-0 bg-white h-24 w-full items-center justify-center px-4 z-20">
          <Link
            href={"/checkout"}
            className="rounded-md btn w-full max-w-[424px] text-white-800 text-lg flex justify-between items-center px-4 py-2.5 hover:opacity-50 bg-primary "
          >
            <div className="flex space-x-2 items-center rtl:space-x-reverse">
              <div className="bg-white text-black rounded-full flex items-center justify-center w-7 h-7 ">
                {globalState?.itemsCounter}
              </div>
              <div className="text-white">{globalState?.total} KWD</div>
            </div>
            <div className="font-bold uppercase text-white">Review Cart</div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
