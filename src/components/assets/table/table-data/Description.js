import React, { useState } from "react";
import DescriptionPopup from "./DescriptionPopup";

export default function Description({ description }) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <td
      className="relative px-6 py-3"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <span className="text-subtitle text-sm leading-5 line-clamp-2">
        {description}
      </span>
      {hover && <DescriptionPopup descriptionFull={description} />}
    </td>
  );
}
