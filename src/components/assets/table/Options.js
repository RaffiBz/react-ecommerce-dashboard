import React, { useState, useRef } from "react";
import Icon from "../../../Icon";

import Button from "../button/Button";
import useOutsideClick from "../../util/useOutsideClick";

export default function Options({ children, addNew }) {
  //options visibility state
  const [isOpen, setIsOpen] = useState(false);
  //wrapper ref
  const wrapperRef = useRef(null);
  //options click handler
  const optionsHandler = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(wrapperRef, () => setIsOpen(false), isOpen);

  return (
    <td className="relative px-6 py-3 w-[3.313rem]">
      <div ref={wrapperRef}>
        {addNew && (
          <Button
            onClick={optionsHandler}
            className="bg-primary p-3 rounded-lg w-[2.625rem] h-[2.5rem]"
          >
            <Icon icon="Add" size={16} className="text-white" />
          </Button>
        )}
        {!addNew && (
          <Button onClick={optionsHandler}>
            <img
              width={24}
              height={24}
              src="/images/icons/grid-table/options.svg"
              alt="options"
            />
          </Button>
        )}
        {isOpen && (
          <div className="bg-white absolute top-[1.25rem] right-[5rem] shadow-actionsShadow rounded-md w-[7.5rem] px-4 pt-[0.188rem] pb-3 z-10">
            {children}
          </div>
        )}
      </div>
    </td>
  );
}
