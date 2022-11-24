import React from "react";

import { ProductsColumns, ProductsList } from "../../../../data/ProductsList";
import BoxBorderLeft from "../../../Global/BoxBorderLeft";
import TotalSubscriptionBarChart from "../../../page/dashboard/TotalSubscriptionBarChart";
import ProductsTable from "../../table/products-table/ProductsTable";
import PerformanceTab from "./PerformanceTab";
import YearSelector from "../../dropdown/YearSelector";

export default function PartnerTabDetails({ openTab, data }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded-[1.25rem]">
      <div className="tab-content tab-space">
        <div
          className={`${openTab === 1 ? "block" : "hidden"} pt-[3.25rem] pb-16`}
          id="link1"
        >
          <PerformanceTab data={data} />
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
            <YearSelector />
            <TotalSubscriptionBarChart />
          </div>
        </div>
        <div
          className={`${openTab === 3 ? "block" : "hidden"} mt-6`}
          id="link3"
        >
          <ProductsTable
            rowsPerPage={4}
            Columns={ProductsColumns}
            TableData={ProductsList}
          />
        </div>
      </div>
    </div>
  );
}
