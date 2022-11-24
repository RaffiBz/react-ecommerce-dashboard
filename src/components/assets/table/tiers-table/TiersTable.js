import React, { useState } from "react";
import TableHead from "../TableHead";
import TiersTableBody from "./TiersTableBody";
import SearchRow from "../table-util/SearchRow";

export default function TiersTable({ Columns, TableData }) {
  const [isCheck, setIsCheck] = useState([]);
  const [tableData, setTableData] = useState(TableData);
  const [search, setSearch] = useState("");
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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="w-auto mx-4 md:mx-8 mt-1 mb-6">
        <div className="relative overflow-x-auto shadow-md rounded-md">
          <SearchRow handleSearch={handleSearch} />
          <table className="w-full text-xs md:text-sm text-left text-gray-500 ">
            <TableHead
              columns={Columns}
              handleSorting={handleSorting}
              data={TableData}
              setIsCheck={setIsCheck}
            />
            <TiersTableBody
              tableData={tableData}
              columns={Columns}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
              search={search}
            />
          </table>
        </div>
      </div>
    </>
  );
}
