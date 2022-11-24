import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../Icon";

export default function SideBarItem({ title, icon, id, link }) {
  const activeLink =
    "flex items-center gap-4 pt-9 text-primary text-md font-bold";
  const normalLink =
    "flex items-center gap-4 pt-9 text-md text-grayBlue hover:text-primary";

  return (
    <NavLink
      to={`/${link}`}
      key={id}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      {/* <img src={icon} width={24} height={24} alt="icon" /> */}

      <Icon icon={icon} title={title} size={24} />

      <span className="capitalize">{title}</span>
    </NavLink>
  );
}
