import React from "react";
import Icon from "../../../Icon";

import Button from "../../assets/button/Button";

export default function AllElements() {
  return (
    <div>
      <span className="text-darkBlue text-lg leading-[1.375rem] font-medium">
        All Elements
      </span>
      <Button className="w-full flex mt-4 items-center justify-between border border-secondary rounded-lg p-2">
        <span className="text-darkBlue text-sm leading-[1.375rem]">
          Add Text
        </span>
        <Icon icon="Add" size={16} className="text-darkBlue" />
      </Button>
      <Button className="w-full flex mt-3 items-center justify-between border border-secondary rounded-lg p-2">
        <span className="text-darkBlue text-sm leading-[1.375rem]">
          Add Image
        </span>
        <Icon icon="Add" size={16} className="text-darkBlue" />
      </Button>
      <Button className="w-full flex mt-3 items-center justify-between border border-secondary rounded-lg p-2">
        <span className="text-darkBlue text-sm leading-[1.375rem]">
          Add Video
        </span>
        <Icon icon="Add" size={16} className="text-darkBlue" />
      </Button>
      <Button className="w-full flex mt-3 items-center justify-between border border-secondary rounded-lg p-2">
        <span className="text-darkBlue text-sm leading-[1.375rem]">
          Add Divider
        </span>
        <Icon icon="Add" size={16} className="text-darkBlue" />
      </Button>
      {/* action buttons */}
      <Button className="w-full flex mt-[1.875rem] items-center justify-center gap-2 bg-secondary rounded-lg py-[0.375rem]">
        <Icon icon="Publish" size={16} className="text-white" />
        <span className="text-buttonPrimary text-base leading-7">Publish</span>
      </Button>
      <Button className="w-full flex mt-[1.875rem] justify-center bg-primary rounded-lg py-[0.375rem]">
        <span className="text-buttonPrimary text-base leading-7">
          Save as Draft
        </span>
      </Button>
    </div>
  );
}
