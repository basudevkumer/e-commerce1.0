import Container from "@/components/commonComponent/containers/Container";
import React from "react";
import ShoppingLeft from "../shoppingCardLeft/ShoppingLeft";
import ShoppingRight from "../shppingCardRight/ShoppingRight";
import { useSelector } from "react-redux";

const SoppingMainComponent = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 pt-[72px] pb-[80px] gap-x-6">
          <div className=" col-span-2  ">
            <ShoppingLeft />
          </div>
          <div className="">
            <ShoppingRight />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SoppingMainComponent;
