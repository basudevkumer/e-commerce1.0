import { instance } from "./axios";

export async function fetchCategoryApi() {
  try {
    const respons = await instance.get("products");
    return respons.data.products
  } catch (error) {
    console.error("Fetch Error is :" + error);
    throw error;
  }
}
