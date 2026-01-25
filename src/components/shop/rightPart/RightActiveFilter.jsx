import { allIcons } from "@/helpers/IconProvider";
import { activefiltered } from "@/reduxFeature/slices/activeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RightActiveFilter = ({
  activeValue,
  countfilteredProduct,
  searchItems,
}) => {
  // dispatch and useSelector
  const dispatch = useDispatch();
  const activeITems = useSelector((state) => state.activeItems.value);

  

  // for icon
  const { plainClose } = allIcons;

  //for state handle

  useEffect(() => {
    let newArray = [...activeITems];

    if (
      activeValue &&
      typeof activeValue === "string" &&
      !newArray.includes(activeValue)
    ) {
      newArray.push(activeValue);
    }

    if (
      searchItems &&
      searchItems.trim() !== "" &&
      !newArray.includes(searchItems)
    ) {
      newArray.push(searchItems);
    }

    if (newArray.length > activeITems.length) {
      dispatch(activefiltered(newArray));
    }
  }, [activeValue, searchItems]);

  const handleRemove = (itemToRemove) => {
    const updatedArray = activeITems.filter((i) => i !== itemToRemove);
    dispatch(activefiltered(updatedArray));
  };

  return (
    <div className="py-3 px-6 bg-gray_50 rounded  grid grid-cols-12 gap-x-3">
      <div className="col-span-10 ">
        <div className=" grid grid-cols-6 ">
          <p className="text-gray_600 sm_400 ">Active Filters:</p>
          <div className="col-span-5 ">
            <div className="grid grid-cols-5  gap-y-3 gap-x-4">
              {activeITems?.map((items, index) => {
                return (
                  <div className="flex items-start gap-x-1 " key={index}>
                    <span className="text-gray_900 sm_400 inline-block capitalize ">
                      {items}
                    </span>
                    <button
                      className="text-gray_400  cursor-pointer  pt-[3px]"
                      onClick={() => handleRemove(items)}
                    >
                      {plainClose}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <p className="text-gray_900 sm_600 flex gap-x-2 ">
          {" "}
          {countfilteredProduct?.length}{" "}
          <span className="text-gray_600 sm_400">Results found.</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default RightActiveFilter;
