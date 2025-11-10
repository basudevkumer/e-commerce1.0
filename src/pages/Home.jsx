import React from "react";
import NavWidget from "@/components/home/header/navigation/navWidgate";
import NavTop from "@/components/home/header/navigation/topNav/Index";
import NavMiddle from "@/components/home/header/navigation/navMiddle/Index";
import NavBottom from "@/components/home/header/navigation/navBottom/Index";
import WidgetContainer from "@/components/home/header/widgets/widgetContainer/Index";
import Category from "@/components/home/category/categoryDataFetch/Index";
import FeatureNav from "@/components/home/feature/Index";
import CategoryHeading from "@/components/home/category/categoryHeading/Index";
import FeatureProduct from "@/components/home/featureProduct/Index";
import Subscribe from "@/components/home/subscribe/Index";
import Footer from "@/components/commonComponent/footers/Footer";

const Home = () => {

  return (
    <>
      <NavWidget />
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <WidgetContainer />
      <FeatureNav/>
      <CategoryHeading/>
      <Category />
      <FeatureProduct/>
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default Home;
