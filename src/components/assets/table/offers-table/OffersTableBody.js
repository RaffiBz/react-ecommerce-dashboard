import React from "react";
import { Link } from "react-router-dom";

import TableRow from "../TableRow";
import CheckboxSingle from "../table-data/CheckboxSingle";
import Options from "../Options";
import Name from "../table-data/Name";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import Quantity from "../table-data/Quantity";
import Description from "../table-data/Description";
//actions import
import Edit from "../option-actions/Edit";
import View from "../option-actions/View";
import Delete from "../option-actions/Delete";

export default function OffersTableBody({
  isCheck,
  setIsCheck,
  isActive,
  setIsActive,
  search,
  slice,
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
              <Name
                icon={data.icon}
                text={data.name}
                code="code:"
                number={data.code}
              />
              <Description description={data.description} />
              <Quantity amount={data.conversion} />
              <Commission amount={data.commission} unit="USD" />
              <Commission amount={data.revenue} unit="USD" />
              <CheckboxSingle id={data.id} onChange={handleActive} />
              <CheckboxSingle
                id={data.id}
                disabled={!isActive.includes(data.id)}
              />
              <Options>
                <View />
                <Edit />
                <Delete />
              </Options>
            </TableRow>
          );
        })}
    </tbody>
  );
}
