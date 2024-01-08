import React from "react";
import Hero from "../components/Hero/Hero";
import { Navbar, SectionNavigator, Wrapper } from "../components";
import Section from "../../sections/Section";
import { sections } from "../../constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../RTK/actions/Products";
const Home = () => {
  const dispath = useDispatch();
  const globalState = useSelector((state) => state);

  useEffect(() => {
    if (!globalState?.products?.list) {
      dispath(fetchData());
    }
  }, [dispath, globalState?.products?.list]);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Wrapper>
        <>
          <SectionNavigator />
          {globalState.products?.list?.map((section) => (
            <Section
              key={section.title}
              products={section.products}
              title={section.title}
            />
          ))}
        </>
      </Wrapper>
    </div>
  );
};

export default Home;
