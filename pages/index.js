import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/headers/Header";
import Slider from "../components/slider/Slider";
import MasterFooter from "../components/footers/common/MasterFooter";
import Service from "../components/Service/Service";
import Banner from "../components/banner/Banner.js";
import OurStory from "../components/our-story/OurStory.js";
import LogoBlock from "../components/logo-block/LogoBlock.js";
import CommonLayout from "../components/common-layout/CommonLayout";

const Home = () => {
  return (
    <>
      <CommonLayout parent="home" title="Home">
        <Slider />
        <Service />
        <Banner />
        <OurStory />
        <LogoBlock />
      </CommonLayout>
    </>
  );
};

export default Home;
