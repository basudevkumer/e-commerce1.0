import React from "react";

const ShopCheckBox = ({ availableValue, selected, onChange }) => {
  const handleChange = (items) => {
    let newBrandArry;

    if (selected?.includes(items)) {
      newBrandArry = selected?.filter((brandItems) => brandItems !== items);
    } else {
      newBrandArry = [...selected, items];
    }

    onChange(newBrandArry);
  };

  return (
    <div>
      <p className="label2 text-gray_900 pb-4">Popular Brands</p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3">
        {availableValue?.map((items, index) => {
          return (
            <div
              className="flex items-center gap-x-2 group cursor-pointer"
              key={index}
            >
              <input
                type="checkBox"
                id={items}
                name="brand-group"
                className=""
                checked={selected?.includes(items)}
                onChange={() => handleChange(items)}
              />
              <label
                htmlFor={items}
                className="sm_400 text-gray_700 cursor-pointer "
              >
                {items}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCheckBox;
