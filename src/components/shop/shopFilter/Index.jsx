import React, { useEffect, useMemo, useState } from "react";
import BreadCrumb from "@/components/commonComponent/breadcrumb/BreadCrumb";
import Container from "@/components/commonComponent/containers/Container";
import FilterCategoryItems from "../leftPart/FilterCategoryItems";
import {
  allCategoryList,
  useCategory,
  useSingleCategoryProduct,
  useTotalItems,
} from "@/hooks/useCategory";
import ProductCard from "@/components/commonComponent/commonProductCard/ProductCard";
import PriceRangeSlider from "../leftPart/PriceRangeSlider";
import ShopCheckBox from "../leftPart/ShopCheckBox";
import PopularTags from "../leftPart/PopularTags";
import PriceRangePresets from "../leftPart/PriceRangePresets";
import RightSideFilter from "../rightPart/RightSideFilter";
import ProdtRightCont from "../rightPart/ProdtRightCont";
import BestDealProdtBannar from "@/components/commonComponent/bestDeal2/BestDealProdtBannar";


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
  // for searching
  const [search, setSearch] = useState("");
  // for sorting
  const [sortBy, setSortBy] = useState("");

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
  } = useTotalItems();

  // mainDataSource
  const mainDataSource = useMemo(() => {
    if (selectedData && !search.trim()) {
      return Array.isArray(singleCategoryProd) ? singleCategoryProd : [];
    }

    return Array.isArray(productData) ? productData : [];
  }, [selectedData, singleCategoryProd, productData, search]);

  const searchFilteredData = useMemo(() => {
    if (!search.trim()) return mainDataSource;

    const searchKeyword = search?.toLowerCase().split(" ").filter(Boolean);

    return mainDataSource?.filter((product) => {
      const searchAbleText = `
            ${product?.title || ""}
            ${product?.description || ""}
            ${product?.category || ""}
            ${product?.brand || ""}
            ${product?.tags?.flatMap((items) => items)?.join(" ") || ""}
         `.toLowerCase();

      return searchKeyword.every((items) => searchAbleText.includes(items));
    });
  }, [search, mainDataSource]);

  // filter price
  const filterPrice = useMemo(() => {
    const catchPriceData = searchFilteredData?.filter(
      (prodct) => prodct.price >= priceRange[0] && prodct.price <= priceRange[1]
    );
    return catchPriceData;
  }, [searchFilteredData, priceRange]);

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

    if (sortBy === "price-asc") {
      catchFinalValue = [...catchFinalValue].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-desc") {
      catchFinalValue = [...catchFinalValue].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "popular") {
      catchFinalValue = [...catchFinalValue].sort(
        (a, b) => b.rating - a.rating
      );
    }

    return catchFinalValue;
  }, [filterPrice, brand, pTags, sortBy]);

  // manage complex UI
  useEffect(() => {
    setBrand([]);
    setPriceRange([0, 100000]);
    setPTags("");
    setPricePresetRange([0, 0]);
    setSearch("");
    setSortBy("");
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

  // reset tag and brand
  useEffect(() => {
    if (search.trim()) {
      setBrand([]);
      setPTags("");
    }
  }, [search]);



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
                  selectedValue={selectedData}
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
              <div className="mt-7">
                <BestDealProdtBannar/>
              </div>
            </div>
            <div className="col-span-4">
              <div>
                <RightSideFilter
                  onSearch={setSearch}
                  onSort={setSortBy}
                  sortValue={sortBy}
                />
              </div>
              <div className="pt-4 pb-6"></div>

              <div className=" ">
                <ProdtRightCont allFilteredItems={finalResults || []} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ShopProductFilter;
