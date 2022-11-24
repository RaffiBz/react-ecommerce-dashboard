import React, { useState, useRef } from "react";
import Button from "../button/Button";

export default function ImageInput() {
  //image file source state
  const [file, setFile] = useState("/images/profile/image-holder.png");
  //browse icon visibility
  const [isBrowseShown, setIsBrowseShown] = useState(true);
  //remove icon visibility
  const [isRemoveShown, setIsRemoveShown] = useState(false);
  // input ref
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setIsBrowseShown(false);
    setIsRemoveShown(true);
  };

  const removeImagehandler = () => {
    setFile("/images/profile/image-holder.png");
    setIsRemoveShown(false);
    setIsBrowseShown(true);
  };

  return (
    <div className="relative max-w-[11.625rem] max-h-[11.438rem] rounded-[0.938rem] text-center px-12">
      <img
        src={file}
        className="object-cover max-w-[11.625rem] max-h-[11.438rem] rounded-[0.938rem]"
        height={183}
        width={186}
        alt="profile"
      />
      {isBrowseShown && (
        <div>
          <Button
            className="absolute mx-auto text-primary text-sm bottom-4 left-[7.313rem]"
            onClick={handleClick}
          >
            Browse
          </Button>
          <input
            type="file"
            onChange={handleChange}
            className="hidden"
            ref={hiddenFileInput}
          />
        </div>
      )}
      {isRemoveShown && (
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
      )}
    </div>
  );
}
