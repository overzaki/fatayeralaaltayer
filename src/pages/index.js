import React from "react";
import Hero from "../components/Hero/Hero";
import { Navbar, SectionNavigator, Wrapper } from "../components";
import Section from "../../sections/Section";
import { sections } from "../../constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../RTK/actions/Products";
import { fetchCategoriesList } from "../../RTK/actions/Categories";
import { productsList } from "../constants/dummyData";
import Navbar2 from "../components/Navbar2";
const Home = () => {
  const dispath = useDispatch();
  const globalState = useSelector((state) => state);

  useEffect(() => {
    if (!globalState?.products?.list || !globalState?.categories?.list) {
      dispath(fetchData());
      dispath(fetchCategoriesList());
    }
  }, [dispath]);

  return (
    <div className="">
      {/* <Navbar2 /> */}
      <Navbar />
      <Hero />
      <Wrapper>
        <>
          <SectionNavigator />
          {globalState.categories?.list?.map((section) => (
            <Section
              key={section._id}
              products={
                globalState?.products?.list?.filter(
                  (productObj) => productObj.categoryId === section._id
                ) || []
              }
              title={section.name.localized}
            />
          ))}
        </>
      </Wrapper>
    </div>
  );
};

export default Home;
