import React from "react";

import Card from "../../UI/Card";
import AdminMerchantDetailPopup from "../popup/dashboard/AdminMerchantDetailPopup";

export default function MerchantInfoCard({
  profileImg,
  merchantName,
  shopName,
  totalPartners,
  onClick,
  onClose,
  merchantPopupShown,
  registeredDate,
}) {
  return (
    <>
      <Card
        className="flex gap-2 w-full max-w-[15.75rem] p-4 shadow-infoPopup rounded-[1.25rem] cursor-pointer"
        onClick={onClick}
      >
        {/* profile img */}
        <img
          src={profileImg}
          width={81}
          height={89}
          className="h-[89px] w-[81px] rounded-3xl object-cover"
          alt="icon"
        />
        <div className="block">
          <span className="text-lg text-title leading-[1.875rem] font-bold">
            {merchantName}
          </span>
          <span className="block text-base text-secondary leading-5 font-normal">
            {shopName}
          </span>
          <div className="mt-3 flex gap-1">
            <img
              src="/images/icons/settings/Partner.svg"
              width={16}
              height={16}
              alt="icon"
            />
            <span className="text-sm text-title capitalize">
              {totalPartners} partners
            </span>
          </div>
        </div>
      </Card>
      {merchantPopupShown && (
        <AdminMerchantDetailPopup
          onClose={onClose}
          profileImg={profileImg}
          merchantName={merchantName}
          shopName={shopName}
          totalPartners={totalPartners}
          registeredDate={registeredDate}
        />
      )}
    </>
  );
}
