// import react
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

// import container
import Container from "@/components/commonComponent/containers/Container";
// import useCategory
import { useCategory } from "@/hooks/useCategory";
import { allIcons } from "@/helpers/IconProvider";

const Index = () => {
  // Destructure useCategory values
  const { data, isError, isLoading } = useCategory();

  // showing of loading skeleton
  if (isLoading) {
    return (
      <div className="pt-10">
        <Container>
          <div className="grid grid-cols-6 gap-x-[30px]">
            {[...new Array(6)].map((_, index) => {
              return (
                <div className="shadow-xl border border-gray-100 w-full h-[236px] flex flex-col items-center gap-y-4 pt-[24px] px-[28px] rounded-md animate-pulse">
                  {/* Image Skeleton */}
                  <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-gray-100"></div>

                  {/* Title Skeleton */}
                  <div className="w-32 h-5 bg-gray-200 rounded-full mt-2"></div>

                  {/* Optional: Extra small lines to mimic subtitle or extra text */}
                  <div className="w-24 h-4 bg-gray-200 rounded-full mt-3"></div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
  // for showing error
  if (isError)
    return (
      <Container>
        <p>Error is Appear</p>
      </Container>
    );

  // import images from allIcons
  let { arrowIcon } = allIcons;

  return (
    <div className="pt-10">
      <Container>
        {/* show swiper slider */}
        <div className="   relative  ">
          {/* data comes from useCategory destructure */}
          <button className="custom-swiper-button-prev absolute left-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] border border-primary_500 rounded-full flex justify-center items-center bg-primary_500 z-10 cursor-pointer">
            <span className="text-xl text-gray_00">{arrowIcon[0].icon}</span>
          </button>
          <button className="custom-swiper-button-next absolute right-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] border border-primary_500 rounded-full flex justify-center items-center bg-primary_500 z-10 cursor-pointer">
            <span className="text-xl text-gray_00">{arrowIcon[1].icon}</span>
          </button>

          <Swiper
            slidesPerView={6}
            spaceBetween={18}
            freeMode={true}
            // grabCursor={true}
            // cssMode = {true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
            // custom button css
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
          >
            {/* data comes form useCategory() */}
            {data.map((items, index) => {
              return (
                <SwiperSlide >
                  <div className="shadow-xl border border-gray_100 w-full h-[236px] flex flex-col items-center gap-y-4   px-[28px] py-[24px] rounded-md  !h-[270px] ">
                    <picture>
                      <img src={items.thumbnail} alt="smallCategorImages" />
                    </picture>
                    <p className="md_500">{items.title}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Index;
