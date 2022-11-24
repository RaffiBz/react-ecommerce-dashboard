import React from "react";
import Card from "../../UI/Card";
import CreatePartnerForm from "./CreatePartnerForm";

export default function AddNewMerchantAdminForm() {
  return (
    <Card className="shadow-profileCard p-12 max-w-[45rem] rounded-[1.25rem] mt-8">
      <CreatePartnerForm />
    </Card>
  );
}
