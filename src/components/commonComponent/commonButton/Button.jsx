import { allIcons } from "@/helpers/IconProvider";
import React from "react";

const Button = ({ children, className, onClick }) => {
  const { rightArrow } = allIcons;

  return (
    <button
      onClick={onClick}
      className={`
        px-6 bg-warning_500 rounded-md cursor-pointer heading7 
        text-gray_900 flex items-center gap-x-2 w-full
        ${className}
      `}
    >
      <span>{children}</span>
      <span>{rightArrow}</span>
    </button>
  );
};

export default Button;
