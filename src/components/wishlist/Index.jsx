import React from "react";
import Container from "../commonComponent/containers/Container";
import BreadCrumb from "../commonComponent/breadcrumb/BreadCrumb";
import { allIcons } from "@/helpers/IconProvider";
import { useDispatch, useSelector } from "react-redux";
import { addTocard } from "@/reduxFeature/slices/shopSlice";
import { Link } from "react-router-dom";
import { removeWishItems } from "@/reduxFeature/slices/wishList";

const WishListContainer = () => {
  const { navMiddleIcon, close } = allIcons;
  //dispatch
  const dispatch = useDispatch();

  // for bring data from redux store
  const useWishItems = useSelector((state) => state.wishList.value);

  const handleAddItems = (items) => {
    dispatch(addTocard({ ...items, quantity: 1 }));
  };
  const handleRemove = (items) => {
    dispatch(removeWishItems(items));
  };
  return (
    <div>
      <BreadCrumb />
      <Container>
        <div className="my-[72px] border  py-6 rounded border-gray_100">
          <h5 className="text-gray_900 lg_500  mb-5 px-6">Wishlist</h5>
          <div>
            <div className="py-[10px] px-6 bg-gray_50  grid grid-cols-7 gap-x-3">
              <div className=" col-span-3">
                <p className="text-gray_700 label4">Products</p>
              </div>
              <div className=" ">
                <p className="text-gray_700 label4">Price</p>
              </div>
              <div className=" ">
                <p className="text-gray_700 label4">Stock Status</p>
              </div>
              <div className=" col-span-2">
                <p className="text-gray_700 label4">Actions</p>
              </div>
            </div>
            {useWishItems?.map((items, index) => {
              return (
                <div
                  className=" px-6  grid grid-cols-7 gap-x-3 items-center"
                  key={index}
                >
                  <div className=" col-span-3 grid grid-cols-4 gap-x-5  items-center">
                    <div className="">
                      <figure>
                        <img
                          src={items.thumbnail}
                          alt="wishList Images"
                          className=""
                        />
                      </figure>
                    </div>
                    <div className="col-span-3">
                      <p className="line-clamp-2 sm_400 text-gray_700 ">
                        {items.description}
                      </p>
                    </div>
                  </div>
                  <div className=" ">
                    <p className="text-gray_900 sm_500">${items.price}</p>
                  </div>
                  <div className="">
                    <p className="text-success_500 sm_600">
                      {items.availabilityStatus}
                    </p>
                  </div>
                  <div className=" col-span-2 flex gap-x-6 items-center ">
                    <Link to={"/shopping-card"}>
                      <button
                        className=" px-[55px] flex gap-x-4 items-center text-gray_00 heading7 bg-primary_500 rounded cursor-pointer"
                        onClick={() => handleAddItems(items)}
                      >
                        Add to card
                        <span className="text-lg">{navMiddleIcon[0].icon}</span>
                      </button>
                    </Link>

                    <span
                      className="text-2xl text-gray_400 transition duration-300 ease-in-out hover:text-danger_500"
                      onClick={() => handleRemove(items)}
                    >
                      {close}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WishListContainer;
