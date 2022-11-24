import React, { useState, useRef } from "react";
import Button from "../../button/Button";
import useOutsideClick from "../../../util/useOutsideClick";

export default function GetLink({ children, icon }) {
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
    <td className="relative px-6 py-3">
      <div>
        <Button onClick={optionsHandler}>
          <img width={24} height={24} src={icon} alt="options" />
        </Button>
        {isOpen && (
          <div className="bg-white absolute w-[13.938rem] top-[1.25rem] right-[5rem] shadow-actionsShadow rounded-md px-4 pt-[0.188rem] pb-3 z-10">
            {children}
          </div>
        )}
      </div>
    </td>
  );
}
