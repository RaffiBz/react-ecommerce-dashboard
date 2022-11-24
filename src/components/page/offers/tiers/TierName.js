import React from "react";

export default function TierName({ name, className }) {
  return (
    <div className={className}>
      <span className="text-sm text-subtitle">{name}</span>
    </div>
  );
}
