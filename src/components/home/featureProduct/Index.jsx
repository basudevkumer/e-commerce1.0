import DiscountCard from "@/components/commonComponent/commonDisCountCard/Index";
import ProductCard from "@/components/commonComponent/commonProductCard";
import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import { useCategory, useSingleCategoryProduct } from "@/hooks/useCategory";
import React, { useState } from "react";
import Loading from "../loading/Index";
import Error from "../error/Index";

const FeatureProduct = () => {
  // create a object
  let [featureNavText, setFeatureNavText] = useState([
    { id: 1, text: "All Product", value: "" },
    { id: 2, text: "Smart Phone", value: "smartphones" },
    { id: 3, text: "Laptop", value: "laptops" },
    { id: 4, text: "Mobile Acc", value: "mobile-accessories" },
    { id: 5, text: "jewellery", value: "womens-jewellery" },
    { id: 6, text: "Browse All Product", value: "" },
  ]);
  // import from right arrow
  const { rightArrow } = allIcons;

  // import API all product info from useCategory()
  let {
    data: allProductElement,
    isPending: allProductElementIsLoading,
    error: allProductElementIsError,
  } = useCategory();

  // for single categroy product (useState)
  let [categoryValue, setCategoryValue] = useState("");

  // import API all single category product info from useCategory()
  let {
    data: singleCategoryData,
    isPending: singleCategoryLoading,
    isError: singleCategoryError,
  } = useSingleCategoryProduct(categoryValue);

  //create a function

  let handleClick = (value) => {
    setCategoryValue(value);
  };

  // show pending skeleton

  if (allProductElementIsLoading && !categoryValue) {
    return (
      <div className="py-[72px]">
        <Container>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div
                className={`grid grid-rows-2 gap-y-4 bg-gray-100 w-full h-full animate-pulse $`}
              >
                {/* Top Text Part - Skeleton */}
                <div className="pt-[30px] flex flex-col items-center">
                  {/* Discount Title */}
                  <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>

                  {/* Big Discount Text */}
                  <div className="h-16 w-64 bg-gray-400 rounded-lg mt-2 mb-4"></div>

                  {/* Items Name */}
                  <div className="h-5 w-48 bg-gray-300 rounded"></div>

                  {/* Timer */}
                  <div className="mt-6 mb-8 flex items-center gap-3">
                    <span className="h-5 w-28 bg-gray-300 rounded"></span>
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                  </div>

                  {/* Shop Now Button */}
                  <div className="h-12 w-36 bg-primary_500 rounded-lg opacity-80"></div>
                </div>

                {/* Bottom Image Part - Skeleton */}
                <div className="relative">
                  <div className="h-full w-full bg-gray-300 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-y-6">
              <div className="bg-yellow-300 opacity-75 w-full h-5 rounded-full"></div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => {
                  return <Loading key={index} />;
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (singleCategoryLoading && categoryValue) {
    return (
      <div className="py-[72px]">
        <Container>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div
                className={`grid grid-rows-2 gap-y-4 bg-gray-100 w-full h-full animate-pulse $`}
              >
                {/* Top Text Part - Skeleton */}
                <div className="pt-[30px] flex flex-col items-center">
                  {/* Discount Title */}
                  <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>

                  {/* Big Discount Text */}
                  <div className="h-16 w-64 bg-gray-400 rounded-lg mt-2 mb-4"></div>

                  {/* Items Name */}
                  <div className="h-5 w-48 bg-gray-300 rounded"></div>

                  {/* Timer */}
                  <div className="mt-6 mb-8 flex items-center gap-3">
                    <span className="h-5 w-28 bg-gray-300 rounded"></span>
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                  </div>

                  {/* Shop Now Button */}
                  <div className="h-12 w-36 bg-primary_500 rounded-lg opacity-80"></div>
                </div>

                {/* Bottom Image Part - Skeleton */}
                <div className="relative">
                  <div className="h-full w-full bg-gray-300 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-y-6">
              <div className="bg-yellow-300 opacity-75 w-full h-5 rounded-full"></div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => {
                  return <Loading key={index} />;
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // show error

  if (allProductElementIsError) {
    return <Error />;
  }

  if (singleCategoryError) {
    return <Error />;
  }

  //  catch two api data all data by tarnary logic

  let productData = categoryValue
    ? singleCategoryData || []
    : allProductElement || [];

  return (
    <div className="py-[72px]">
      <Container>
        <div className="grid grid-cols-4 gap-x-6 max-h-[716px]">
          <div className=" ">
            <DiscountCard />
          </div>
          <div className="col-span-3 flex flex-col gap-y-6 max-h-[716px] ">
            <div className=" flex items-center  justify-between">
              <h3 className="heading3 text-gray_900">Featured Products</h3>
              <div className="flex gap-x-[10px]">
                {featureNavText.map((items, index) => {
                  let browserText = items.text === "Browse All Product";

                  return (
                    <button
                      className={`sm_400 text-gray_600 hover:sm_600 cursor-pointer  duration-300
                        ${
                          browserText
                            ? "text-primary_500 relative after:absolute after:content-[''] after:w-0 hover:after:w-[110%] after:h-[3px] after:bg-gray_900 after:bottom-[-10px] after:left-[-2px] after:duration-400  after:ease-in-out flex items-center gap-x-2"
                            : " hover:text-gray_900 relative after:absolute after:content-[''] after:w-0 hover:after:w-[110%] after:h-[3px] after:bg-primary_500 after:bottom-[-10px] after:left-[-2px] after:duration-400  after:ease-in-out"
                        }
                        `}
                      key={items.id}
                      onClick={() => handleClick(items.value)}
                    >
                      {items.text}
                      {browserText && (
                        <span className="text-sm"> {rightArrow}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData?.slice(0, 8).map((items, index) => {
                return <ProductCard product={items} key={index} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureProduct;
