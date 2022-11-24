import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Icon";

export default function BoxArrowLink({ text, link }) {
  return (
    <Link to={link} className="w-full">
      <div className="flex justify-between w-full bg-white max-w-[22.5rem] px-6 py-4 items-center shadow-profileCard rounded-lg cursor-pointer">
        <span className="text-title text-base leading-5 font-bold">{text}</span>
        <div className="flex gap-2 items-center">
          <Icon icon="Arrow Right" size={12} />
        </div>
      </div>
    </Link>
  );
}
