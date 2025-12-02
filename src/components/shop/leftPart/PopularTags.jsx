import React from "react";

const PopularTags = ({ tagItems, onClicked, activeTag }) => {
  const hangleClicked = (items) => {
    onClicked(activeTag === items ? "" : items);

  };

  return (
    <div>
      <p className="label2 text-gray_900 pb-[18px]">Popular Tag</p>
      <div className="flex flex-wrap gap-[10px]">
        {tagItems?.map((items, index) => {
          return (
            <button
              className={`py-[6px] px-3 sm_500 text-900 capitalize cursor-pointer border  ${
                items === activeTag
                  ? "bg-primary_50 border-primary_500  "
                  : " border-gray_100  "
              }`}
              key={index}
              onClick={() => hangleClicked(items)}
            >
              {items}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTags;
