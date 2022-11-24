import React from "react";
import { Link } from "react-router-dom";

export default function RouthPathname({ link, firstPath, secondPath }) {
  return (
    <div className="flex text-lightGray text-base leading-7">
      <Link to={link}>
        <span className="cursor-pointer">{firstPath}</span>
      </Link>
      {secondPath && (
        <span>
          {">"} {secondPath}
        </span>
      )}
    </div>
  );
}
