import React from "react";

import Card from "../../UI/Card";
import PaypalIntegrationForm from "../forms/PaypalIntegrationForm";

export default function PaypalIntegration() {
  return (
    <Card className="shadow-profileCard p-12 max-w-[45rem] rounded-[1.25rem]">
      <PaypalIntegrationForm />
    </Card>
  );
}
