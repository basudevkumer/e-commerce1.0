// import fetchCategoryApi
import { fetchProductApi, singleCategoryProductApi } from "@/api/categoryApi";
// imort useQuery
import { useQuery } from "@tanstack/react-query";

export function useCategory() {
  return useQuery({
    queryKey: ["allproduct"],
    queryFn: fetchProductApi,
  });
}

export let useSingleCategoryProduct = (singleProductCategoryName) => {
  return useQuery({
    queryKey: ["category", singleProductCategoryName],
    queryFn: () => singleCategoryProductApi(singleProductCategoryName),
    enabled: !!singleProductCategoryName,
  });
};
