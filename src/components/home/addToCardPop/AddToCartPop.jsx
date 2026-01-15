import React from "react";

const AddToCartPop = () => {
  return (
    <div class="max-w-md mx-auto bg-white shadow-md rounded-md p-5">
      <div class="mb-4">
        <h2 class="text-lg font-semibold text-gray-800">
          Shopping Cart <span class="text-gray-500">(02)</span>
        </h2>
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Camera"
              class="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p class="text-gray-800 font-medium">
                Canon EOS 1500D DSLR Camera Body+ 18-55 mm
              </p>
              <p class="text-gray-500 text-sm">
                1 x <span class="text-blue-500 font-semibold">$1,500</span>
              </p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-red-500">&times;</button>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Headphones"
              class="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p class="text-gray-800 font-medium">
                Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone
              </p>
              <p class="text-gray-500 text-sm">
                2 x <span class="text-blue-500 font-semibold">$269</span>
              </p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-red-500">&times;</button>
        </div>
      </div>

      <div class="mt-5 border-t border-gray-200 pt-4 flex justify-between items-center">
        <span class="text-gray-600 font-medium">Sub-Total:</span>
        <span class="text-gray-800 font-bold text-lg">$2038.00 USD</span>
      </div>

      <div class="mt-4 space-y-2">
        <button class="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-150 font-semibold flex justify-center items-center gap-2">
          CHECKOUT NOW &rarr;
        </button>
        <button class="w-full border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-50 transition duration-150 font-semibold">
          VIEW CART
        </button>
      </div>
    </div>
  );
};

export default AddToCartPop;
