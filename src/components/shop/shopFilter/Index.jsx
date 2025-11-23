import React, { useState } from "react";
import BreadCrumb from "@/components/commonComponent/breadcrumb/BreadCrumb";
import Container from "@/components/commonComponent/containers/Container";
import FilterCategoryItems from "../leftPart/FilterCategoryItems";
import {
  allCategoryList,
  useCategory,
  useSingleCategoryProduct,
} from "@/hooks/useCategory";
import { data } from "react-router-dom";
import ProductCard from "@/components/commonComponent/commonProductCard/ProductCard";
const ShopProductFilter = () => {
  // all category Product name list
  const {
    data: categoryData = [],
    isPending: categoryPending,
    isError: categoryError,
  } = allCategoryList();

  // here get data from child{FilterCategoryItems}
  const [selectedData, setSelectedData] = useState(null);

  // single category product list

  const {
    data: singleCategoryProd,
    isPending: singleCategoryLoading,
    isError: singleCategoryError,
  } = useSingleCategoryProduct(selectedData);
  

  // all products
  const {
    data: productData,
    isPending: productPending,
    isError: productError,
  } = useCategory();

  return (
    <div>
      <div>
        <BreadCrumb />
      </div>
      <div>
        <Container>
          <div className="pt-[40px] pb-[72px] grid grid-cols-5 gap-x-6">
            <div className="">
              <div>
                <FilterCategoryItems
                  categoryData={categoryData || []}
                  categoryPending={categoryPending}
                  categoryError={categoryError}
                  setCategoryValue={setSelectedData}
                  productData={productData}
                />
              </div>
            </div>
            <div className=" col-span-4">
              <div className="">
                {selectedData ? (
                  <div className="grid grid-cols-4 gap-4">
                       {
                          singleCategoryProd?.slice(0).map((items,index)=>{
                            return <ProductCard product={items} key={index}/>
                          })
                       }
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-4">
                    {productData?.slice(0, 24).map((items, index) => {
                      return <ProductCard product={items} key={index} />;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ShopProductFilter;
