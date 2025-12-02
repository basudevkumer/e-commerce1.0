import React, { useEffect, useMemo, useState } from "react";
import BreadCrumb from "@/components/commonComponent/breadcrumb/BreadCrumb";
import Container from "@/components/commonComponent/containers/Container";
import FilterCategoryItems from "../leftPart/FilterCategoryItems";
import {
  allCategoryList,
  useCategory,
  useSingleCategoryProduct,
} from "@/hooks/useCategory";
import ProductCard from "@/components/commonComponent/commonProductCard/ProductCard";
import PriceRangeSlider from "../leftPart/PriceRangeSlider";
import ShopCheckBox from "../leftPart/ShopCheckBox";
import PopularTags from "../leftPart/PopularTags";
import PriceRangePresets from "../leftPart/PriceRangePresets";
import RightSideFilter from "../rightPart/RightSideFilter";
const ShopProductFilter = () => {
  // state manage
  // price ranger preset and slider
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [pricePresetRange, setPricePresetRange] = useState([0, 0]);
  // here get data from child{FilterCategoryItems}
  const [selectedData, setSelectedData] = useState(null);
  // brand checked
  const [brand, setBrand] = useState([]);
  // popular tags
  const [pTags, setPTags] = useState("");

  // all category Product name list
  const {
    data: categoryData = [],
    isPending: categoryPending,
    isError: categoryError,
  } = allCategoryList();

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

  // mainDataSource
  const mainDataSource = useMemo(() => {
    const mainDataContainer = selectedData ? singleCategoryProd : productData;

    return mainDataContainer;
  }, [selectedData, singleCategoryProd, productData]);

  // filter price
  const filterPrice = useMemo(() => {
    const catchPriceData = mainDataSource?.filter(
      (prodct) => prodct.price >= priceRange[0] && prodct.price <= priceRange[1]
    );
    return catchPriceData;
  }, [mainDataSource, priceRange]);

  //available brand
  const availableBrand = useMemo(() => {
    const catchBrand = filterPrice
      ?.map((items) => items.brand)
      ?.filter(Boolean);

    return [...new Set(catchBrand)];
  }, [filterPrice]);

  // popular tags
  const availableTags = useMemo(() => {
    const catchTags = filterPrice
      ?.flatMap((itemTags) => itemTags.tags)
      .filter(Boolean);

    return [...new Set(catchTags)];
  }, [filterPrice]);

  // final results
  const finalResults = useMemo(() => {
    let catchFinalValue = filterPrice;

    if (brand.length > 0) {
      catchFinalValue = catchFinalValue?.filter((brandvalue) =>
        brand.includes(brandvalue.brand)
      );
    }

    if (pTags) {
      catchFinalValue = catchFinalValue?.filter((tagItems) =>
        tagItems.tags?.includes(pTags)
      );
    }

    return catchFinalValue;
  }, [filterPrice, brand, pTags]);

  // manage complex UI
  useEffect(() => {
    setBrand([]);
    setPriceRange([0, 100000]);
    setPTags("");
    setPricePresetRange([0, 0]);
  }, [selectedData]);

  //tag value reset || clear when brand clicked
  useEffect(() => {
    if (brand.length > 0) {
      setPTags("");
    }
  }, [brand]);

  // brand value reset || clear when clicked tTag
  useEffect(() => {
    if (pTags) {
      setBrand([]);
    }
  }, [pTags]);

  // reset the ranger input slider
  useEffect(() => {
    if (pricePresetRange[0] !== 0 || pricePresetRange[1] !== 0) {
      setPriceRange(pricePresetRange);
    }
  }, [pricePresetRange]);
  // reset the pricePresetRange
  useEffect(() => {
    setPricePresetRange([0, 0]);
  }, [priceRange]);
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

              <div>
                <PriceRangeSlider
                  value={priceRange}
                  onChange={setPriceRange}
                  min={0}
                  max={100000}
                  step={500}
                />
              </div>
              <div className="pt-7 pb-2 pl-1">
                <PriceRangePresets
                  onChanged={setPricePresetRange}
                  activePrice={priceRange}
                />
              </div>
              <div className="py-6">
                <ShopCheckBox
                  availableValue={availableBrand}
                  selected={brand}
                  onChange={setBrand}
                />
              </div>
              <div>
                <PopularTags
                  tagItems={availableTags}
                  onClicked={setPTags}
                  activeTag={pTags}
                />
              </div>
            </div>
            <div className="col-span-4">
              <div>
                <RightSideFilter />
              </div>
              <div className="pt-4 pb-6"></div>
              <div className=" grid grid-cols-4 gap-4 h-fit">
                {finalResults?.map((items, index) => {
                  return <ProductCard product={items} key={index} />;
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ShopProductFilter;
