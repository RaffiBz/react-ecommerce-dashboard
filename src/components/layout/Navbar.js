import React from "react";
// import { useLocation } from "react-router-dom";

export default function Navbar({ children, path }) {
  // const location = useLocation();
  // const path = location.pathname.replace("/", "");
  return (
    <div className="flex w-full px-8 pb-[1.125rem] pt-[3.625rem] items-center justify-between">
      <div>
        {path && (
          <span className="text-title font-bold text-base md:text-2xl leading-5 md:leading-7 capitalize">
            {path}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
