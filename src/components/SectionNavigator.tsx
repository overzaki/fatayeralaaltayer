"use client";
import React from "react";
import { useEffect } from "react";
import { sectionNavigatorConstants } from "../../constants/constants";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import CategoryModal from "./CategoryModal";
import Link from "next/link";

const SectionNavigator = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex mt-4 sticky top-20 pt-2  z-50 p-1 border border-gray-300 bg-white items-center justify-between">
      <div className="whitespace-nowrap noscrollbar overflow-x-auto overflow-y-hidden">
        {sectionNavigatorConstants.map((item) => (
          <Link
            href={"#" + item.toLocaleLowerCase().split(" ").join("-")}
            key={item}
            className="p-3 navLink inline-block noscrollbar overflow-scroll px-4 duration-300 text-[#BA470D]   rounded-full "
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="border-l px-3 border-gray-300">
        <div className="cursor-pointer" onClick={handleOpen}>
          <WindowOutlinedIcon sx={{ color: "#BA470D", fontSize: 28 }} />
        </div>
        <CategoryModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      </div>
    </div>
  );
};

export default SectionNavigator;
