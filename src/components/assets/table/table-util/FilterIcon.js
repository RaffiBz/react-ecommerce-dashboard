import React, { useState, useRef } from "react";

import Button from "../../button/Button";
import FilterInput from "./FilterInput";
import useOutsideClick from "../../../util/useOutsideClick";

export default function FilterIcon() {
  // filter input state
  const [isOpen, setIsOpen] = useState(false);
  //wrapper ref
  const wrapperRef = useRef(null);
  //toggle filter input
  const toggleFilterInput = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(wrapperRef, () => setIsOpen(false), isOpen);

  return (
    <div ref={wrapperRef}>
      <Button
        className="relative h-8 px-[0.875rem] py-[0.563rem] bg-white hover:ring-2 hover:ring-primary active:ring-primary rounded-md shadow-checkbox"
        onClick={toggleFilterInput}
      >
        <img
          width={12}
          height={14}
          src="/images/icons/grid-table/filter.svg"
          alt="filter"
        />
      </Button>
      {isOpen && (
        <FilterInput outsideClickHandler={toggleFilterInput} isOpen={isOpen} />
      )}
    </div>
  );
}
