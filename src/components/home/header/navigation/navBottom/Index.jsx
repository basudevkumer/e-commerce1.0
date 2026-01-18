import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import { allCategoryList, useTotalItems } from "@/hooks/useCategory";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const NavBottom = () => {
  // manage state
  const [isOpen, setIsOpen] = useState(false);
  const [isClildOpen, setIsChildOpen] = useState(null);
  const [isSubChildOpen, setIsSubChildOpen] = useState(null);
  const [hasAnyBrand, setHasAnyBrand] = useState([]);


  const handleChild = (id) => {
    setIsChildOpen((prev) => (prev === id ? null : id));
  };

  const handleClicked = () => {
    setIsOpen(!isOpen);
  };

  // categories data array
  const {
    data: categoryData,
    isPending: categoryPending,
    isError: categoryError,
  } = allCategoryList();

  const {
    data: allItems,
    isPending: allDataPending,
    isError: allDataError,
  } = useTotalItems();

  // update state
  const handleSubChild = (category) => {
    if (allItems?.length && typeof category === "string") {
      const filteredItems = allItems.filter(
        (item) => item.category === category
      );

      const uniqueBrands = filteredItems.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.brand === item.brand)
      );

      setIsSubChildOpen(uniqueBrands);

      const catchBrand = uniqueBrands
        ?.map((items) => items?.brand)
        ?.filter(Boolean);

      setHasAnyBrand(catchBrand);
    }
  };
  const hasBrand = (slug) => {
    if (!allItems?.length) return false;

    return allItems.some((item) => item.category === slug && item.brand);
  };

  // if (isPending) {
  //   return <div>loading......</div>;
  // }

  //for tanstack vurtual
  // The scrollable element for categorylist
  const categoryRef = useRef(null);

  // The virtualizer of category
  const categoryRowVirtualizer = useVirtualizer({
    count: categoryData?.length || 1000,
    getScrollElement: () => categoryRef.current,
    estimateSize: () => 35,
  });
  // The scrollable element for  subcategorylist
  const subCategoryRef = useRef(null);

  // The virtualizer of subcategory
  const subCategoryRowVirtualizer = useVirtualizer({
    count: isSubChildOpen?.length || 1000,
    getScrollElement: () => subCategoryRef.current,
    estimateSize: () => 35,
  });

  //  add object for categories items
  const { allItemsIcon, chevron } = allIcons;
  return (
    <div className="py-4 border-b border-gray_100">
      {/* add container for bottom navigation */}
      <Container>
        <div className="flex justify-between items-center  ">
          <div className="flex  gap-x-5">
            <div className="relative">
              <button
                onClick={handleClicked}
                className={`cursor-pointer py-[14px] px-6 flex items-center gap-x-2 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer  sm_500 text-gray_600 ${
                  isOpen ? "!bg-primary_500 !text-gray_00 " : ""
                }`}
              >
                All Category{" "}
                <span>{isOpen ? chevron[1].icon : chevron[0].icon}</span>
              </button>

              {isOpen &&
                isSubChildOpen?.length > 0 &&
                hasAnyBrand?.length > 0 && (
                  <div className="bg-gray_00 shadow-xl absolute top-[65px] right-[-320px] z-60 w-[200px] ">
                    <div
                      ref={subCategoryRef}
                      style={{ height: "400px", overflow: "auto" }}
                    >
                      <div
                        style={{
                          height: `${subCategoryRowVirtualizer.getTotalSize()}px`,
                          width: "100%",
                          position: "relative",
                        }}
                      >
                        
                        {subCategoryRowVirtualizer
                          .getVirtualItems()
                          .map((virtualItem) => {
                            const index = virtualItem.index;
                            const brandItem = isSubChildOpen[index];

                            if (!brandItem) return null;

                            return (
                              
                              <div
                                key={virtualItem.key}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: `${virtualItem.size}px`,
                                  transform: `translateY(${virtualItem.start}px)`,
                                }}
                                className="p-5 text-gray_600 hover:text-gray_900  hover:bg-gray_50 cursor-pointer transition duration-300 ease-in-out sm_400 flex items-center"
                              >
                                {brandItem.brand}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}

              {isOpen && (
                <div className=" absolute top-[65px] left-0 bg-gray_00 z-50 w-[245px] shadow-xl">
                  {/* The scrollable element for your list */}
                  <div
                    ref={categoryRef}
                    style={{
                      height: `400px`,
                      overflow: "auto", // Make it scroll!
                    }}
                  >
                    {/* The large inner element to hold all of the items */}
                    <div
                      style={{
                        height: `${categoryRowVirtualizer.getTotalSize()}px`,
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      {/* Only the visible items in the virtualizer, manually positioned to be in view */}
                      {categoryRowVirtualizer
                        .getVirtualItems()
                        .map((virtualItem) => {
                          const items = categoryData[virtualItem.index];

                          const isActive = isClildOpen === virtualItem.index;

                          return (
                            <div
                              key={virtualItem.key}
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: `${virtualItem.size}px`,
                                transform: `translateY(${virtualItem.start}px)`,
                              }}
                              className={`py-2 px-4 flex justify-between  items-center hover:bg-gray_50  transition duration-300 ease-in-out   sm_400 text-gray_600  hover:text-gray_900 ${
                                isActive ? "text-gray_900 bg-gray_50 " : ""
                              }`}
                              onClick={() => handleChild(virtualItem.index)}
                            >
                              <button
                                className="cursor-pointer"
                                onClick={() => handleSubChild(items?.slug)}
                              >
                                {items?.name}
                              </button>
                              {hasBrand(items?.slug) && (
                                <span>
                                  {isActive ? chevron[0].icon : chevron[2].icon}
                                </span>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[0].icon}</span>
              <p className="sm_400 text-gray_600"> Track Order</p>
            </div>
            <Link to={"/compare"}>
             <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5 group">
              <span className="text-gray_600 ">{allItemsIcon[1].icon}</span>
              <p className="sm_400 text-gray_600"> Compare</p>
            </div>
            </Link>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[2].icon}</span>
              <p className="sm_400 text-gray_600"> Customer Support</p>
            </div>
            <div className="py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer flex items-center gap-x-2.5">
              <span className="text-gray_600 ">{allItemsIcon[3].icon}</span>
              <p className="sm_400 text-gray_600"> Need Help</p>
            </div>
          </div>
          <div className="flex items-center py-[14px] px-6 rounded-[2px] hover:bg-gray_50 transition duration-150 ease-in-out cursor-pointer gap-x-2.5   ">
            <span className="text-gray_900 ">{allItemsIcon[4].icon}</span>
            <p className="lg_400 text-gray_900"> +1-202-555-0104</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBottom;
