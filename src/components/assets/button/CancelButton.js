import React from "react";
import Button from "./Button";

export default function CancelButton({ onClick }) {
  return (
    <Button
      className="bg-white text-title text-base leading-7 py-[0.5rem] text-center w-full max-w-[11.25rem] rounded-lg border border-checkboxBg"
      onClick={onClick}
    >
      Cancel
    </Button>
  );
}
