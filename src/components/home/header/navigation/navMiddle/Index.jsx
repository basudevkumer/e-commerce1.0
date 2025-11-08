import Button from "@/components/commonComponent/commonButton/Button";
import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import { allImages } from "@/helpers/ImageProvider";
import React, { useState } from "react";

const NavMiddle = () => {
  /////////////////////
  //// import images
  /////////////////////
  const { navMiddle } = allImages;
  /////////////////////
  //// import icons
  /////////////////////
  const { searchIcon } = allIcons;
  const { navMiddleIcon } = allIcons;

  /**
   * render search input
   * add onChange event handler to control dynamic icon rendering .
   * using usestate to manage the icon state.
   * using trarnary operator to render the icon based on the state {visible / hidden}
   * using if condition to check the input value length
   */
  let [showIcon, setShowIcon] = useState(true);
  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 0) {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }
  };
  return (
    <div className="bg-secondary_700 py-5 border-t border-[#ffffff41]">
      <Container>
        <div className="grid grid-cols-4  items-center">
          <div className="">
            <picture>
              <img src={navMiddle} alt="" />
            </picture>
          </div>
          <div className="col-span-2  flex  justify-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for anything..."
                className="bg-gray_00 w-[646px] px-5 py-[14px] placeholder:sm_400 focus:outline-none rounded"
                onChange={handleChange}
              />
              {showIcon ? (
                <span className="absolute right-5 text-gray_900  top-[50%] -translate-y-1/2 text-xl">
                  {searchIcon}
                </span>
              ) : (
                <span className="absolute right-11 text-gray_900  top-[50%] -translate-y-1/2 text-xl">
                  <button className="label2 py-[4px] px-[10px] text-gray_900  bg-warning_500 rounded  cursor-pointer">
                    Search
                  </button>
                </span>
              )}
            </div>
          </div>
          <div className=" flex  justify-end">
            <ul className="flex gap-x-6 ">
              {navMiddleIcon.map((items) => {
                return items.to === "/cart" ? (
                  <div className="relative">
                    <li
                      key={items.id}
                      className="text-gray_00 text-[32px] cursor-pointer "
                    >
                      {items.icon}
                    </li>
                    <span className="absolute -top-[7px] -right-[3px] text-sm font-semibold text-secondary_700    bg-gray_00 rounded-full  h-5 w-5 flex items-center justify-center cursor-pointer  ">
                      2
                    </span>
                  </div>
                ) : (
                  <li
                    key={items.id}
                    className="text-gray_00 text-[32px] cursor-pointer"
                  >
                    {items.icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavMiddle;
