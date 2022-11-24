import React from "react";

import { PartnersColumns, PartnersList } from "../../../../data/PartnersList";
import PartnersTable from "../../table/partners-table/PartnersTable";
import BoxBorderLeft from "../../../Global/BoxBorderLeft";
import TotalSubscriptionBarChart from "../../../page/dashboard/TotalSubscriptionBarChart";

export default function ProductTabDetails({ openTab }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded-[1.25rem]">
      <div className="tab-content tab-space">
        <div
          className={`${openTab === 1 ? "block" : "hidden"} pt-[3.25rem] pb-16`}
          id="link1"
        >
          <PartnersTable
            rowsPerPage={4}
            Columns={PartnersColumns}
            TableData={PartnersList}
            tabs={false}
          />
        </div>
        <div
          className={`${
            openTab === 2 ? "block" : "hidden"
          } py-[6.563rem] text-center px-[7.813rem]`}
          id="link2"
        >
          <div className="w-full max-w-[42.625rem] mx-auto flex gap-5">
            <BoxBorderLeft unit="$" title="Total sales" amount="90000" />
            <BoxBorderLeft unit="$" title="Refunds" amount="-10000" />
          </div>
          <div className="mt-6">
            <TotalSubscriptionBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}
