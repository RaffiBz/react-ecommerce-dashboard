import React from "react";

export default function UserPopupDetails({
  profileImg,
  userName,
  shopName,
  totalPartners,
  registeredDate,
  tierLogo,
  tierName,
}) {
  return (
    <div className="flex gap-6">
      {/* profile img */}
      <img
        src={profileImg}
        width={94}
        height={94}
        className="h-[94px] w-[94px] rounded-[0.938rem] object-cover"
        alt="icon"
      />
      {/* user description */}
      <div className="block">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-title leading-[2.063rem] font-bold">
            {userName}
          </span>
          <span className="text-sm text-mediumGray leading-[1.063rem]">
            {registeredDate}
          </span>
        </div>
        <span className="block text-base text-secondary text-left leading-[1.375rem] pt-1 font-normal">
          {shopName}
        </span>
        <div className="mt-[0.531rem] flex gap-2">
          <img
            src={
              totalPartners ? "/images/icons/settings/Partner.svg" : tierLogo
            }
            width={24}
            height={24}
            alt="icon"
          />
          {totalPartners && (
            <span className="text-sm text-title capitalize">
              {totalPartners} partners
            </span>
          )}
          {tierName && (
            <span className="text-sm text-title capitalize">
              {tierName} user
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
