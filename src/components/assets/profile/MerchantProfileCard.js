import React from "react";
import Card from "../../UI/Card";
import ProfileForm from "../forms/ProfileForm";
import ImageInput from "../input/ImageInput";
import AccountActions from "./AccountActions";

export default function MerchantProfileCard() {
  return (
    <Card className="shadow-profileCard pt-12 max-w-[45rem] rounded-[1.25rem]">
      <ImageInput />
      <ProfileForm />
      <AccountActions />
    </Card>
  );
}
