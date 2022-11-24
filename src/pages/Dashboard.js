import React from "react";

import { PartnersList } from "../data/PartnersList";
import RecentlyJoinedPartners from "../components/page/dashboard/RecentlyJoinedPartners";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import SalesBreakdown from "../components/page/dashboard/SalesBreakdown";
import ProfileTopStatistics from "../components/page/dashboard/ProfileTopStatistics";
import BestPerformerPartners from "../components/page/dashboard/BestPerformerPartners";
import TopSellingSection from "../components/page/dashboard/TopSellingSection";

export default function Dashboard() {
  return (
    <GlobalLayout>
      <Navbar path="Dashboard"></Navbar>
      <ProfileTopStatistics />
      <SalesBreakdown />
      <RecentlyJoinedPartners totalPartners={PartnersList} />
      <div className="bg-bgGraySecondary">
        <BestPerformerPartners bestPerformers={PartnersList.slice(0, 6)} />
        <TopSellingSection />
      </div>
    </GlobalLayout>
  );
}
