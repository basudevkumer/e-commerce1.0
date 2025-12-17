import React from "react";
import { Virtuoso } from "react-virtuoso";

const FilterCategoryItems = ({
  categoryData = [],
  categoryPending,
  categoryError,
  setCategoryValue,
  selectedValue,
}) => {
  if (categoryPending) {
    return <div>Loading...</div>;
  }

  const handleItemsClick = (slug) => {
    //  toggle logic
    if (selectedValue === slug) {
      setCategoryValue(null); 
    } else {
      setCategoryValue(slug); 
    }
  };

  return (
    <Virtuoso
      style={{ height: "400px" }}
      data={categoryData}
      itemContent={(index, items) => {
        const isActive = selectedValue === items.slug;

        return (
          <div
            onClick={() => handleItemsClick(items.slug)}
            className={`
              flex items-center gap-x-2 py-2 px-[8px] rounded-md cursor-pointer
              ${isActive ? "bg-gray-200 text-gray-900" : "hover:bg-gray-100"}
            `}
          >
            {/* controlled radio */}
            <input
              type="radio"
              checked={isActive}
              readOnly
              className="cursor-pointer"
            />

            <label className="cursor-pointer sm_400 text-gray_700">
              {items.name}
            </label>
          </div>
        );
      }}
    />
  );
};

export default FilterCategoryItems;
