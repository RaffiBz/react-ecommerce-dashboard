import React from "react";
import Icon from "../../../Icon";
import Modal from "../../UI/Modal";
import Button from "../button/Button";
import CancelButton from "../button/CancelButton";
import DeleteButton from "../button/DeleteButton";

export default function DeletePopup({ onClose, subText }) {
  return (
    <Modal
      className="absolute top-[30vh] left-[35vw] w-full max-w-[29rem] bg-white z-30 text-center rounded-[1.25rem]"
      onClose={onClose}
    >
      <div className="block relative w-full max-w-[48.75rem] text-center bg-white rounded-lg py-9">
        <Button
          className="absolute top-[0.625rem] right-[0.563rem]"
          onClick={onClose}
          type="button"
        >
          <Icon icon="Close" size={16} className="text-darkBlue" />
        </Button>
        <div className="w-full mx-auto">
          <span className="block text-xl text-title font-medium font-mainFont">
            Sure you want to delete?
          </span>
          {subText && (
            <span className="block text-base text-mediumGray font-medium font-mainFont">
              {subText}
            </span>
          )}
          <div className="mt-8 mx-auto">
            <div className="flex gap-6 justify-center">
              <CancelButton onClick={onClose} />
              <DeleteButton />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
