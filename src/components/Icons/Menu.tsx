import { LucideProps } from "lucide-react";
import React from "react";

const Menu = ({ ...props }: LucideProps) => {
  return (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Menu_Alt_02">
          <path
            id="Vector"
            d="M11 17H19M5 12H19M11 7H19"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Menu;
