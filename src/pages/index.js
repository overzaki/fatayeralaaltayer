import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import {
  BannerSlider,
  ImageTextBanner,
  Navbar,
  OfferNavbar,
  ProductsCarousel,
  SectionNavigator,
  VideoBanner,
  Wrapper,
} from "../components";
import Section from "../../sections/Section";
import { sections } from "../../constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../RTK/actions/Products";
import { fetchCategoriesList } from "../../RTK/actions/Categories";
import { productsList } from "../constants/dummyData";
import Navbar2 from "../components/Navbar2";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const Home = () => {
  const dispath = useDispatch();
  const globalState = useSelector((state) => state);
  const components = [
    { id: 1, component: Navbar },
    { id: 2, component: Hero },
    { id: 3, component: SectionNavigator },
  ];

  useEffect(() => {
    if (!globalState?.products?.list || !globalState?.categories?.list) {
      dispath(fetchData());
      dispath(fetchCategoriesList());
    }
  }, [dispath]);
  const [bannerDetails, setBannerDetails] = useState({
    mainCard: {
      status: true,
      logo: true,
      heading: "",
    },

    bannerBackground: {
      status: true,
      backgroundType: "slider",
      image: "",
      video: "",
      slider: [
        {
          src: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
          text: "",
        },
        {
          src: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
          text: "",
        },
        {
          src: "https://graphicsfamily.com/wp-content/uploads/edd/2021/10/Business-Website-Banner-Design-1180x664.jpg",
          text: "",
        },
      ],
    },
  });

  return (
    <div className="">
      {/* <Navbar2 /> */}
      <OfferNavbar />

      <Navbar />
      <Hero />
      <SectionNavigator />

      {bannerDetails?.bannerBackground?.backgroundType === "video" ? (
        <VideoBanner />
      ) : bannerDetails?.bannerBackground?.backgroundType === "image" ? (
        <Wrapper>
          <ImageTextBanner />
        </Wrapper>
      ) : (
        <BannerSlider data={bannerDetails.bannerBackground.slider} />
      )}

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
    </div>
  );
};

export default Home;
