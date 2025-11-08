import { allIcons } from "@/helpers/IconProvider";
import React from "react";

const Button = ({ children,className }) => {
  const { rightArrow } = allIcons;


  return (
    <div className={`px-6 bg-warning_500 rounded-md cursor-pointer heading7 text-gray_900 flex items-center gap-x-2 ${className}`}>
      <button className="cursor-pointer">{children}</button>
      <span>{rightArrow}</span>
    </div>
  );
};

export default Button;
