import React from "react";
import TableRow from "../TableRow";
import Options from "../Options";
import Tier from "../table-data/Tier";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import Quantity from "../table-data/Quantity";
import Description from "../table-data/Description";
import Edit from "../option-actions/Edit";
import Delete from "../option-actions/Delete";

export default function TiersTableBody({ isCheck, tableData }) {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <TableRow
            key={data.id}
            className={`${data.id % 2 === 0 ? "bg-gridSecondBg" : ""} ${
              isCheck.includes(data.id)
                ? "border-l-activeBlue"
                : "border-l-transparent"
            } relative bg-white border-b hover:bg-gray-50 border-l-2`}
          >
            <Id id={data.id} />
            <Tier src={data.tierIcon} title={data.tier} />
            <Description description={data.description} />
            <Commission amount={data.value} unit="USD" />
            <Quantity amount={data.partners} />
            <Options>
              <Edit />
              <Delete />
            </Options>
          </TableRow>
        );
      })}
    </tbody>
  );
}
