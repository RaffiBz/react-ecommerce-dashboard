import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIntroContent } from "../../../store/features/setIntroContent";
import Icon from "../../../Icon";

import Button from "../button/Button";

export default function UploadMainImage({
  register,
  errorMessage,
  imageURL,
  errors,
}) {
  const dispatch = useDispatch();
  const mainImageURL = useSelector(
    (state) => state.introContent.value.imageURL
  );

  const [file, setFile] = useState("/images/profile/image-holder.png");

  const handleClick = (event) => {
    // fileId.current.click();
    document.getElementById(imageURL).click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    dispatch(
      setIntroContent({
        imageURL: URL.createObjectURL(e.target.files[0]),
      })
    );
    setFile(URL.createObjectURL(e.target.files[0]));
    // setIsBrowseShown(false);
    // setIsRemoveShown(true);
  };

  return (
    <div className="w-full h-screen">
      <img
        src={mainImageURL}
        className="object-cover w-full h-full"
        alt="profile"
      />
      {/* {isBrowseShown && ( */}
      <div className="bg-subtitle bg-opacity-60 z-10 w-full h-full absolute top-0 ">
        <div className="flex gap-8 items-center absolute bottom-[40vh] left-[5vw] w-full max-w-[31.063rem] py-6 px-8 bg-white rounded-[0.938rem] shadow-profileCard">
          <div className="block max-w-[13.5rem] text-base leading-5">
            <div className="flex gap-2">
              <span className="text-darkBlue">prefered size</span>
              <div>
                <Icon icon="Width Arrow" size={24} />
                <span className="text-subtitle">788</span>
                <Icon icon="Height Arrow" size={24} />
                <span className="text-subtitle">900</span>
              </div>
            </div>
            <span className="text-subtitle">Preferred resolution 72 dpi</span>
          </div>
          <Button
            className="flex gap-2 border border-secondary rounded-lg px-8 py-[0.375rem] items-center"
            onClick={handleClick}
            type="button"
          >
            <Icon icon="Upload" size={16} />
            <span className="text-base leading-7 text-title">Upload image</span>
          </Button>
        </div>
        <input
          type="file"
          className="hidden"
          id={imageURL}
          {...register(imageURL, {
            required: errorMessage,
            validate: {
              //   lessThan10MB: (files) => files[0].size < 1000000 || "Max 1MB",
              acceptedFormats: (files) =>
                ["image/jpeg", "image/png"].includes(files[0]?.type) ||
                "Image format must be png or jpeg",
            },
          })}
          onChange={handleChange}
        />
      </div>
      {errors[imageURL] && (
        <span className="text-xs leading-5 text-errorRed">
          {errors[imageURL].message}
        </span>
      )}
    </div>
  );
}
