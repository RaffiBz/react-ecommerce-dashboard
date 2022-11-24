import React from "react";
import TableRow from "../TableRow";

import Name from "../table-data/Name";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import RegisteredDate from "../table-data/RegisteredDate";
import Quantity from "../table-data/Quantity";
import Plan from "../table-data/Plan";
import CheckboxSingle from "../table-data/CheckboxSingle";
//actions import
import Options from "../Options";
import Edit from "../option-actions/Edit";
import View from "../option-actions/View";
import Delete from "../option-actions/Delete";

export default function MerchantTableBody({
  isCheck,
  setIsCheck,
  search,
  slice,
  isActive,
  setIsActive,
}) {
  //check click handler
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  //active click handler
  const handleActive = (e) => {
    const { id, checked } = e.target;
    setIsActive([...isActive, id]);
    if (!checked) {
      setIsActive(isActive.filter((item) => item !== id));
    }
    console.log(isActive);
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
              <CheckboxSingle
                id={data.id}
                onChange={handleClick}
                checked={isCheck.includes(data.id)}
              />
              <Id id={data.id} />
              <Name text={data.name} number={data.id} />
              <Plan description={data.plan} />
              <Quantity amount={data.partnersQty} />
              <Quantity amount={data.monthsActive} />
              <Commission amount={data.ltv} unit="USD" />
              <RegisteredDate date={data.registeredDate} />
              <CheckboxSingle id={data.id} onChange={handleActive} />
              <Options>
                <Edit />
                <View />
                <Delete />
              </Options>
            </TableRow>
          );
        })}
    </tbody>
  );
}
