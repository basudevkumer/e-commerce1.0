import React from "react";
import { data } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";

const FilterCategoryItems = ({
  categoryData = [],
  categoryPending,
  categoryError,
  setCategoryValue,
  productData
}) => {
  if (categoryPending) {
    return <div>Loading...</div>;
  }
  //  handleItemsClick fn

  let handleItemsClick = (itemsValue) => {
     setCategoryValue(itemsValue)
  };

  return (
    <Virtuoso
      style={{ height: "400px" }}
      totalCount={categoryData.length}
      data={categoryData}
      itemContent={(index, items) => {
        return (
          <div className="flex items-center gap-x-2 py-2   ">
            <input
              type="radio"
              id={items.name}
              name="category"
              className="cursor-pointer"
              onChange={() => handleItemsClick(items.slug)}
            />
            <label
              htmlFor={items.name}
              className="cursor-pointer sm_400 text-gray_700 hover:text-gray_900 duration-300"
            >
              {items.name}
            </label>
          </div>
        );
      }}
    />
  );
};

export default FilterCategoryItems;
