import Star from "@/components/commonComponent/commonStar/Star";
import Container from "@/components/commonComponent/containers/Container";
import Ceracell from "@/components/details/detailCeracell/Ceracell";
import { allIcons } from "@/helpers/IconProvider";
import { allImages } from "@/helpers/ImageProvider";
import { useTotalItems } from "@/hooks/useCategory";
import { addTocard, updateQuanty } from "@/reduxFeature/slices/shopSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePopUp = ({eventHandle}) => {
  // global state management

  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.addCard.value);

  // const catchData = useSelector();
  // for images and icons
  const { pymentCardImage } = allImages;
  const { detailPageIcon, productInfoActivites, compareIcon, plainClose } =
    allIcons;

  //manage query using tanstack
  const { data, isLoading, isPending } = useTotalItems();

  const [singleData, setSingleData] = useState([]);

  const haveCardItems = cardItems.find((items) => items.id === singleData?.id);
  const currentItems = haveCardItems ? haveCardItems.quantity : 0;

  useEffect(() => {
    if (data?.length > 0) {
      const defineIndex = data?.filter((items) => items?.id === 169);
      setSingleData(defineIndex[0]);
    }
  }, [data]);


  // event handle

  const handleClicked = () => {
    dispatch(
      addTocard({
        ...singleData,
        quantity: 1,
      })
    );
  };

  const handleIncrement = (id) => {
    if (!haveCardItems) {
      dispatch(
        addTocard({
          ...data,
          quantity: 1,
        })
      );
    } else {
      dispatch(updateQuanty({ id, type: "increment" }));
    }
  };
  const handleDecrement = (id) => {
    dispatch(updateQuanty({ id, type: "decrement" }));
  };

  return (
    <div className="fixed inset-0 h-screen w-full bg-black/50 z-60 flex items-center justify-center ">
      <div className="bg-gray_00  grid grid-cols-2 gap-x-10 p-12  w-[1500px] reletive">
        <span className=" flex items-center justify-center inline-block p-[8px] bg-gray_00/32 rounded-full z-70 absolute top-[125px] right-[160px] text-[30px] text-gray_00 hover:bg-danger_500 transition duration-300 ease-in-out cursor-pointer" onClick={eventHandle}>
          {plainClose}
        </span>
        <div className="  ">
          <Ceracell img={singleData?.images || []} />{" "}
        </div>
        <div>
          <div className="">
            <div className="flex  items-center gap-x-2">
              <Star starsCard={singleData?.rating} />
              <p className="sm_600 text-gray_900">
                {" "}
                {singleData?.rating} Star Rating
              </p>
              <p className="sm_400 text-gray_600">
                ({singleData?.reviews?.length} User feedback)
              </p>
            </div>
            <h1 className="xl_400 text-gray_900 mt-2 mb-4">
              {singleData?.title}
            </h1>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 ">
              <p className="sm_400 text-gray_600">
                {" "}
                Sku :
                <span className="sm_600 text-gray_900 ml-1">
                  {singleData?.sku}
                </span>
              </p>
              <p className="sm_400 text-gray_600">
                Availability :{" "}
                <span className="sm_600 text-success_500 ml-1">
                  {" "}
                  {singleData?.availabilityStatus}
                </span>
              </p>
              <p className="sm_400 text-gray_600">
                Brand :{" "}
                <span className="sm_600 text-gray_900 ml-1">
                  {singleData?.brand}
                </span>
              </p>
              <p className="sm_400 text-gray_600">
                {" "}
                Category :
                <span className="sm_600 text-gray_900 ml-1">
                  {singleData?.category}
                </span>
              </p>
            </div>
            <div className="py-6 flex items-center gap-x-3  border-b border-gray_100">
              <h3 className="heading3 text-secondary_500">
                ${singleData?.price}
              </h3>
              <h5 className="lg_400 text-gray_500">
                <del>
                  $
                  {(
                    singleData?.price /
                    (1 - singleData?.discountPercentage / 100)
                  ).toFixed(2)}
                </del>
              </h5>
              <p className="py-[5px] px-[10px]  bg-warning_400 text-gray_900 w-fit rounded">
                {Math.round(singleData?.discountPercentage)}% OFF
              </p>
            </div>
            <div className="py-6  grid grid-cols-2 gap-x-6 gap-y-4 ">
              <div>
                <p className="sm_400 text-gray_900">Width</p>
                <span className="sm_400 text-gray_700">
                  {singleData?.dimensions?.width} cm/inch/m
                </span>
              </div>
              <div>
                <p className="sm_400 text-gray_900">Height</p>
                <span className="sm_400 text-gray_700">
                  {singleData?.dimensions?.height} cm/inch/m
                </span>
              </div>
              <div>
                <p className="sm_400 text-gray_900">Depth</p>
                <span className="sm_400 text-gray_700">
                  {singleData?.dimensions?.depth} cm/inch/m
                </span>
              </div>
              <div>
                <p className="sm_400 text-gray_900">Product QR </p>
                <figure>
                  <img
                    src={singleData?.meta?.qrCode}
                    alt="productQR"
                    className="w-[50px]"
                  />
                </figure>
              </div>
              <div className="flex gap-x-4 py-6">
                <div className="flex gap-x-[37px] border-[2px] border-gray_100  px-5 items-center">
                  <button
                    className="text-[30px]  text-gray_900 cursor-pointer"
                    onClick={() => handleDecrement(singleData.id)}
                  >
                    -
                  </button>
                  <p className="text-sm font-medium text-gray_700">
                    {currentItems > 0 ? currentItems : 1}
                  </p>
                  <button
                    className="text-[25px]  text-gray_900 cursor-pointer"
                    onClick={() => handleIncrement(singleData.id)}
                  >
                    +
                  </button>
                </div>
                <Link to={"/shopping-card"}>
                  <button
                    className=" px-[81px] bg-primary_500 whitespace-nowrap heading6 text-gray_00 flex items-center gap-x-3 cursor-pointer"
                    onClick={handleClicked}
                  >
                    Add to card
                    <span className="text-lg">
                      {productInfoActivites[0].icon}
                    </span>
                  </button>
                </Link>
                <button className="uppercase whitespace-nowrap  heading6 border-[2px] border-primary_500 text-primary_500 rounded px-8 cursor-pointer">
                  {" "}
                  Buy now
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-6">
                <div className="flex gap-x-[6px] items-center">
                  <span className="text-gray_700 ">
                    {productInfoActivites[1].icon}
                  </span>
                  <p className="sm_400 text-gray_700 ">Add to Wishlist</p>
                </div>
                <div className="flex gap-x-[6px] items-center">
                  <span className="text-gray_700 ">{compareIcon}</span>
                  <p className="sm_400 text-gray_700 ">Add to Compare</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <p className="sm_400 text-gray_700">Share product:</p>
                <div className="flex gap-x-3">
                  {detailPageIcon.map((items, index) => {
                    return (
                      <span
                        key={index}
                        className="text-base hover:text-primary_500 cursor-pointer text-gray_600 duration-300 ease-in-out"
                      >
                        {items.icon}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="p-4 border  border-gray_100 mt-6 rounded ">
              <p className="pb-3 sm-400 text-gray_900">
                100% Guarantee Safe Checkout
              </p>
              <figure>
                <img src={pymentCardImage} alt="productDetails-images" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePopUp;
