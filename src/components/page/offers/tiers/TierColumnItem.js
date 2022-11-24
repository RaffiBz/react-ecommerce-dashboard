import React from "react";

export default function TierColumnItem({ column, className }) {
  return (
    <div className={className}>
      <span className="text-sm text-title">{column}</span>
    </div>
  );
}
