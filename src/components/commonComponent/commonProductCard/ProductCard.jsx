import React from "react";
import Star from "@/components/commonComponent/commonStar/Star";
import { allIcons } from "@/helpers/IconProvider";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishItems } from "@/reduxFeature/slices/wishList";
import { addTocard } from "@/reduxFeature/slices/shopSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  //import from iconProvider
  const { productInfoActivites } = allIcons;
  // for handling the events
  const handleClick = (item) => {
    dispatch(addWishItems(item));
    dispatch(addTocard(item));
  };
  return (
    <div className="border border-gray_100  relative p-4 rounded  w-full  h-[320px] shadow-xl hover:-translate-y-[8px] transition duration-500 ease-in-out group">
      {/* tag or batch */}
      <span
        className={`absolute left-3 top-3 py-[5px] px-[10px] bg-danger_500 tiny_600 text-gray_00 rounded z-20`}
      >
        TAG
      </span>
      {/* product images */}
      <figure className="relative !overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[200px] bg-no-repeat bg-center object-cover flex justify-center "
        />
        <div className="bg-[#00000034] flex justify-center items-center gap-4 absolute w-full h-full left-0 top-[100%] group-hover:top-0  duration-700 ease-in-out ">
          {productInfoActivites.map((items, index) => {
            return (
              <Link
                to={
                  typeof items.to === "function"
                    ? items.to(product.id)
                    : items.to
                }
                className="text-xl bg-gray_00 p-3 h-fit  rounded-full hover:bg-primary_500 cursor-pointer hover:text-gray_00 transition duration-300 ease-in-out"
                key={index}
                onClick={() => handleClick(product)}
              >
                {items.icon}
              </Link>
            );
          })}
        </div>
      </figure>
      <div className="pt-6 ">
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
              2,
            )}
          </del>
          <p className="text-secondary_500 sm_600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
