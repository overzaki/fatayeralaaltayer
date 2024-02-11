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
import { Image, Input, Span } from ".";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const configrationState = useSelector((state: any) => state?.configration);
  const [appBarContainer, setAppBarContainer] = useState({
    display: "flex",
    boxShadow: "none",
    startColor: "#00000010",
    finalColor: "#00000000",
    width: "100%",
    height: "80px",
    backgroundColor: "white", // Changed To White
    backgroundColorDark: "#000000",
    borderPosition: "bottom",
    marginBottom: "20px",
    borderWidth: "0px",
    borderColor: "none",
    borderColorDark: "#F5F5F8",
    isCenterTitle: false,
    containerViewStyle: {
      marginBottom: 20,
    },
  });
  const [appBarRightDetails, setAppBarRightDetails] = useState([
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_search",
      show: true,
      icon: "https://i.imgur.com/K79NGcT.png",
      type: "icon",
      screen: "search",
      // Search is usually on both sides so if we add required here or anything which will decide the position of search
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_cart",
      show: true,
      icon: "https://i.imgur.com/ZiNDkOU.png",
      type: "icon",
      hasBadge: true,
      screen: "Cart",
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_notification",
      show: false,
      icon: "https://i.imgur.com/21iWy7Y.png",
      type: "icon",
      screen: "Notification",
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_wishlist",
      show: false,
      icon: "https://i.imgur.com/2Xe02qj.png",
      type: "icon",
      screen: "Wishlist",
    },
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_lang",
      show: true,
      icon: "https://i.imgur.com/s9xSNdP.png",
      type: "icon",
      screen: "Wishlist",
    },
  ]);
  const [appBarLeftDetails, setAppBarLeftDetails] = useState([
    {
      id: "",
      key: "mobile_home_app_bar_show_icon_drawer",
      show: true,
      icon: "https://i.imgur.com/GgleigG.png",
      type: "icon",
      screen: "drawer",
    },
  ]);
  const globalState: any = useSelector((state: any) => state?.cartList);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const [showSearchBar, setShowSearchBar] = useState(true);
  useEffect(() => {
    if (configrationState?.defaultData) {
      const searchbarValue =
        configrationState?.defaultData?.layout?.productDetailsPage
          ?.showSearchBarSection;
      setShowSearchBar(searchbarValue);
    }
  }, [configrationState?.defaultData]);
  const [iconStyle, setIconStyle] = useState({
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    backgroundColorDark: "#000000",
    hasBackground: true,
    tintColor: "#000000",
    tintColorDark: "#000000",
    border: 1,
    borderColor: "#000000",
    borderColorDark: "#000000",
    isShadow: false,
    startColor: "#00000008",
    finalColor: "#00000000",
    width: 35,
    height: 35,
  });
  const [appBarCenter, setAppBarCenter] = useState([
    {
      id: "",
      key: "mobile_home_app_bar_show_logo",
      image: "https://i.imgur.com/lhzK1Ly.png",
      show: false,
      is_tint_color: false,
      width: 50,
      height: 50,
      color: "#000000",
      dark_color: "#000000",
      type: "image",
      screen: "",
      required: "", //Require Center Logo Or No
    },
    {
      id: "",
      show: false,
      key: "mobile_home_app_bar_show_text",
      text: "Store",
      type: "text",
      screen: "",
      required: "", //Require Center Text Or No
    },
  ]);
  const [textStyle, setTextStyle] = useState({
    size: 18,
    isBold: true,
    color: "#000000",
    colorDark: "#FFFFFF",
    numberOfLines: 1,
    style: [],
  });

  const [appBarSearch, setAppBarSearch] = useState({
    status: true,
    icon: "",
    position: "center",
    input: true,
    placeholder: "Search",
    textColor: "red",
    borderColor: "red",
    borderWidth: "1",
    mobileView: {
      status: true,
      width: "",
      height: "",
    },
  });
  // Banner
  const [appBarLogo, setAppBarLogo] = useState({
    status: true,
    position: "left",
    logo: "https://i.imgur.com/lhzK1Ly.png",
    text: "Hassaan",
    size: "18px",
    isBold: true,
    color: "#000000",
    colorDark: "#FFFFFF",
    numberOfLines: 1,
    style: [],
    borderColor: "",
    borderWidth: "",
    width: "50px",
    height: "50px",
  });
  return (
    <>
      <div
        style={{
          ...appBarContainer,
          borderBottom:
            appBarContainer.borderPosition === "bottom"
              ? `1px solid ${appBarContainer.borderColor}`
              : "none",
          borderTop:
            appBarContainer.borderPosition === "top"
              ? `1px solid ${appBarContainer.borderColor}`
              : "none",
          borderLeft:
            appBarContainer.borderPosition === "left"
              ? `1px solid ${appBarContainer.borderColor}`
              : "none",
          borderRight:
            appBarContainer.borderPosition === "right"
              ? `1px solid ${appBarContainer.borderColor}`
              : "none",
        }}
        className=" bg-transparent z-60 px-6 py-4 sticky w-full top-0 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {appBarLeftDetails?.find(
            (item) => item?.key == "mobile_home_app_bar_show_icon_drawer"
          )?.show && (
            <div onClick={() => setOpen(true)}>
              <Image
                style={{
                  ...iconStyle,
                  border:
                    iconStyle.border.toString() +
                    `px solid ${iconStyle.borderColor}`,
                }}
                src={
                  appBarLeftDetails?.find(
                    (item) =>
                      item?.key == "mobile_home_app_bar_show_icon_drawer"
                  )?.icon
                }
              />
            </div>
          )}
          {appBarSearch.position === "left" && (
            <div onClick={() => router.push("/search")}>
              <Image
                style={{
                  ...iconStyle,
                  border:
                    iconStyle.border.toString() +
                    `px solid ${iconStyle.borderColor}`,
                }}
                src={
                  appBarRightDetails?.find(
                    (item) => item.key == "mobile_home_app_bar_show_icon_search"
                  )?.icon
                }
              />
            </div>
          )}
          <div className="flex items-center">
            {appBarLogo.position === "left" && (
              <div className="flex items-center">
                <Image
                  // Style of centered Section
                  style={{
                    width: appBarLogo?.width,
                    height: appBarLogo?.height,
                  }}
                  // Image link
                  src={appBarLogo?.logo}
                />

                {appBarLogo?.text && (
                  <Span
                    style={{
                      fontSize: appBarLogo?.size,
                      fontWeight: appBarLogo?.isBold ? 800 : "400",
                      color: appBarLogo?.color,
                      lineClamp: appBarLogo?.numberOfLines,
                    }}
                    text={appBarLogo?.text}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {/* Center */}
        <div className="flex items-center">
          {appBarLogo?.position === "center" && (
            <div className="flex items-center">
              <Image
                // Style of centered Section
                style={{ width: appBarLogo?.width, height: appBarLogo?.height }}
                // Image link
                src={appBarLogo?.logo}
              />

              {appBarLogo?.text && (
                <Span
                  style={{
                    fontSize: appBarLogo?.size,
                    fontWeight: appBarLogo?.isBold ? 800 : "400",
                    color: appBarLogo?.color,
                    lineClamp: appBarLogo?.numberOfLines,
                  }}
                  text={appBarLogo?.text}
                />
              )}
            </div>
          )}
          {appBarSearch?.position === "center" && (
            <Input
              style={{
                color: appBarSearch?.textColor,
                border: `${appBarSearch?.borderWidth?.toString()}px solid ${
                  appBarSearch?.borderColor
                }`,
                display: appBarSearch?.status ? "flex" : "none",
              }}
              placeholder={appBarSearch?.placeholder}
              location="center"
            />
          )}
        </div>

        <div className="flex items-center gap-3 text-white">
          {appBarLogo?.position === "right" && (
            <div className="flex items-center">
              <Image
                // Style of centered Section
                style={{ width: appBarLogo?.width, height: appBarLogo?.height }}
                // Image link
                src={appBarLogo?.logo}
              />

              {appBarLogo?.text && (
                <Span
                  style={{
                    fontSize: appBarLogo?.size,
                    fontWeight: appBarLogo?.isBold ? 800 : "400",
                    color: appBarLogo?.color,
                    lineClamp: appBarLogo?.numberOfLines,
                  }}
                  text={appBarLogo?.text}
                />
              )}
            </div>
          )}
          {appBarSearch?.position === "right" && (
            <Input
              style={{
                color: appBarSearch?.textColor,
                border: `${appBarSearch?.borderWidth?.toString()}px solid ${
                  appBarSearch?.borderColor
                }`,
                display: appBarSearch?.status ? "flex" : "none",
              }}
              location="right"
            />
          )}
          {appBarRightDetails?.find(
            (item) => item?.key == "mobile_home_app_bar_show_icon_lang"
          )?.show && (
            <Image
              style={{
                ...iconStyle,
                border:
                  iconStyle?.border?.toString() +
                  `px solid ${iconStyle?.borderColor}`,
              }}
              src={
                appBarRightDetails?.find(
                  (item) => item?.key == "mobile_home_app_bar_show_icon_lang"
                )?.icon
              }
            />
          )}
          {/* <ShoppingCartOutlinedIcon /> */}
          {appBarRightDetails?.find(
            (item) => item?.key == "mobile_home_app_bar_show_icon_cart"
          )?.show && (
            <Image
              style={{
                ...iconStyle,
                border:
                  iconStyle?.border?.toString() +
                  `px solid ${iconStyle?.borderColor}`,
              }}
              src={
                appBarRightDetails?.find(
                  (item) => item?.key == "mobile_home_app_bar_show_icon_cart"
                )?.icon
              }
            />
          )}
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
