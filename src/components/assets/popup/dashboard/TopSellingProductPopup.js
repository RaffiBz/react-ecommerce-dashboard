import React, { useState } from "react";

import { TopSellingProductDetail } from "../../../../data/DashboardTabRow";
import Icon from "../../../../Icon";
import Modal from "../../../UI/Modal";
import Button from "../../button/Button";
import ProductPopupDetails from "./ProductPopupDetail";
import ProductTabDetails from "./ProductTabDetails";

export default function TopSellingProductPopup({
  onClose,
  productImg,
  productName,
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
        <ProductPopupDetails
          productImg={productImg}
          productName={productName}
          shopName="Shop Name"
          registeredDate={registeredDate}
        />
        {/* tab titles */}
        <ul
          className="flex list-none gap-8 flex-wrap mt-8 flex-row"
          role="tablist"
        >
          {TopSellingProductDetail.map((item) => (
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
      <ProductTabDetails openTab={openTab} />
    </Modal>
  );
}
