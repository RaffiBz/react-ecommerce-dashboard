import React from "react";

import Card from "../../UI/Card";
import Icon from "../../../Icon";
import ContentInfoInput from "../input/ContentInfoInput";
import UploadProductImage from "../upload-image/UploadProductImage";
import Button from "../button/Button";

export default function ContentInfoCard({
  errors,
  register,
  showPopupHandler,
}) {
  return (
    <div className="block max-w-[18.75rem]">
      <Card className="w-full px-6 pt-6 pb-4 shadow-profileCard rounded-[1.25rem]">
        <ContentInfoInput errors={errors} register={register} />
        <div className="mt-[1.063rem]">
          <UploadProductImage
            dimensions="max-w-[15.813rem] max-h-[15.813rem]"
            showPopupHandler={showPopupHandler}
            btnPosition="bottom-[5.625rem] left-[6.438rem]"
            product={true}
          />
        </div>
        {/* Add image button */}
        <Button className="w-full text-base bg-primary text-buttonPrimary leading-7 mt-[1.063rem] rounded-lg py-2">
          Add
        </Button>
        {/* Add new platform button */}
      </Card>
      {/* add new partners */}
      <Button className="flex gap-2 bg-white w-full mt-[1.563rem] border border-checkboxBg rounded-lg text-center items-center justify-center py-[0.375rem]">
        <Icon icon="Add" size={16} className="text-titleColor" />
        <span className="text-title text-base leading-7 capitalize">
          add new partner
        </span>
      </Button>
    </div>
  );
}
