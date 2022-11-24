import React from "react";
import { Link } from "react-router-dom";

import BlankCard from "../../assets/cards/BlankCard";

export default function BlankGrid() {
  return (
    <div className="w-full max-w-[15.938rem] max-h-[19.438rem] mt-8">
      <span className="text-grayBlue font-bold text-lg leading-[1.375rem] text-left">
        New Template
      </span>
      <Link to="/branded-pages/custom-branded-page">
        <BlankCard />
      </Link>
    </div>
  );
}
