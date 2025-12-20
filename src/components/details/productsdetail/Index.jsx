import Star from "@/components/commonComponent/commonStar/Star";
import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import { allImages } from "@/helpers/ImageProvider";
import { useGetSingleProduct } from "@/hooks/useCategory";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Ceracell from "../detailCeracell/Ceracell";
import MoreDetails from "../moreDetailProduct/MoreDetails";
import BreadCrumb from "@/components/commonComponent/breadcrumb/BreadCrumb";

const ProductDetails = () => {
  //  here catch id
  const { id } = useParams();
  // here catch api data
  const { data, isPending, isError } = useGetSingleProduct(id);
  // get icon
  const { productInfoActivites, compareIcon, detailPageIcon } = allIcons;
  // get images
  const { pymentCardImage } = allImages;
  //ispending
  if (isPending) {
    <div>Loading........</div>;
  }

  // const discountPrice =
  //   data?.price * (data?.discountPercentage / 100).toFixed(2);
  // const parcentage = Math.round(data?.discountPercentage);
  // const originalPrice = data?.price;

  return (
    <div>
      <BreadCrumb />
      <Container>
        <div>
          <div className="mt-8  grid grid-cols-2 gap-x-14">
            <div className="">
              <Ceracell img={data?.images || []} />
            </div>
            <div className="">
              <div className="flex  items-center gap-x-2">
                <Star starsCard={data?.rating} />
                <p className="sm_600 text-gray_900">
                  {" "}
                  {data?.rating} Star Rating
                </p>
                <p className="sm_400 text-gray_600">
                  ({data?.reviews.length} User feedback)
                </p>
              </div>
              <h1 className="xl_400 text-gray_900 mt-2 mb-4">{data?.title}</h1>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 ">
                <p className="sm_400 text-gray_600">
                  {" "}
                  Sku :
                  <span className="sm_600 text-gray_900 ml-1">{data?.sku}</span>
                </p>
                <p className="sm_400 text-gray_600">
                  Availability :{" "}
                  <span className="sm_600 text-success_500 ml-1">
                    {" "}
                    {data?.availabilityStatus}
                  </span>
                </p>
                <p className="sm_400 text-gray_600">
                  Brand :{" "}
                  <span className="sm_600 text-gray_900 ml-1">
                    {data?.brand}
                  </span>
                </p>
                <p className="sm_400 text-gray_600">
                  {" "}
                  Category :
                  <span className="sm_600 text-gray_900 ml-1">
                    {data?.category}
                  </span>
                </p>
              </div>
              <div className="py-6 flex items-center gap-x-3  border-b border-gray_100">
                <h3 className="heading3 text-secondary_500">${data?.price}</h3>
                <h5 className="lg_400 text-gray_500">
                  <del>
                    $
                    {(
                      data?.price /
                      (1 - data?.discountPercentage / 100)
                    ).toFixed(2)}
                  </del>
                </h5>
                <p className="py-[5px] px-[10px]  bg-warning_400 text-gray_900 w-fit rounded">
                  {Math.round(data?.discountPercentage)}% OFF
                </p>
              </div>
              <div className="py-6  grid grid-cols-2 gap-x-6 gap-y-4 ">
                <div>
                  <p className="sm_400 text-gray_900">Width</p>
                  <span className="sm_400 text-gray_700">
                    {data?.dimensions?.width} cm/inch/m
                  </span>
                </div>
                <div>
                  <p className="sm_400 text-gray_900">Height</p>
                  <span className="sm_400 text-gray_700">
                    {data?.dimensions?.height} cm/inch/m
                  </span>
                </div>
                <div>
                  <p className="sm_400 text-gray_900">Depth</p>
                  <span className="sm_400 text-gray_700">
                    {data?.dimensions?.depth} cm/inch/m
                  </span>
                </div>
                <div>
                  <p className="sm_400 text-gray_900">Product QR </p>
                  <figure>
                    <img
                      src={data?.meta?.qrCode}
                      alt="productQR"
                      className="w-[50px]"
                    />
                  </figure>
                </div>
                <div className="flex gap-x-4 py-6">
                  <div className="flex gap-x-[37px] border-[2px] border-gray_100  px-5 items-center">
                    <button className="text-[30px]  text-gray_900 cursor-pointer">
                      -
                    </button>
                    <p className="text-sm font-medium text-gray_700"> 01</p>
                    <button className="text-[25px]  text-gray_900 cursor-pointer">
                      +
                    </button>
                  </div>
                  <button className=" px-[81px] bg-primary_500 whitespace-nowrap heading6 text-gray_00 flex items-center gap-x-3 cursor-pointer">
                    Add to card{" "}
                    <span className="text-lg">
                      {productInfoActivites[0].icon}
                    </span>
                  </button>
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
              <div className="p-4 border  border-gray_100 mt-6 rounded">
                <p className="pb-3 sm-400 text-gray_900">
                  100% Guarantee Safe Checkout
                </p>
                <figure>
                  <img src={pymentCardImage} alt="productDetails-images" />
                </figure>
              </div>
            </div>
          </div>
          <div className="py-[72px]">
            <MoreDetails productInfo={data || []} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
