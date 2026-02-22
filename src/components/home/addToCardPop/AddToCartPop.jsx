import Button from "@/components/commonComponent/commonButton/Button";
import { allIcons } from "@/helpers/IconProvider";
import { removeCard } from "@/reduxFeature/slices/shopSlice";
import { useVirtualizer } from "@tanstack/react-virtual";

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCartPop = ({setIsAccountOpen}) => {
  // manage event
  const handleClicked  = ()=>{
    setIsAccountOpen(null)
  }
   // data form use Selector

  const subTotalCost = useSelector((state) => state.subTotal.value);

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
  const { plainClose } = allIcons;
  return (
    <div class="max-w-md mx-auto bg-gray_00 shadow-md rounded-md px-6 py-4">
      <div class="mb-4">
        <h2 class="md_500 text-gray_900 border-b pb-[14px] border-gray_400 ">
          Shopping Cart{" "}
          <span class="text-gray_600">({addToCardData.length})</span>
        </h2>
      </div>

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
                        <p class="sm_400 text-gray_900">{items.title}</p>
                        <p class="text-gray_600 sm_400 pt-1">
                          {items.quantity} x
                          <span class="text-secondary_500  sm_600">
                            ${items.price}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button
                      class="text-gray_400  text-2xl hover:text-danger_500 cursor-pointer"
                      onClick={() => handleRemove(items.id)}
                    >
                      {plainClose}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class="mt-5 border-t border-gray-200 pt-4 flex justify-between items-center">
        <span class="text-gray-700 sm_400">Sub-Total:</span>
        <span class="text-gray_900  sm_500">${subTotalCost.toFixed(2)}USD</span>
      </div>

      <div class="mt-4 space-y-2">
        <Link to={"/checkout"}>
          {" "}
          <Button
            className={`!text-gray_00  !bg-primary_500 justify-center`}
            children={"Checkout now"}
            onClick={handleClicked}
          />
        </Link>
        <Link to={"./shopping-card"}>
          <button className="border-2 border-primary_100 text-primary_500 w-full py-[10px] cursor-pointer"  onClick={handleClicked}>
            View Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddToCartPop;
