// import fetchCategoryApi
import { fetchCategoryApi } from "@/api/categoryApi";
// imort useQuery
import { useQuery } from "@tanstack/react-query";

export function useCategory() {
  return useQuery({
    queryKey: "category",
    queryFn: fetchCategoryApi,
  });
}
