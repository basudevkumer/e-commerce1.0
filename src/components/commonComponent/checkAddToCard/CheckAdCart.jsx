import Button from "@/components/commonComponent/commonButton/Button";
import { allIcons } from "@/helpers/IconProvider";
import { removeCard } from "@/reduxFeature/slices/shopSlice";
import { useVirtualizer } from "@tanstack/react-virtual";

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckAdCart = () => {
  // data form use Selector

  const addToCardData = useSelector((state) => state.addCard.value);

  //  dispatch and event handle
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeCard({ id }));
  };

  // The scrollable element for your list
  const parentRef = useRef(null);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: addToCardData.length || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });

  return (
    <div class="max-w-md mx-auto bg-gray_00  rounded-md  py-4">
      
      {/* The scrollable element for your list */}
      <div
        ref={parentRef}
        style={{
          height: `300px`,
          overflow: "auto", // Make it scroll!
        }}
      >
        {/* The large inner element to hold all of the items */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {/* Only the visible items in the virtualizer, manually positioned to be in view */}
          {rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const items = addToCardData[virtualItem.index];
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <div class="space-y-4 py-5">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <img
                        src={items?.thumbnail}
                        alt="Camera"
                        class="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p class="sm_400 text-gray_900 truncate">{items.title}</p>
                        <p class="text-gray_600 sm_400 pt-1 flex gap-x-1">
                          {items.quantity} x
                          <span class="text-secondary_500  sm_600">
                            ${items.price}
                          </span>
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
};

export default CheckAdCart;
