import React from "react";

export default function TableRow({ children, className }) {
  return <tr className={className}>{children}</tr>;
}
