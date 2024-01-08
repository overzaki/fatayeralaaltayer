import React, { useEffect } from "react";
import { sections } from "../constants/constants";
import { ProductCard } from "../src/components";

const Section = ({
  title,
  products,
}: {
  title: string;
  products: Array<any>;
}) => {
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
          document.querySelector(".active")?.classList.remove("active");
          navItem.classList.add("active");
        }
      });
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      id={title.toLocaleLowerCase().split(" ").join("-")}
      className={`section mt-10`}
    >
      <h1 className="font-semibold ml-5 text-lg">{title}</h1>
      <div className="grid place-items-center p-6 gap-6 rounded-lg mt-4 bg-white grid-cols-2 lg:grid-cols-4  ">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            desc={product.desc}
            key={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
