import Button from "@/components/commonComponent/commonButton/Button";
import { allIcons } from "@/helpers/IconProvider";
import React from "react";

const AddToCartPop = () => {
  const { plainClose } = allIcons;
  return (
    <div class="max-w-md mx-auto bg-gray_00 shadow-md rounded-md px-6 py-4">
      <div class="mb-4">
        <h2 class="md_500 text-gray_900 border-b pb-[14px] border-gray_400 ">
          Shopping Cart <span class="text-gray_600">(02)</span>
        </h2>
      </div>

      <div class="space-y-4 py-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Camera"
              class="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p class="sm_400 text-gray_900">
                Canon EOS 1500D DSLR Camera Body+ 18-55 mm
              </p>
              <p class="text-gray_600 sm_400 pt-1">
                1 x <span class="text-secondary_500  sm_600">$1,500</span>
              </p>
            </div>
          </div>
          <button class="text-gray_400  text-2xl hover:text-danger_500 cursor-pointer">
            {plainClose}
          </button>
        </div>
      </div>

      <div class="mt-5 border-t border-gray-200 pt-4 flex justify-between items-center">
        <span class="text-gray-700 sm_400">Sub-Total:</span>
        <span class="text-gray_900  sm_500">$2038.00 USD</span>
      </div>

      <div class="mt-4 space-y-2">
        <Button
          className={`!text-gray_00  !bg-primary_500 justify-center`}
          children={"Checkout now"}
        />
        <button className="border-2 border-primary_100 text-primary_500 w-full py-[10px] cursor-pointer">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartPop;
