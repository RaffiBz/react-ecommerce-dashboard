import React from "react";
import TextCheckbox from "../../Global/TextCheckbox";

import Card from "../../UI/Card";
import ViewMoreButton from "../button/ViewMoreButton";

export default function BrandContentCard({
  cardStyle,
  imgSize,
  brandImg,
  brandName,
  description,
  lineClamp,
  displayCheckbox,
}) {
  return (
    <Card className={cardStyle}>
      <div className={imgSize}>
        <img
          src={brandImg}
          alt="product"
          className="object-cover w-full h-full rounded-[0.938rem]"
        />
      </div>
      <div className="mt-2">
        <span className="text-title text-base leading-5 font-medium">
          Welcome to {brandName}
        </span>
        <span
          className={`${lineClamp} inline-block text-sm text-grayBlue leading-[1.125rem] pt-2`}
        >
          {description}
        </span>
      </div>
      {displayCheckbox && (
        <div className="text-left pt-3">
          <TextCheckbox
            direction="flex-row-reverse"
            title="Display on left menu"
          />
          <TextCheckbox
            direction="flex-row-reverse"
            title="Display on dashboard"
          />
        </div>
      )}
      <div className="flex justify-end mt-5">
        <ViewMoreButton />
      </div>
    </Card>
  );
}
