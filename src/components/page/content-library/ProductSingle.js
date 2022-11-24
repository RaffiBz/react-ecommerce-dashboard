import React, { useState } from "react";
import Icon from "../../../Icon";
import Button from "../../assets/button/Button";
import DeletePopup from "../../assets/popup/DeletePopup";
import DownloadContentPopup from "../../assets/popup/DownloadContentPopup";
export default function ProductSingle({
  productName,
  productImg,
  deleteProduct,
  onOpen,
  onClose,
  isDownloadShown,
}) {
  const [isDeleteShown, setIsDeleteShown] = useState(false);

  const showPopupHandler = () => {
    setIsDeleteShown(true);
  };
  const hidePopupHandler = () => {
    setIsDeleteShown(false);
  };

  return (
    <>
      <div
        className="relative w-full h-full max-w-[255px] max-h-[255px] group rounded-[0.938rem] cursor-pointer"
        onClick={onOpen}
      >
        <img
          src={productImg}
          alt="product"
          className="w-[255px] h-[255px] object-cover rounded-[0.938rem]"
        />
        <div className="hidden gradientBg z-10 w-full h-full absolute top-0 group-hover:block rounded-[0.938rem]">
          {/* delete button */}
          {deleteProduct && (
            <Button
              className="absolute top-[18px] right-[18px]"
              onClick={showPopupHandler}
            >
              <Icon icon="Delete" className="w-[11px] h-[12px] text-white" />
            </Button>
          )}
          <div className="absolute bottom-6 left-4">
            <span className="text-lg text-white leading-[1.375rem]">
              {productName}
            </span>
          </div>
        </div>
      </div>
      {isDeleteShown && (
        <DeletePopup
          onClose={hidePopupHandler}
          subText={`You are about to delete ${productName} content`}
        />
      )}
      {isDownloadShown && (
        <DownloadContentPopup
          onClose={onClose}
          productName={productName}
          productImg={productImg}
        />
      )}
    </>
  );
}
