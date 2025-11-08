import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import React from "react";

const NavBottom = () => {
  // categories array

  let categories = [
    "All Category",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
  ];

  // categories value array

  let categoriValue = [
    "allcategory",
    "electronics",
    "fashion",
    "home_garden",
    "sports",
    "toys",
  ];
  //  add object for categories items
  const { allItemsIcon } = allIcons;
  return (
    <div className="py-4 border-b border-gray_100">
      {/* add container for bottom navigation */}
      <Container>
        <div className="flex justify-between  ">
          <div className="flex gap-x-5">
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer">
              <select id="all_category">
                {
                  /* Add more options as needed */

                  categories.map((items, index) => {
                    return (
                      <option
                        key={index}
                        value={categoriValue[index]}
                        className="sm_500 text-gray_900"
                      >
                        {items}
                      </option>
                    );
                  })
                }
              </select>
            </div>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[0].icon}</span>
              <p className="sm_400 text-gray_600"> Track Order</p>
            </div>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[1].icon}</span>
              <p className="sm_400 text-gray_600"> Compare</p>
            </div>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[2].icon}</span>
              <p className="sm_400 text-gray_600"> Customer Support</p>
            </div>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[3].icon}</span>
              <p className="sm_400 text-gray_600"> Need Help</p>
            </div>
          </div>
          <div className="flex items-center py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer gap-x-2.5   ">
            <span className="text-gray_900 ">{allItemsIcon[4].icon}</span>
            <p className="lg_400 text-gray_900"> +1-202-555-0104</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBottom;
