import React from "react";

import Card from "../../UI/Card";
import MerchantPartnerDetailPopup from "../popup/dashboard/MerchantPartnerDetailPopup";

export default function PartnerDetailCard({
  profileImg,
  partnerTier,
  registeredDate,
  merchant,
  partnerName,
  onClick,
  onClose,
  partnerPopupShown,
  shopName,
  tierName,
}) {
  return (
    <>
      <Card
        className="flex bg-white shadow-infoPopup rounded-[0.938rem] px-4 pt-4 pb-[1.438rem] w-full h-full items-center text-center justify-center cursor-pointer"
        onClick={onClick}
      >
        {/* profile image */}
        <div className="block">
          <div className="h-[114px] w-full max-w-[111px] mx-auto">
            <img
              src={profileImg}
              width={114}
              height={111}
              className="h-full rounded-3xl"
              alt="profile"
            />
          </div>
          {/* partner tier */}
          <div className="block shadow-tierRounded rounded-full w-[54px] h-[54px] mt-4 mx-auto">
            <img src={partnerTier} width={54} height={54} alt="tier" />
          </div>
          {/* partner name and merchant */}
          <div className="block ml-2 pt-4">
            <span className="text-lg text-title leading-[1.875rem] font-bold">
              {partnerName}
            </span>
            {/* incase of superadmin show merchant name */}
            {merchant && (
              <div className="block">
                <span className="text-grayBlue text-sm leading-[1.375rem]">
                  Merchant:
                </span>
                <span className="inline-block text-grayBlue text-base leading-[1.375rem]">
                  {merchant}
                </span>
              </div>
            )}
            {/* incase of merchant show regsitered date */}
            {registeredDate && (
              <div className="block">
                <span className="text-grayBlue text-sm leading-[1.375rem]">
                  Total number of sales:
                </span>
                <span className="text-grayBlue text-base leading-[1.375rem] block">
                  10,534
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
      {partnerPopupShown && (
        <MerchantPartnerDetailPopup
          onClose={onClose}
          profileImg={profileImg}
          partnerName={partnerName}
          shopName={shopName}
          registeredDate={registeredDate}
          tierLogo={partnerTier}
          tierName={tierName}
        />
      )}
    </>
  );
}
