import React, { useState } from "react";

import { MerchantPartnerDetail } from "../../../../data/DashboardTabRow";
import Icon from "../../../../Icon";
import Modal from "../../../UI/Modal";
import Button from "../../button/Button";
import PartnerTabDetails from "./PartnerTabDetails";
import UserPopupDetails from "./UserPopupDetails";

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Statistics",
      data: [10, 20, 40],
      backgroundColor: ["#FB896B", "#4318FF", "#6AD2FF"],
    },
  ],
};

export default function MerchantPartnerDetailPopup({
  onClose,
  profileImg,
  partnerName,
  tierLogo,
  tierName,
  totalPartners,
  registeredDate,
}) {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Modal
      className="fixed top-[10vh] left-[20vw] w-full max-w-[57.75rem] bg-lightGrayBg z-30 text-center rounded-[1.25rem] shadow-popupDetail"
      onClose={onClose}
    >
      <div className="px-8 pt-8">
        {/* close button */}
        <Button className="absolute top-8 right-8" onClick={onClose}>
          <Icon icon="Close" size={24} className="text-grayBlue" />
        </Button>
        {/* partner details */}
        <UserPopupDetails
          onClose={onClose}
          profileImg={profileImg}
          userName={partnerName}
          shopName="Shop Name"
          totalPartners={totalPartners}
          registeredDate={registeredDate}
          tierLogo={tierLogo}
          tierName={tierName}
        />
        {/* tab titles */}
        <ul
          className="flex list-none gap-8 flex-wrap mt-8 flex-row"
          role="tablist"
        >
          {MerchantPartnerDetail.map((item) => (
            <li
              key={item.id}
              className={`${
                openTab === item.id
                  ? "text-title border-b-primary"
                  : "text-grayBlue border-b-transparent"
              } text-base leading-[1.375rem] pb-[0.625rem] border-b-2`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(item.id);
                }}
                data-toggle="tab"
                href={item.href}
                role="tablist"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* tab details */}
      <PartnerTabDetails openTab={openTab} data={data} />
    </Modal>
  );
}
