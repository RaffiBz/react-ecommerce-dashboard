import React from "react";
import Icon from "../../../Icon";

import { Link } from "react-router-dom";
import Button from "../../assets/button/Button";
import SearchBar from "./SearchBar";

export default function SearchCreateNew({ handleSearch, createNew, link }) {
  return (
    <div className="flex justify-between">
      <SearchBar handleSearch={handleSearch} />
      {/* create new button */}
      {createNew && (
        <Link to={link}>
          <Button className="flex items-center w-full max-w-[14.5rem] bg-primary hover:bg-buttonHover justify-center px-[1.875rem] py-[0.375rem] rounded-lg">
            <Icon icon="Add" size={16} className="text-buttonPrimary" />
            <span className="pl-2 text-base text-buttonPrimary leading-7">
              Create New Content
            </span>
          </Button>
        </Link>
      )}
    </div>
  );
}
