import { allIcons } from "@/helpers/IconProvider";
import {
  useGetSingleProduct,
  useSingleCategoryProduct,
} from "@/hooks/useCategory";

import React from "react";
import Button from "../commonButton/Button";

const BestDealProdtBannar = () => {
  // single  product
  const { data, isLoading, isError } = useGetSingleProduct(78);

  const { appleIcon, productInfoActivites } = allIcons;

  return (
    <div className="p-8 border-4 border-[#fa82325b] rounded">
      <figure>
        <img src={data?.thumbnail} alt="" />
      </figure>
      <div className="py-2">
        <div className="flex justify-center items-center gap-x-2">
          <span className="text-4xl">{appleIcon}</span>
          <h3 className="text-[28px] font-bold text-gray_900">{data?.brand}</h3>
        </div>
        <p className="text-center mt-2 ext-[28px] font-bold text-primary_500">
          SRIES 7
        </p>
        <h4 className="heading3 text-gary_900 text-center pt-3">
          Heavy on Features. Light on Price.
        </h4>
      </div>

      <p className="sm_400 text-gray_700  mt-4 flex whitespace-nowrap items-center">
        Only for:{" "}
        <span className="py-[6px]  px-2 ml-2 bg-warning_300 text-gray_900 rounded md_600 whitespace-nowrap">
          ${data?.price} USD
        </span>{" "}
      </p>
      <div className="pt-6 flex flex-col gap-y-3">
        <button className="flex items-center gap-2 text-gray_00 t  bg-primary_500 w-full py-[14px] rounded justify-center">
          <span className=""> {productInfoActivites[0].icon}</span> Add to Cart
        </button>
        <Button
          children={"View Details"}
          className={`!bg-gray_00 text-primary_500 border-3 border-primary_500`}
        />
      </div>
    </div>
  );
};

export default BestDealProdtBannar;
