import React, { useState } from "react";
import Button from "../../assets/button/Button";
import BestPerformerCard from "../../assets/cards/BestPerformerCard";

export default function BestPerformerPartners({ bestPerformers }) {
  //partner popup state
  const [partnerPopupShown, setPartnerPopupShown] = useState(false);
  //partner popup handler functions
  const showPartnerPopupHandler = () => {
    setPartnerPopupShown(true);
  };
  const hidePartnerPopupHandler = () => {
    setPartnerPopupShown(false);
  };

  return (
    <div className="px-8 pt-[3.75rem]">
      <div className="flex justify-between">
        <span className="text-title text-3xl leading-[2.344rem] font-medium">
          Best Performers
        </span>
        <a href="/partners">
          <Button className="text-grayBlue text-lg font-medium">
            view all
          </Button>
        </a>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-4">
        {bestPerformers.map((partner) => (
          <BestPerformerCard
            key={partner.id}
            profileImg={partner.profileImg}
            partnerName={partner.name}
            registeredDate={partner.registeredDate}
            partnerTier={partner.tierIcon}
            tierName={partner.tier}
            onClick={showPartnerPopupHandler}
            onClose={hidePartnerPopupHandler}
            partnerPopupShown={partnerPopupShown}
          />
        ))}
      </div>
    </div>
  );
}
