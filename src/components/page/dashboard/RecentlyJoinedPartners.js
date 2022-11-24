import React from "react";
import Icon from "../../../Icon";

import Button from "../../assets/button/Button";
import Card from "../../UI/Card";

export default function RecentlyJoinedPartners({ totalPartners }) {
  return (
    <div className="bg-white pb-[5rem] px-8 flex gap-[8rem]">
      <div className="block">
        {/* total partners */}
        <div className="w-full max-w-[14.125rem]">
          <span className="text-3xl text-darkBlue leading-[2.375rem] font-medium capitalize">
            partners recently joined
          </span>
        </div>
        <div className="mt-3 flex gap-1 items-center">
          <Icon
            icon="Partner"
            title="Partner"
            size={16}
            className="bg-primary bg-opacity-30 rounded-[0.25rem]"
          />
          <span className="text-base text-grayBlue capitalize">
            total partners {totalPartners.length}
          </span>
        </div>
        {/* add new partners */}
        <Button className="flex gap-2 bg-white w-full max-w-[13.5rem] mt-[1.063rem] border border-checkboxBg rounded-lg text-center items-center px-[2.156rem] py-[0.375rem]">
          <Icon icon="Add" size={16} className="text-titleColor" />
          <span className="text-darkBlue text-base leading-7 capitalize">
            add new partner
          </span>
        </Button>
      </div>
      {/* recently added partners */}
      <div className="grid grid-cols-3 gap-[3.75rem]">
        {totalPartners.slice(0, 6).map((partner) => (
          <Card className="flex gap-4 items-center" key={partner.id}>
            <img
              src={partner.profileImg}
              width={44}
              height={44}
              className="h-[44px] w-[44px] rounded-full"
              alt="icon"
            />
            <div className="block">
              <span className="text-base text-title leading-5 font-medium">
                {partner.name}
              </span>
              <span className="block text-base text-primary leading-5 font-medium">
                {partner.registeredDate}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
