import { instance } from "./axios";
// get all product
export async function fetchProductApi() {
  try {
    const respons = await instance.get("products");
    return respons.data.products;
  } catch (error) {
    console.error("Fetch Error is :" + error);
    throw error;
  }
}
// get single category product  list by according  to category
export let singleCategoryProductApi = async (productCategoryName = "") => {
  try {
    const productItemsRespons = await instance.get(
      `products/category/${productCategoryName}`
    );

    return productItemsRespons.data.products;
  } catch (error) {
    console.error("SingleProduct Error is : " + error);
    throw error;
  }
};
