import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Input = ({ location, placeholder, style }: any) => {
  return location === "center" ? (
    <div
      style={style}
      className="border w-full rounded-full flex items-center border-gray-200"
    >
      <SearchOutlinedIcon className="text-gray-500 mx-1" />
      <input
        style={{ color: style?.textColor }}
        placeholder={placeholder}
        className={`outline-none placeholder:text-[${style?.textColor}] p-2 w-full rounded-full`}
      />
    </div>
  ) : (
    <div
      style={style}
      className="border w-full rounded-full flex items-center border-gray-200"
    >
      <SearchOutlinedIcon className="text-gray-500 mx-1" />
      <input
        placeholder={placeholder}
        className={`outline-none placeholder:text-[${style?.textColor}] p-1 w-[80%] rounded-full`}
      />
    </div>
  );
};

export default Input;
