import DiscountCard from "@/components/commonComponent/commonDisCountCard";
import ProductCard from "@/components/commonComponent/commonProductCard";
import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import { useCategory } from "@/hooks/useCategory";
import React, { useState } from "react";

const FeatureProduct = () => {
  console.log("hello");
  
  // create a object
  let [featureNavText, setFeatureNavText] = useState([
    { id: 1, text: "All Product", value: "products" },
    { id: 2, text: "Smart Phone", value: "smartphones" },
    { id: 3, text: "Laptop", value: "laptops" },
    { id: 4, text: "Mobile Acc", value: "mobile-accessories" },
    { id: 5, text: "jewellery", value: "womens-jewellery" },
    { id: 6, text: "Browse All Product", value: "products" },
  ]);
  // import from right arrow
  const { rightArrow } = allIcons;

  // import API info from useCategory()
  let { data, isPending, error } = useCategory();
  // show pending skeleton
  if (isPending) {
    return (
      <div className="py-[72px]">
        <Container>
          <div className="grid grid-cols-4">
            <div className=""></div>
            <div className="col-span-3">
              <div className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => {
                  return (
                    <div className="border border-gray_100 relative p-4 rounded cursor-pointer w-full h-[320px] shadow-xl">
                      {/* Skeleton Container */}
                      <div className="animate-pulse flex flex-col h-full">
                        {/* Tag Skeleton */}
                        <div className="absolute left-3 top-3">
                          <div className="bg-gray-300 rounded w-16 h-6"></div>
                        </div>

                        {/* Image Skeleton */}
                        <div className="w-full h-[175px] bg-gray-300 rounded"></div>

                        {/* Content Skeleton */}
                        <div className="pt-6 space-y-3 flex-1">
                          {/* Rating Skeleton */}
                          <div className="flex items-center gap-x-1">
                            <div className="flex gap-x-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                  key={i}
                                  className="w-5 h-5 bg-gray-300 rounded-full"
                                ></div>
                              ))}
                            </div>
                            <div className="w-12 h-4 bg-gray-300 rounded ml-2"></div>
                          </div>

                          {/* Title Skeleton */}
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                          </div>

                          {/* Price Skeleton */}
                          <div className="flex gap-x-2 items-center">
                            <div className="h-5 bg-gray-300 rounded w-16"></div>
                            <div className="h-6 bg-gray-300 rounded w-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  // show error
  if (error) {
    return (
      <div className="pt-[72px]">
        <Container>
          <div className="grid grid-cols-4 ">
            <div className=""></div>{" "}
            <div className="col-span-3 text-center bg-danger_500 p-6 text-gray_00 xl_600">
              Have an Product Card error......
            </div>
          </div>
        </Container>
      </div>
    );
  }
  let productData = data || [];

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
                    <p
                      className={`sm_400 text-gray_600 hover:sm_600 cursor-pointer  duration-300
                        ${
                          browserText
                            ? "text-primary_500 relative after:absolute after:content-[''] after:w-0 hover:after:w-[110%] after:h-[3px] after:bg-gray_900 after:bottom-[-10px] after:left-[-2px] after:duration-400  after:ease-in-out flex items-center gap-x-2"
                            : " hover:text-gray_900 relative after:absolute after:content-[''] after:w-0 hover:after:w-[110%] after:h-[3px] after:bg-primary_500 after:bottom-[-10px] after:left-[-2px] after:duration-400  after:ease-in-out"
                        }
                        `}
                      key={items.id}
                    >
                      {items.text}
                      {browserText && (
                        <span className="text-sm"> {rightArrow}</span>
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
   

            <div className="grid grid-cols-4 gap-4">
              <ProductCard productCards={(productData)} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureProduct;
