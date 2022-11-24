import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Login from "../components/assets/forms/Login";
import Button from "../components/assets/button/Button";
import UploadMainImage from "../components/assets/upload-image/UploadMainImage";
import Icon from "../Icon";

export default function EditSignIn() {
  const dispatch = useDispatch();

  const signinText = useSelector(
    (state) => state.introContent.value.signinText
  );

  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const resetHandler = () => {
    console.log("reset");
  };

  return (
    <div className="flex h-screen">
      <div className="block w-[55%] px-20 pt-[3.75rem]">
        <Link to="/settings/branding-color">
          <Button className="absolute top-6 left-8 flex gap-1 items-center">
            <Icon icon="Arrow Left" size={16} className="text-grayBlue" />
            <span className="text-grayBlue text-base leading-5">Back</span>
          </Button>
        </Link>
        {/* top question */}
        <div className="flex justify-end items-center gap-2 mt-[1.25rem]">
          <span className="text-primary text-xs leading-3 md:text-sm md:leading-4 font-bold">
            <span>{`Don’t have an account ? register here`}</span>
          </span>
          <Icon icon="User" size={16} className="text-primary" />
        </div>
        {/* title content */}
        <div className="block lg:flex gap-20 text-left justify-between mt-[3.625rem] md:mt-[9.875rem]">
          <div className="block text-2xl leading-5 md:text-[3rem] md:leading-[3.469rem] w-full max-w-[15.813rem]">
            <span className="text-title whitespace-pre-line font-bold">
              Login to
            </span>
            <span className="block text-primary whitespace-nowrap font-bold">
              Ecommerce
            </span>
          </div>
          <div className="w-full max-w-[19.875rem] ">
            <textarea
              typeof="text"
              rows={5}
              className="w-full border-dashed mt-[0.375rem] outline-none bg-white border border-secondaryLightGray focus:border-primary p-3 placeholder:text-lightGray text-title text-base leading-6 resize-none"
              defaultValue={signinText}
              id="textId"
              {...register("textId")}
            />
          </div>
        </div>
        {/* login form */}
        <div className="mt-8 md:mt-16">
          <Login inactive={true} />
        </div>
      </div>
      <div className="bg-introBg w-[45%]">
        <UploadMainImage
          register={register}
          errors={errors}
          imageURL="imageURL"
        />
      </div>

      <div className="flex bg-white absolute bottom-8 left-[25vw] z-40 gap-8 w-full max-w-[43.938rem] shadow-profileCard px-8 py-6 mx-auto rounded-[0.938rem]">
        <div className="text-title text-base leading-5">
          Edit the infotmation and upload your branded image.
        </div>
        <Button
          className="flex gap-1 w-full items-center max-w-[8.625rem] "
          type="button"
          onClick={resetHandler}
        >
          <span className="text-grayBlue text-base leading-5">
            Reset all changes
          </span>
          <Icon icon="Reset" title="Reset" size={12} />
        </Button>
        <Button
          className="bg-primary text-buttonPrimary text-base leading-7 py-[0.375rem] text-center w-full max-w-[14.5rem] rounded-lg disabled:bg-lightGray"
          disabled={!isDirty}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
