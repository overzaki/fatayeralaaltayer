"use client";
import React from "react";
import { useEffect } from "react";
import { sectionNavigatorConstants } from "../../constants/constants";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import CategoryModal from "./CategoryModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesList } from "../../RTK/actions/Categories";
import { AppDispatch } from "../../RTK/store/store";

const SectionNavigator = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispath = useDispatch<AppDispatch>();
  const globalState = useSelector((state: any) => state);

  // images
  useEffect(() => {
    if (!globalState?.categories?.list) {
      dispath(fetchCategoriesList());
    }
  }, [dispath, globalState]);



  return (
    <div className="flex mt-4 sticky top-20 pt-2  z-50 p-1 border border-gray-300 bg-white items-center justify-between">
      <div className="whitespace-nowrap noscrollbar overflow-x-auto overflow-y-hidden">
        {globalState?.categories?.list && globalState?.categories?.list.map((item: any) => (
          <Link
            href={"#" + item.name.localized.toLocaleLowerCase().split(" ").join("-")}
            key={item._id}
            className="p-3 navLink inline-block noscrollbar overflow-scroll px-4 duration-300 text-primary   rounded-full "
          >
            {item.name.localized}
          </Link>
        ))}
      </div>
      <div className="border-l px-3 border-gray-300">
        <div className="cursor-pointer" onClick={handleOpen}>
          <WindowOutlinedIcon className="text-primary" sx={{ fontSize: 28 }} />
        </div>
        <CategoryModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          list={globalState?.categories?.list}
          handleOpen={handleOpen}
        />
      </div>
    </div>
  );
};

export default SectionNavigator;
