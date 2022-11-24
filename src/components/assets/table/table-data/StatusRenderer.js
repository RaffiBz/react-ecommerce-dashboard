import React from "react";

export default function StatusRenderer({ data }) {
  return data.map((data) => {
    let { id, title, className } = data;
    return (
      <td className="px-6 py-3" key={id}>
        <div className={className}>
          <span>{title}</span>
        </div>
      </td>
    );
  });
}
