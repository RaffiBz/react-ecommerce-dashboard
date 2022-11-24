import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ProductNameInput from "../input/ProductNameInput";
import Button from "../button/Button";
import ContentInfoCard from "../cards/ContentInfoCard";
import ProductPlatformGrid from "../content-library/ProductPlatformGrid";
import LargeImagePopup from "../popup/LargeImagePopup";

export default function CreateNewContentForm({ products, contentInfo }) {
  //popup state
  const [isShown, setIsShown] = useState(false);
  //popup handler functions
  const showPopupHandler = () => {
    setIsShown(true);
  };

  const hidePopupHandler = () => {
    setIsShown(false);
  };

  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit handler function
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="flex justify-between">
        {/* title and save button */}
        <span className="text-title font-bold text-base md:text-2xl leading-5 md:leading-7 capitalize">
          Create new content
        </span>
        <Button
          className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-2 text-center w-full max-w-[8.625rem] rounded-lg"
          type="submit"
        >
          Save
        </Button>
      </div>
      {/* subtitle and product name */}
      <div className="block w-full max-w-[23rem] mt-2">
        <span className="text-sm text-mediumGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ac
          maecenas placerat cursus.
        </span>
        <div className="mt-6">
          <ProductNameInput errors={errors} register={register} />
        </div>
      </div>
      {/* Product Image */}
      <div className="mt-12">
        <span className="text-title font-bold text-lg md:leading-7 capitalize">
          Product Image
        </span>
        <span className="block text-sm text-mediumGray">
          This image will appear in Content Library
        </span>
      </div>
      <div className="flex mt-8 w-full gap-6">
        <ContentInfoCard
          errors={errors}
          register={register}
          showPopupHandler={showPopupHandler}
        />
        <ProductPlatformGrid products={products} deleteButton={true} />
      </div>
      {isShown && (
        <LargeImagePopup
          products={products}
          onClose={hidePopupHandler}
          contentInfo={contentInfo}
        />
      )}
    </form>
  );
}
