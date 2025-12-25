import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const PopularTags = ({ tagItems, onClicked, activeTag }) => {
  const parentRef = useRef(null);
  const hangleClicked = (items) => {
    onClicked(activeTag === items ? "" : items);
  };

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(tagItems.length / 2),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
  });

  return (
    <div className="mt-4">
      <p className="label2 text-gray_900 pb-[18px]">Popular Tag</p>
      <div
        ref={parentRef}
        style={{
          height: `400px`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const startIndex = virtualItem.index * 2;
            const tags = tagItems.slice(startIndex, startIndex + 2);

            return (
              <div
                ref={rowVirtualizer.measureElement}
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                className="grid grid-cols-2 gap-x-3 "
              >
                {tags.map((item) => (
                  <button
                    key={item}
                    className={` h-[56px] py-3 px-3 sm_500 text-900  capitalize cursor-pointer border whitespace-wrap  ${
                      item === activeTag
                        ? "bg-primary_50 border-primary_500"
                        : "border-gray_100"
                    }`}
                    onClick={() => hangleClicked(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>

    // <div>
    //   <p className="label2 text-gray_900 pb-[18px]">Popular Tag</p>
    //   <div className="flex flex-wrap gap-[10px]">
    //     {tagItems?.map((items, index) => {
    //       return (
    //         <button
    //           className={`py-[6px] px-3 sm_500 text-900 capitalize cursor-pointer border  ${
    //             items === activeTag
    //               ? "bg-primary_50 border-primary_500  "
    //               : " border-gray_100  "
    //           }`}
    //           key={index}
    //           onClick={() => hangleClicked(items)}
    //         >
    //           {items}
    //         </button>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default PopularTags;
