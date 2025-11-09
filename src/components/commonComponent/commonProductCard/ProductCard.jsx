import React from "react";
import Star from "@/components/commonComponent/commonStar/Star";
//import from iconProvider

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray_100  relative p-4 rounded cursor-pointer w-full  h-[320px] shadow-xl hover:-translate-y-[8px] transition duration-500 ease-in-out">
      {/* tag or batch */}
      <span
        className={`absolute left-3 top-3 py-[5px] px-[10px] bg-danger_500 tiny_600 text-gray_00 rounded z-20`}
      >
        TAG
      </span>
      {/* product images */}
      <picture>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[175px] bg-no-repeat bg-center object-cover flex justify-center"
        />
      </picture>
      <div className="pt-6  ">
        <div className="flex items-center   gap-x-1">
          {/* rating star */}
          <div className="flex gap-x-1">
            <Star starsCard={product.rating} />
          </div>
          <p className="tiny_400 text-gray_500 ">({product.reviews.length})</p>
        </div>
        {/* product Title */}
        <p className="sm_400 text-gray_900 py-2 truncate">{product.title}</p>
        {/* product Price */}
        <div className="flex  gap-x-[5px]">
          <del className="sm_400 text-gray_400">
            {" "}
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </del>
          <p className="text-secondary_500 sm_600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
