"use client";
import React, { useEffect, useState } from "react";
import { sections } from "../constants/constants";
import { ProductCard } from "../src/components";
import { useSelector } from "react-redux";

const Section = ({
  title,
  products,
}: {
  title: string;
  products: Array<any>;
}) => {
  const configrationState = useSelector((state: any) => state?.configration);
  const [navLinkStyle, setNavLinkStyle] = useState(1);
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navLink");
    const sections = document.querySelectorAll(".section");

    let currentSection = "gathering-boxes";
    window.addEventListener("scroll", () => {
      sections.forEach((sectionItem: any) => {
        if (window.scrollY >= sectionItem?.offsetTop - 300) {
          currentSection = sectionItem.id;
        }
      });
      navLinks.forEach((navItem: any) => {
        if (navItem.href.includes(currentSection)) {
          document
            .querySelector(navLinkStyle === 1 ? ".active1" : ".active")
            ?.classList.remove(navLinkStyle === 1 ? "active1" : "active");
          navItem.classList.add(navLinkStyle === 1 ? "active1" : "active");
        }
      });
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const [productsLayout, setProductsLayout] = useState(2);
  const [titleStyle, setTitleStyle] = useState(1);
  const [wishlistStyle, setWishListStyle] = useState(2);
  const [imageStyle, setImageStyle] = useState(1);

  useEffect(() => {
    if (configrationState?.defaultData) {
      const productStyleValue =
        configrationState?.defaultData?.layout?.homePage?.product?.rowType;
      const titleStyleValue = configrationState?.defaultData?.css?.categoryShow;
      const imgStyle =
        configrationState?.defaultData?.layout?.productPage?.imagesView;
      setImageStyle(imgStyle === "empty value" ? 1 : 2);
      setTitleStyle(Number(titleStyleValue) || 1);
      setProductsLayout(Number(productStyleValue) || 1);
    }
  }, [configrationState?.defaultData]);

  return (
    <div
      id={title.toLocaleLowerCase().split(" ").join("-")}
      className={`section mt-10`}
    >
      <h1 className="font-semibold ml-5 text-lg">{title}</h1>
      <div
        className={`grid place-items-center p-6 gap-6 rounded-lg mt-4 bg-white ${
          productsLayout === 1
            ? "grid grid-cols-1"
            : productsLayout === 2
            ? "grid grid-cols-3"
            : "grid grid-cols-2"
        } `}
      >
        {products.map((product) => (
          <ProductCard
            imageStyle={imageStyle}
            wishlistStyle={wishlistStyle}
            productsLayout={productsLayout}
            images={product.images}
            titleStyle={titleStyle}
            id={product._id}
            name={product?.name?.localized}
            price={product.price}
            desc={product.description?.localized}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
