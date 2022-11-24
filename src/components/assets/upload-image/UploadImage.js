import React, { useState, useRef } from "react";
import Icon from "../../../Icon";
import Button from "../button/Button";

export default function UploadImage({
  register,
  fileId,
  errors,
  errorMessage,
}) {
  //image file source state
  const [file, setFile] = useState("/images/profile/image-holder.png");
  //browse icon visibility
  //   const [isBrowseShown, setIsBrowseShown] = useState(true);
  //remove icon visibility
  //   const [isRemoveShown, setIsRemoveShown] = useState(false);
  // input ref
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    // fileId.current.click();
    document.getElementById(fileId).click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    // setIsBrowseShown(false);
    // setIsRemoveShown(true);
  };

  //   const removeImagehandler = () => {
  //     setFile("/images/profile/image-holder.png");
  //     setIsRemoveShown(false);
  //     setIsBrowseShown(true);
  //   };

  return (
    <div className="block max-w-[17.813rem]">
      <img
        src={file}
        className="object-cover h-full max-h-[17.813rem] w-full max-w-[17.813rem] rounded-[0.938rem]"
        height={285}
        width={285}
        alt="profile"
      />
      {/* {isBrowseShown && ( */}
      <div>
        <Button
          className="flex gap-2 border border-checkboxBg rounded-lg px-[3.938rem] py-[0.375rem] mt-[0.875rem] items-center"
          onClick={handleClick}
          type="button"
        >
          <Icon icon="Upload" size={16} className="text-darkBlue" />
          <span className="text-base leading-7 text-title">
            Upload New Image
          </span>
        </Button>
        <input
          type="file"
          className="hidden"
          id={fileId}
          {...register(fileId, {
            required: errorMessage,
            validate: {
              lessThan10MB: (files) => files[0].size < 1000000 || "Max 1MB",
              acceptedFormats: (files) =>
                ["image/jpeg", "image/png"].includes(files[0]?.type) ||
                "Image format must be png or jpeg",
            },
          })}
          onChange={handleChange}
        />
      </div>
      {errors[fileId] && (
        <span className="text-xs leading-5 text-errorRed">
          {errors[fileId].message}
        </span>
      )}
      {/* )} */}
      {/* {isRemoveShown && (
        <Button
          className="absolute top-[5px] right-[5px]"
          onClick={removeImagehandler}
        >
          <img
            src="/images/profile/remove-image.svg"
            width={38}
            height={38}
            alt="delete"
          />
        </Button>
      )} */}
    </div>
  );
}
