import React from "react";
import { Link } from "react-router-dom";

import { SideBarItems } from "../../../data/SideBarItems";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <div className="bg-sideBarBackground pt-[4rem] pl-8 pb-10 drop-shadow-sideBar h-screen overflow-y-auto">
      <Link
        to="/"
        className="items-center gap-3 flex text-2xl font-bold text-titleBlack whitespace-pre-wrap"
      >
        Ecommerce{"\n"}Dashboard
      </Link>
      <div className="mt-16">
        {SideBarItems.map((item) => (
          <SideBarItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
