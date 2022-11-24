import React, { useState, useRef } from "react";
import Icon from "../../../Icon";
import Button from "../button/Button";

export default function UploadProductImage({
  showPopupHandler,
  dimensions,
  btnPosition,
  product,
  icon,
}) {
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
    <div
      className={`${dimensions} relative rounded-[0.938rem] text-center border-dashed border-lightGray`}
    >
      {product && (
        <img
          src={file}
          className={`${dimensions} object-cover rounded-[0.938rem] border-dashed border-lightGray`}
          height={253}
          width={253}
          alt="profile"
          onClick={showPopupHandler}
        />
      )}
      {icon && (
        <Icon icon="Holder" className="w-[16px] h-[14px] text-[#4A7EF6]" />
      )}
      {isBrowseShown && (
        <div>
          <Button
            className={`${btnPosition} absolute mx-auto text-primary text-sm`}
            onClick={handleClick}
            type="button"
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
