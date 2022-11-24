import React from "react";

import { Basic, Standard, Pro } from "../../../../data/PlanBenefits";
import { ProductsColumns, ProductsList } from "../../../../data/ProductsList";
import { PartnersColumns } from "../../../../data/PartnersList";
import { PartnersList } from "../../../../data/PartnersList";
import PartnersTable from "../../table/partners-table/PartnersTable";
import BoxBorderLeft from "../../general/BoxBorderLeft";
import PlanSingleSmall from "../../plans/PlanSingleSmall";
import PartnerQtyLeft from "../../general/PartnerQtyLeft";
import ProductsTable from "../../table/products-table/ProductsTable";

export default function TabDetails({ openTab }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded-[1.25rem]">
      <div className="tab-content tab-space">
        <div
          className={`${openTab === 1 ? "block" : "hidden"} mt-6`}
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
          <div className="w-full max-w-[41.875rem] mx-auto flex gap-5">
            <BoxBorderLeft unit="$" title="Total sales" amount="90000" />
            <BoxBorderLeft unit="$" title="Refunds" amount="-10000" />
          </div>
          <div className="mt-6"></div>
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
        <div
          className={`${openTab === 4 ? "block" : "hidden"} pb-[5.813rem]`}
          id="link4"
        >
          <PartnerQtyLeft partnersRemaining="191 more partners" />
          <PlanSingleSmall
            wrapper="bg-secondary pt-[1.773rem] pb-[6.5rem]"
            titleStyle="text-white"
            plan="basic"
            priceStyle="text-white"
            price="49"
            data={Basic}
            benefitStyle="text-white"
            buttonStyle="bg-white text-title"
          />
        </div>
      </div>
    </div>
  );
}
