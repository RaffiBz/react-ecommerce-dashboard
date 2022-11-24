import React from "react";

export default function Card({ className, children, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
