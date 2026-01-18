import { allIcons } from "@/helpers/IconProvider";
import {
  addTocard,
  removeCard,
  updateQuanty,
} from "@/reduxFeature/slices/shopSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingLeft = () => {
  const catchData = useSelector((state) => state.addCard.value);

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(updateQuanty({ id, type: "increment" }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuanty({ id, type: "decrement" }));
  };

  const handleRemove = (id) => {
    dispatch(removeCard({ id }));
  };
  const { close, arrowIcon } = allIcons;
  return (
    <div className="border border-gray_100 rounded">
      <h6 className="lg_500 text-gray_900 py-5 px-6">Shopping Card</h6>
      <div className="grid grid-cols-6  items-center   gap-x-6  py-[10px] px-6 bg-gray_50">
        <div className="col-span-3 ">
          <p className="label4 text-gray_700">Products</p>
        </div>
        <div className="">
          {" "}
          <p className="label4 text-gray_700">Price</p>
        </div>
        <div className="">
          {" "}
          <p className="label4 text-gray_700">Quantity</p>
        </div>
        <div className="">
          <p className="label4 text-gray_700">Sub-Total</p>
        </div>
      </div>
      <div className="py-6 flex flex-col gap-y-4">
        {catchData?.map((items) => {
          return (
            <div
              className="grid grid-cols-6  items-center  gap-x-6  px-6 "
              key={items.id}
            >
              <div className="col-span-3  flex items-center gap-x-3">
                <span
                  className="text-gray_400 text-2xl hover:text-danger_500  ransition duration-300 ease-in-out"
                  onClick={() => handleRemove(items.id)}
                >
                  {close}
                </span>
                <figure>
                  <img
                    src={items.thumbnail}
                    alt="shoppingCard-image"
                    className="h-[72px] w-[72px] object-cover"
                  />
                </figure>
                <p className="sm_400 text-gray_900">{items.title}</p>
              </div>
              <div className="flex gap-2">
                <del className="text-gray_400 label4">
                  $
                  {(
                    items.price +
                    (items.price * items.discountPercentage) / 100
                  ).toFixed(2)}
                </del>
                <p className="label4 text-gray_700">${items.price}</p>
              </div>
              <div className="">
                <div className="flex items-center justify-center  border-[2px] border-gray_100 gap-x-4   ">
                  <button
                    className="text-[30px]  text-gray_900 cursor-pointer"
                    onClick={() => handleDecrement(items.id)}
                  >
                    -
                  </button>
                  <p className="text-sm font-medium text-gray_700">
                    {" "}
                    {items.quantity}
                  </p>
                  <button
                    className="text-[25px]  text-gray_900 cursor-pointer"
                    onClick={() => handleIncrement(items.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="">
                <p className="label4 text-gray_700">
                  $ {(items?.price * items?.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-6 flex justify-between">
        <Link to={"/shop"}>
          <button className="px-6 heading6 text-secondary_500 border-3 border-secondary_500 rounded cursor-pointer flex items-center gap-x-3 ">
            <span className="text-lg">{arrowIcon[0].icon}</span>
            Return to Shop
          </button>
        </Link>
        <Link to={"/update-card"}>
          <button className="px-6 heading6 text-secondary_500 border-3 border-secondary_500 rounded cursor-pointer">
            Update cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingLeft;
