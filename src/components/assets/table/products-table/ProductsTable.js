import React, { useState } from "react";
import useTable from "../../../util/useTable";

import TableHead from "../TableHead";
import TableFooter from "../TableFooter";
import ProductsTableBody from "./ProductsTableBody";

export default function ProductsTable({ rowsPerPage, Columns, TableData }) {
  //check state
  const [isCheck, setIsCheck] = useState([]);
  const [tableData, setTableData] = useState(TableData);
  //active state
  const [isActive, setIsActive] = useState([]);
  //search state
  //pagination
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(tableData, page, rowsPerPage);
  //sorting function
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
      console.log(sortField, sortOrder);
    }
  };

  return (
    <>
      <div className="w-auto">
        <div className="relative overflow-x-auto shadow-md rounded-md">
          {/* <SearchRow handleSearch={handleSearch} /> */}
          <table className="w-full text-xs md:text-sm text-left text-gray-500 ">
            <TableHead
              columns={Columns}
              handleSorting={handleSorting}
              data={TableData}
              setIsCheck={setIsCheck}
              checkAll={false}
            />
            <ProductsTableBody
              tableData={tableData}
              columns={Columns}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
              isActive={isActive}
              setIsActive={setIsActive}
              slice={slice}
            />
          </table>
          <TableFooter
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
}
