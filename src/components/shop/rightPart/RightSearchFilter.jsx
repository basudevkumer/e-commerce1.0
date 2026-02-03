import { allIcons } from "@/helpers/IconProvider";
import { globalSearch } from "@/reduxFeature/slices/globalSearchSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RightSideFilter = ({ onSearch, onSort, sortValue }) => {
  const dispatch = useDispatch();

  const sortOptions = [
    { label: "Select Shorting", value: "" },
    { label: "Most Popular", value: "popular" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    // { label: "Avg. Customer Review", value: "rating" },
    // { label: "Newest Arrivals", value: "newest" },
    // { label: "Best Sellers", value: "bestseller" },
  ];
  // state managment
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // clicked event
  const handleClicked = () => {
    onSearch(value.trim());
    setValue("");
    // dispatch(globalSearch(null));
  };
  // clicked inter button
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      onSearch(value.trim());
      setValue("");
      // dispatch(globalSearch(null));
    }
  };
  // handleShort
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  // for icon
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
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyPress}
        />
        <span
          className="text-[30px] cursor-pointer "
          onClick={handleClicked}
          id="search"
        >
          {searchIcon}
        </span>
      </label>
      <div className="flex items-center gap-x-2">
        <p className="sm_400 text-gray_900"> Sort by:</p>
        <select
          className="border-gray_100 text-gray_700 "
          onChange={handleSort}
          value={sortValue}
        >
          {/* <option value="">Select Shorting</option> */}
          {sortOptions.map((items, index) => {
            return (
              <option
                value={items.value}
                className="sm_400 text-gray_700"
                key={index}
              >
                {items.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default RightSideFilter;
