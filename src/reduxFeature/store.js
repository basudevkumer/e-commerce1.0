import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./slices/shopSlice";
import subTotalReducer from "./slices/subtotalSlice";
import discountReducer from "./slices/discountSlice";
import taxReducer from "./slices/taxSlice";
export const store = configureStore({
  reducer: {
    addCard: shoppingReducer,
    subTotal: subTotalReducer,
    totalDiscount: discountReducer,
    allTax: taxReducer,
  },
});
