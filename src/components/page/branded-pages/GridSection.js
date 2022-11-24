import React from "react";
import Icon from "../../../Icon";
import BlankCard from "../../assets/cards/BlankCard";
import BrandContentCard from "../../assets/cards/BrandContentCard";

export default function GridSection({
  className,
  title,
  items,
  nullNotification,
  cardStyle,
  imgSize,
  lineClamp,
  columns,
  displayCheckbox,
  newTemplate,
}) {
  return (
    <div className={className}>
      <span className="text-grayBlue font-bold text-lg leading-[1.375rem] text-left">
        {title}
      </span>
      {items.length === 0 && (
        <div className="flex gap-2 mt-4 items-center">
          <span className="text-lightGray text-base leading-5">
            {nullNotification}
          </span>
          <Icon icon="Add" size={12} className="text-[#868FA0]" />
        </div>
      )}
      <div className={`grid ${columns} gap-5 pt-6`}>
        {newTemplate && <BlankCard />}
        {items.map((item) => (
          <BrandContentCard
            key={item.id}
            cardStyle={cardStyle}
            imgSize={imgSize}
            brandImg={item.brandImg}
            brandName={item.brandName}
            description={item.description}
            lineClamp={lineClamp}
            displayCheckbox={displayCheckbox}
          />
        ))}
      </div>
    </div>
  );
}
