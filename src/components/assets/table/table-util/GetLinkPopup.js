import React, { useRef, useState, useEffect } from "react";
import Icon from "../../../../Icon";
import Modal from "../../../UI/Modal";
import Button from "../../button/Button";
import CopyClipboardPopup from "../../info-popup/CopyClipboardPopup";

export default function GetLinkPopup({ onClose }) {
  //copied to clipboard popup
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isCouponCopied, setIsCouponCopied] = useState(false);
  //input refs
  const linkRef = useRef(null);
  const couponRef = useRef(null);
  //copy link handler
  const copyLink = () => {
    navigator.clipboard.writeText(linkRef.current.value);
    setIsLinkCopied(true);
  };
  //copy coupon handler
  const copyCoupon = () => {
    navigator.clipboard.writeText(couponRef.current.value);
    setIsCouponCopied(true);
  };
  //close popup
  useEffect(() => {
    let timeout;
    if (isLinkCopied) {
      timeout = setTimeout(() => setIsLinkCopied(false), 2000);
    }
    if (isCouponCopied) {
      timeout = setTimeout(() => setIsCouponCopied(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [isLinkCopied, isCouponCopied]);

  return (
    <Modal
      className="absolute top-[15vh] left-[25%] w-full max-w-[48.75rem] bg-white z-30 text-center rounded-[1.25rem]"
      onClose={onClose}
    >
      <div className="block relative w-full max-w-[48.75rem] text-center justify-center items-center bg-white rounded-[1.25rem] py-[6.813rem]">
        <Button className="absolute top-8 right-8" onClick={onClose}>
          <Icon icon="Close" size={24} className="text-grayBlue" />
        </Button>
        <div className="w-full max-w-[38rem] mx-auto">
          <span className="block text-3xl text-title font-medium font-mainFont">
            Get a shareable link & code
          </span>
          <span className="block text-base text-subtitle font-normal font-mainFont pt-2">
            You can share this discount link & code with your customers via
            email or social media. This discount will be applied at checkout
            when customers use this link.
          </span>
          <div className="mt-[2.063rem] mx-auto">
            <div className="relative flex gap-2 justify-center">
              <input
                className="w-full max-w-[25rem] border border-secondaryLightGray placeholder:text-lightGray text-sm leading-[1.375rem] px-3 py-2 rounded-[0.313rem]"
                type="text"
                placeholder="https://adelaparkson.ecomm.com"
                defaultValue="https://adelaparkson.ecomm.com"
                ref={linkRef}
              />

              <Button
                className="bg-primary text-white text-sm leading-5 md:text-base md:leading-7 py-2 text-center w-full max-w-[7.563rem] rounded-lg"
                onClick={copyLink}
              >
                Copy Link
              </Button>
              {isLinkCopied && (
                <CopyClipboardPopup infoMessage="Link Copied to Clipboard" />
              )}
            </div>
            <div className="relative flex gap-2 mt-4 justify-center">
              <input
                className="w-full max-w-[25rem] border border-secondaryLightGray placeholder:text-lightGray text-sm leading-[1.375rem] px-3 py-2 rounded-[0.313rem]"
                type="text"
                placeholder="https://adelaparkson.ecomm.com/discount/copuncode"
                defaultValue="https://adelaparkson.ecomm.com.com/discount/copuncode"
                ref={couponRef}
              />
              <Button
                className="bg-primary text-white text-sm leading-5 md:text-base md:leading-7 py-2 text-center w-full max-w-[7.563rem] rounded-lg"
                onClick={copyCoupon}
              >
                Copy Code
              </Button>
              {isCouponCopied && (
                <CopyClipboardPopup infoMessage="Coupon Copied to Clipboard" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
