import React from "react";
import { allIcons } from "@/helpers/IconProvider";
import Star from "@/components/commonComponent/commonStar/Star";
import { useDispatch } from "react-redux";
import { removeItems } from "@/reduxFeature/slices/compareSlice";
import { Link } from "react-router-dom";
import { addTocard } from "@/reduxFeature/slices/shopSlice";

const CompareColumn = ({ passCompareVlue }) => {

  const dispatch = useDispatch();
  const { close, navMiddleIcon } = allIcons;
  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };
  const handleAddItems = () => {
    dispatch(
      addTocard({
        ...passCompareVlue,
        quantity: 1,
      }),
    );
  };
  return (
    <div className="  border border-gray_100 ">
      <div className=" p-4 min-h-[480px] ">
        <div className="flex justify-center ">
          <span
            className="text-3xl text-gray_400 mb-4 hover:text-danger_500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleRemove(passCompareVlue?.id)}
          >
            {close}
          </span>
        </div>
        <figure>
          <img src={passCompareVlue?.thumbnail} alt="campare-img" />
        </figure>
        <p className="md_400 text-gray_900 line-clamp-3  my-4">
          {passCompareVlue?.description}
        </p>
        <div className="flex justify-center gap-x-3 items-center">
          <Link to={"/shopping-card"}>
              <button
                className=" px-[36px] flex gap-x-2 items-center text-gray_00 heading7 bg-primary_500 rounded cursor-pointer"
                onClick={handleAddItems}
              >
                Add to card{" "}
                <span className="text-lg">{navMiddleIcon[0].icon}</span>
              </button>
          </Link>
          <span className="p-3 border border-primary_100 text-primary_500 rounded cursor-pointer">
            {navMiddleIcon[1].icon}
          </span>
        </div>
      </div>
      <div>
        <div className="bg-gray_50  px-4 py-3 flex items  items-center  gap-x-4">
          <Star starsCard={passCompareVlue?.rating} />
          <p className="text-gray_500 sm_400">
            ({passCompareVlue?.reviews?.length})
          </p>
        </div>
        <div className="bg-gray_00 py-3 px-4">
          <p className="text-secondary_500 sm_400  !font-bold">
            ${passCompareVlue?.price}
          </p>
        </div>
        <div className="bg-gray_50  px-4 py-3 ">
          <p className="text-gray_900 sm_400">
            {passCompareVlue?.brand || "Vendor"}{" "}
          </p>
        </div>
        <div className="bg-gray_00 py-3 px-4">
          <p className="text-gray_900 sm_400">
            {passCompareVlue?.brand || "Local/Vendor"}
          </p>
        </div>
        <div className="bg-gray_50  px-4 py-3 ">
          <p className="text-gray_900 sm_400">{passCompareVlue?.sku}</p>
        </div>
        <div className="bg-gray_00 py-3 px-4">
          <p className="text-success_500 sm_400 !font-bold">
            {passCompareVlue?.availabilityStatus}
          </p>
        </div>
        <div className="bg-gray_50  px-4 py-3 ">
          <p className="text-gray_900 sm_400">
            <span>{(passCompareVlue?.dimensions?.height).toFixed(2)}</span>{" "}
            inches,{" "}
            <span>
              {(passCompareVlue?.dimensions?.height * 2.5).toFixed(2)}
            </span>{" "}
            cm
          </p>
        </div>
        <div className="bg-gray_00 py-3 px-4">
          <p className="text-gray_900 sm_400">
            {passCompareVlue?.weight} gm/kg/tn
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompareColumn;
