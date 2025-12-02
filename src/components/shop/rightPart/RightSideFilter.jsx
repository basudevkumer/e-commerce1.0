import { allIcons } from "@/helpers/IconProvider";
import React from "react";

const RightSideFilter = () => {
  const { searchIcon } = allIcons;
  return (
    <div className="flex justify-between items-center">
      <label
        className="flex items-center  gap-x-[10px] p-3 border border-gray_100 w-fit rounded"
        htmlFor="search"
      >
        <input
          type="text"
          className=" w-[380px]  text-gray_900 sm_400  border-0 placeholder:text-gray_500 placeholder:sm_400"
          id="search"
          placeholder="Search for anything..."
          name="search"
        />
        <span className="text-[30px]" id="search">
          {searchIcon}
        </span>
      </label>
      <div className="flex items-center gap-x-2">
        <p className="sm_400 text-gray_900"> Sort by:</p>
        <select className="border-gray_100 text-gray_700 ">
          <option value="" className="sm_400 text-gray_700">
            Most Popular
          </option>
          <option value="" className="sm_400 text-gray_700">
            Most Popular
          </option>
          <option value="" className="sm_400 text-gray_700">
            Most Popular
          </option>
          <option value="" className="sm_400 text-gray_700">
            Most Popular
          </option>
        </select>
      </div>
    </div>
  );
};

export default RightSideFilter;
