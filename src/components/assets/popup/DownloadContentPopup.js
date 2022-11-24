import React, { useState } from "react";
import Icon from "../../../Icon";
import Modal from "../../UI/Modal";
import Button from "../button/Button";
import ProductPlatformGrid from "../../page/content-library/ProductPlatformGrid";

export default function DownloadContentPopup({
  onClose,
  productName,
  productImg,
}) {
  const [imageSrc, setImageSrc] = useState("/images/product.png");

  return (
    <Modal
      className="absolute top-[15vh] left-[25vw] w-full max-w-[66.125rem] bg-white z-30 text-center rounded-[1.25rem] py-16 px-[3.625rem]"
      onClose={onClose}
    >
      {/* close button */}
      <Button className="absolute top-8 right-8" onClick={onClose}>
        <Icon icon="Close" size={24} className="text-grayBlue" />
      </Button>
      <div className="flex w-full gap-[2.375rem]">
        {/* image view */}
        <div className="w-full max-w-[26.875rem] h-full max-h-[26.875rem]">
          <img
            src={imageSrc}
            className="w-full h-full rounded-[2rem]"
            alt="preview"
          />
        </div>
        {/* product name + platforms */}
        <div className="block w-full max-w-[28rem] text-left">
          <span className="text-2xl text-title pl-4 leading-[1.875rem] font-bold">
            {productName}
          </span>
          <div className="mt-[1.875rem]">
            <ProductPlatformGrid
              downloadButton={true}
              productImg={productImg}
              setImageSrc={setImageSrc}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
