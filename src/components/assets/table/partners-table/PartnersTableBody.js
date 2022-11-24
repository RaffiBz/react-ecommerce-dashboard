import React from "react";
import TableRow from "../TableRow";
import CheckboxSingle from "../table-data/CheckboxSingle";
import Options from "../Options";
import Tier from "../table-data/Tier";
import Name from "../table-data/Name";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import ConversionRate from "../table-data/ConversionRate";
import RegisteredDate from "../table-data/RegisteredDate";
import Quantity from "../table-data/Quantity";
import Edit from "../option-actions/Edit";
import Delete from "../option-actions/Delete";
import Approve from "../option-actions/Approve";
import Reject from "../option-actions/Reject";

export default function PartnersTableBody({
  isCheck,
  setIsCheck,
  superAdmin,
  search,
  slice,
  actions,
  checkbox,
  openTab,
}) {
  //check click handler
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
    console.log(isCheck);
  };

  return (
    <tbody>
      {slice
        .filter((data) =>
          search === ""
            ? data
            : data.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((data) => {
          return (
            <TableRow
              key={data.id}
              className={`${data.id % 2 === 0 ? "bg-gridSecondBg" : ""} ${
                isCheck.includes(data.id)
                  ? "border-l-activeBlue"
                  : "border-l-transparent"
              } bg-white hover:bg-gray-50 border-l-2`}
            >
              {checkbox && (
                <CheckboxSingle
                  id={data.id}
                  onChange={handleClick}
                  checked={isCheck.includes(data.id)}
                />
              )}
              <Id id={data.id} />
              <Name text={data.name} number={data.id} />
              {superAdmin && <Name text={data.name} />}
              {!superAdmin && <Tier src={data.tierIcon} title={data.tier} />}
              <Commission amount={data.earned} unit="USD" />
              {!superAdmin && <ConversionRate rate={data.conversionRate} />}
              <Quantity amount={data.conversion} />
              <RegisteredDate date={data.registeredDate} />
              {/* {actions && ( */}
              <Options>
                <Edit />
                {openTab === 2 && <Approve id={data.id} />}
                {openTab === 2 && <Reject id={data.id} />}
                <Delete />
              </Options>
              {/* )} */}
            </TableRow>
          );
        })}
    </tbody>
  );
}
