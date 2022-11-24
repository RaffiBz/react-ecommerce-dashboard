import React, { useState } from "react";
import Button from "../../button/Button";
import Icon from "../../../../Icon";

export default function FilterOptions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[10.688rem] px-3 py-[0.563rem]">
      <div className="max-w-md mx-auto">
        <div className="relative">
          <div className="h-10 bg-white flex border border-secondaryLightGray items-center px-[0.75rem] rounded-[0.313rem]">
            <span className=" outline-none text-sm w-full">Plan</span>
            <Button onClick={toggleDropdown}>
              <Icon
                icon="Arrow Down"
                size={20}
                className={`${isOpen ? "rotate-180" : ""} text-darkBlue`}
              />
            </Button>
          </div>
          {isOpen && (
            <div className="absolute w-full bg-white rounded-[0.313rem] shadow-dropDown">
              <span className="block">Merchants</span>
              <span className="block">Partners</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
