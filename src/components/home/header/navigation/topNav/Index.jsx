import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import React from "react";

const NavTop = () => {
  const { fellowIcon } = allIcons;

  return (
    <div className="bg-secondary_700 py-4">
      <Container>
        <div className="flex items-center justify-between">
          <p className="text-gray_00 label3">
            Welcome to Clicon online eCommerce store.{" "}
          </p>
          <div className="flex items-center gap-x-3 border-r-[2px] border-gray_00 pr-4">
            <p className="sm_400 text-gray_00">Follow us:</p>
            <ul className="flex items-center gap-x-3 text">
              {fellowIcon.map((items) => {
                return <li key={items.id} className="text-gray_00 cursor-pointer">{items.icon}</li>;
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavTop;
