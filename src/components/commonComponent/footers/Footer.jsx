import React, { useEffect, useState } from "react";
import Container from "../containers/Container";
import { allImages } from "@/helpers/ImageProvider";
import { allIcons } from "@/helpers/IconProvider";
import { Link } from "react-router-dom";
import { allCategoryList } from "@/hooks/useCategory";
import { useDispatch, useSelector } from "react-redux";
import { addFooterItems } from "@/reduxFeature/slices/fotItemSlice";
import { activefiltered } from "@/reduxFeature/slices/activeSlice";

const Footer = () => {
  //import icon form rightArrow
  const { rightArrow } = allIcons;
  //import images from allimages object
  const { footerLogo } = allImages;
  const { appStoreBannar } = allImages;
  // here, all footer nav tab contorl by useState

  ///////////////////////
  /// for category nav
  //////////////////////

  const {
    data: categoryData,
    isPending: categoryItemsLoading,
    isError: categoryError,
  } = allCategoryList();

  ///////////////////
  /// for Link nav
  //////////////////

  let [link, setLink] = useState([
    { id: 1, name: "Shop Product", links: "/shop" },
    { id: 2, name: "Shoping Cart", links: "/shopping-card" },
    { id: 3, name: "Wishlist", links: "/wishlist" },
    { id: 4, name: "Compare", links: "/compare" },
    { id: 5, name: "Track Order", links: "/track-order" },
    { id: 6, name: "Customer Help", links: "/customer-support" },
    { id: 7, name: "About Us", links: "/about" },
  ]);

  /////////////////////////
  /// for footer Button
  ////////////////////////

  let [btn, setBtn] = useState([
    { id: 1, name: "Game" },
    { id: 2, name: "iPhone" },
    { id: 3, name: "TV" },
    { id: 4, name: "Asus Laptops" },
    { id: 5, name: "SSD " },
    { id: 6, name: "Graphics Card " },
    { id: 7, name: "Power Bank " },
    { id: 8, name: "Smart TV" },
    { id: 9, name: "Speaker" },
    { id: 10, name: "Tablet" },
    { id: 11, name: "Microwave" },
    { id: 12, name: "Samsung" },
  ]);

  const dispatch = useDispatch();
  const activeItems = useSelector((state) => state.activeItems.value);

  // handle ITems

  const handleCatItems = (items) => {
    if (!activeItems?.includes(items.slug)) {
      const activeSlug = [...activeItems, items.slug];
      dispatch(addFooterItems(items?.slug));
      dispatch(activefiltered(activeSlug));
    }
  };

  return (
    <div className="bg-gray_900">
      <div className="py-[72px]">
        <Container>
          <div className="grid grid-cols-7 gap-x-6">
            <div className=" col-span-2  ">
              <picture>
                <img
                  src={footerLogo[0].src}
                  alt="footerLogo"
                  className="w-[177px]"
                />
              </picture>
              <div className="pt-6 flex flex-col gap-y-3">
                <div className="flex flex-col gap-1">
                  <p className="sm_400  text-gray_500">Customer Supports:</p>
                  <p className="lg_500 text-gray_00">(629) 555-0129</p>
                </div>
                <div className="flex">
                  <p className="md_400  text-gray_300 w-[248px]">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
                <p className="md_5  00 text-gray_00">info@kinbo.com</p>
              </div>
            </div>
            <div className="">
              <h2 className="labe2 text-gray_00 mb-3">Top Category </h2>
              <ul className="flex flex-col gap-y-[8px]">
                {categoryData?.slice(0, 7)?.map((items, index) => {
                  return (
                    <Link to={"/shop"} key={items.id}>
                      <li
                        className="group  flex items-center gap-x-2 cursor-pointer relative overflow-hidden "
                        onClick={() => handleCatItems(items)}
                      >
                        <span className="text-[33px] bg-warning_500  absolute left-[-40px] group-hover:left-0  transition-all duration-300 ease-in-out w-[30px] h-[3px] rounded"></span>
                        <span className=" sm_500 text-gray_400 group-hover:text-gray_00 transition-all duration-300   transfrom  group-hover:translate-x-[36px] whitespace-nowrap">
                          {items.name}
                        </span>
                      </li>
                    </Link>
                  );
                })}
                <Link to={"/shop"}>
                  <li className="flex items-center gap-x-[10px] text-warning_500 ">
                    <span className="sm_500 ">Browse All Product</span>
                    <span className="text-lg">{rightArrow}</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h2 className="labe2 text-gray_00 mb-3">Quick links </h2>
              <ul className="flex flex-col gap-y-[8px]">
                {link.map((items, index) => {
                  return (
                    <li key={items.id}>
                      <Link
                        to={items.links}
                        className="group  flex items-center gap-x-2 cursor-pointer relative overflow-hidden"
                      >
                        <span className="text-[33px] bg-warning_500  absolute left-[-40px] group-hover:left-0  transition-all duration-300 ease-in-out w-[30px] h-[3px] rounded"></span>
                        <span className=" sm_500 text-gray_400 group-hover:text-gray_00 transition-all duration-300   transfrom  group-hover:translate-x-[36px] whitespace-nowrap">
                          {items.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h2 className="labe2 text-gray_00 mb-3">Download APP</h2>
              <div className="flex flex-col gap-y-3">
                {appStoreBannar.map((items) => {
                  return (
                    <picture className="cursor-pointer" key={items.id}>
                      <img
                        src={items.src}
                        alt="footerAppstoreBannar"
                        className="w-full h-[70px] object-cover "
                      />
                    </picture>
                  );
                })}
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="labe2 text-gray_00 mb-3">Popular Tag</h2>
              <div className="flex gap-2 flex-wrap">
                {btn.map((items, index) => {
                  return (
                    <button
                      className="cursor-pointer sm_500 text-gray_00 border border-gray_800  hover:bg-gray_800 hover:border-gray_00  transition duration-300 ease-in-out py-[6px] px-3 border rounded"
                      key={items.id}
                    >
                      {items.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* show copyright text */}
      <div className="py-6 border-t border-gray_600 text-center">
        <p className="sm_400 text-gray_300">
          Kinbo - eCommerce Template © 2025. Design by Templatecookie modify by
          wasim and implement into code by Jhulon Kumar
        </p>
      </div>
    </div>
  );
};

export default Footer;
