import React, { useState } from "react";
import useTable from "../../../util/useTable";

import TableHead from "../TableHead";
import SearchRow from "../table-util/SearchRow";
import TableFooter from "../TableFooter";
import MerchantPaymentTableBody from "./MerchantPaymentTableBody";

export default function MerchantPaymentTable({
  rowsPerPage,
  Columns,
  TableData,
}) {
  //check state
  const [isCheck, setIsCheck] = useState([]);
  const [tableData, setTableData] = useState(TableData);
  //search state
  const [search, setSearch] = useState("");
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
  //search function
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="w-auto mx-4 md:mx-8 mt-1 mb-6">
        <div className="relative overflow-x-auto shadow-md rounded-md">
          <SearchRow handleSearch={handleSearch} actions={isCheck.length > 0} />
          <table className="w-full text-xs md:text-sm text-left text-gray-500 ">
            <TableHead
              columns={Columns}
              handleSorting={handleSorting}
              data={TableData}
              setIsCheck={setIsCheck}
              checkAll={true}
            />
            <MerchantPaymentTableBody
              isCheck={isCheck}
              setIsCheck={setIsCheck}
              search={search}
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
