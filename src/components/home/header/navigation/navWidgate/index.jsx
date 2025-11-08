import Button from "@/components/commonComponent/commonButton/Button";
import Container from "@/components/commonComponent/containers/Container";
import { allImages } from "@/helpers/ImageProvider";
import React from "react";

const NavWidget = () => {
  const { logo } = allImages;
  return (
    <div className="py-4 bg-gray_900">
      <Container>
        <div className="grid grid-cols-3">
          <div className="">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
          </div>
          <div className=" flex justify-center ">
            <div className="flex items-center gap-x-2">
              <p className="text-gray_00 label3">Up to</p>
              <h3 className="display4 text-warning_500">59%</h3>
              <p className="text-gray_00 xl_600">OFF  </p>
            </div>
          </div>
          <div className=" flex justify-end">
            <div>
              <Button children={"Shop now"}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavWidget;
