import React from "react";
import WidgetContainer from "@/components/home/header/widgets/widgetContainer/Index";
import Category from "@/components/home/category/categoryDataFetch/Index";
import FeatureNav from "@/components/home/feature/Index";
import CategoryHeading from "@/components/home/category/categoryHeading/Index";
import FeatureProduct from "@/components/home/featureProduct/Index";
import Subscribe from "@/components/home/subscribe/Index";
import HomeProdctAd from "@/components/home/HomeAd/Index";
import BestDealContainter from "@/components/home/bestDealsContainer/Index";

const Home = () => {
  return (
    <>
      <WidgetContainer />
      <FeatureNav />
      <CategoryHeading />
      <Category />
      <FeatureProduct />
      <HomeProdctAd />
      <BestDealContainter />
      <Subscribe />
    </>
  );
};

export default Home;
