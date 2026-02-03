import SignIn from "@/components/account/SignIn";
import Button from "@/components/commonComponent/commonButton/Button";
import Container from "@/components/commonComponent/containers/Container";
import AddToCartPop from "@/components/home/addToCardPop/AddToCartPop";
import { allIcons } from "@/helpers/IconProvider";
import { allImages } from "@/helpers/ImageProvider";
import { useTotalItems } from "@/hooks/useCategory";
import { globalSearch } from "@/reduxFeature/slices/globalSearchSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavMiddle = () => {
  // dispatch
  const dispatch = useDispatch();
  /////////////////////
  //// import images
  /////////////////////
  const { navMiddle } = allImages;
  /////////////////////
  //// import icons
  /////////////////////
  const { searchIcon, navMiddleIcon } = allIcons;

  // state manage
  const [inputValue, setInputValue] = useState("");
  const [debouceValue, setDebounceValue] = useState("");

  // debounch logic

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const { data, isLoading, isError } = useTotalItems();

  /**
   * render search input
   * add onChange event handler to control dynamic icon rendering .
   * using usestate to manage the icon state.
   * using trarnary operator to render the icon based on the state {visible / hidden}
   * using if condition to check the input value length
   */
  let [showIcon, setShowIcon] = useState(true);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowIcon(value.length === 0);
  };

  // manage state
  const [isAccountOpen, setIsAccountOpen] = useState(null);
  const [isAddToCardOpen, setIsAddToCardOpen] = useState(null);

  //data from add to car
  const addTocardItems = useSelector((state) => state.addCard.value);
  // handle event

  const handleAccount = (id) => {
    setIsAccountOpen((prev) => (prev === id ? null : id));
  };
  const handleCard = (id) => {
    setIsAddToCardOpen((prev) => (prev === id ? null : id));
  };
  const handleSearch = () => {
    if (!data && data?.length === 0) return;

    dispatch(globalSearch(debouceValue));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-secondary_700 py-5 border-t border-[#ffffff41]">
      <Container>
        <div className="grid grid-cols-4  items-center">
          <div className="">
            <picture>
              <img src={navMiddle} alt="middlenavImage" />
            </picture>
          </div>
          <div className="col-span-2  flex  justify-center ">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for anything..."
                className="bg-gray_00 w-[646px] px-5 py-[14px] placeholder:sm_400 focus:outline-none rounded"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {showIcon ? (
                <span className="absolute right-5 text-gray_900  top-[50%] -translate-y-1/2 text-xl">
                  {searchIcon}
                </span>
              ) : (
                <span className="absolute right-11 text-gray_900  top-[50%] -translate-y-1/2 text-xl">
                  <button
                    className="label2 py-[4px] px-[10px] text-gray_900  bg-warning_500 rounded  cursor-pointer"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </span>
              )}
            </div>
          </div>
          <div className=" flex  justify-end ">
            <ul className="flex gap-x-6 ">
              {navMiddleIcon.map((items) => {
                const isActive = items.id === isAccountOpen;
                // const cartIsActive = items.id === isAddToCardOpen;

                return items.itemName === "shopCart" ? (
                  <div className="relative">
                    <li key={items.id} className="relative">
                      <span
                        className="text-gray_00 text-[32px] cursor-pointer  bg-red_500 z-10"
                        onClick={() => handleAccount(items.id)}
                      >
                        {items.icon}
                      </span>

                      {isActive && (
                        <div className="absolute w-[380px] bg-rose-400 top-12 left-[-355px] z-60">
                          <AddToCartPop />
                        </div>
                      )}
                    </li>
                    <span className="absolute -top-[9px] -right-[3px] text-sm font-semibold text-secondary_700    bg-gray_00 rounded-full  h-5 w-5 flex items-center justify-center cursor-pointer   z-0 ">
                      {addTocardItems.length}
                    </span>
                  </div>
                ) : (
                  <Link to={items.to}>
                    <li key={items.id} className=" relative">
                      <span
                        onClick={() => handleAccount(items.id)}
                        className="text-gray_00 text-[32px] cursor-pointer"
                      >
                        {items.icon}{" "}
                      </span>

                      {isActive && items.id === 3 && (
                        <div className="absolute left-[-430px] top-12 w-[460px]   z-60">
                          <SignIn />
                        </div>
                      )}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavMiddle;
