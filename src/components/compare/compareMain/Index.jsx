import BreadCrumb from "@/components/commonComponent/breadcrumb/BreadCrumb";
import Star from "@/components/commonComponent/commonStar/Star";
import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import React from "react";
import CompareColumn from "../compareColumn/CompareColumn";
import { useSelector } from "react-redux";

const CompareMain = () => {
  const compareValue = useSelector((state) => state.compareItems.value);

  return (
    <div className="">
      <BreadCrumb />
      <Container>
        <div className="grid grid-cols-5 gap-y-8  my-[72px]  ">
          <div className=" border border-gray_100  ">
            <div className=" p-4 min-h-[480px] "></div>
            <div>
              <div className="bg-gray_50  px-4 py-3 ">
                <p className="text-gray_700 sm_400">Customer feedback:</p>
              </div>
              <div className="bg-gray_00 py-3 px-4">
                <p className="text-gray_700 sm_400">Customer feedback:</p>
              </div>
              <div className="bg-gray_50  px-4 py-3 ">
                <p className="text-gray_700 sm_400">Sold by:</p>
              </div>
              <div className="bg-gray_00 py-3 px-4">
                <p className="text-gray_700 sm_400">Brand:</p>
              </div>
              <div className="bg-gray_50  px-4 py-3 ">
                <p className="text-gray_700 sm_400">Model:</p>
              </div>
              <div className="bg-gray_00 py-3 px-4">
                <p className="text-gray_700 sm_400">Stock status:</p>
              </div>
              <div className="bg-gray_50  px-4 py-3 ">
                <p className="text-gray_700 sm_400">Size:</p>
              </div>
              <div className="bg-gray_00 py-3 px-4">
                <p className="text-gray_700 sm_400">Weight:</p>
              </div>
            </div>
          </div>

          {compareValue?.map((items, index) => {
            return <CompareColumn passCompareVlue={items} key={index} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default CompareMain;
