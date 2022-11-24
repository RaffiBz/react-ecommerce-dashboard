import React from "react";

import { Basic, Standard, Pro } from "../../data/PlanBenefits";
import PlanSingle from "../../components/assets/plans/PlanSingle";
import PlansIntro from "../../components/assets/plans/PlansIntro";
import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";

export default function Plans() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar></Navbar>
      <PlansIntro />
      <div className="flex my-[5.438rem] items-center justify-center gap-6">
        <PlanSingle
          wrapper="bg-secondary py-[2.063rem]"
          titleStyle="text-white"
          plan="basic"
          priceStyle="text-white"
          price="49"
          data={Basic}
          benefitStyle="text-white"
          buttonStyle="bg-white text-title"
        />
        <PlanSingle
          ribbon={true}
          wrapper="bg-white py-[4.375rem] shadow-planCard"
          titleStyle="text-title"
          plan="standard"
          priceStyle="text-title"
          price="149"
          data={Standard}
          benefitStyle="text-grayBlue"
          buttonStyle="bg-primary text-white"
        />
        <PlanSingle
          wrapper="bg-secondary py-[2.063rem]"
          titleStyle="text-white"
          plan="pro"
          priceStyle="text-white"
          price="299"
          data={Pro}
          benefitStyle="text-white"
          buttonStyle="bg-white text-title"
        />
      </div>
    </GlobalLayout>
  );
}
