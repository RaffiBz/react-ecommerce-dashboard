import React from "react";
import Card from "../../UI/Card";

export default function SettingCard({ icon, text }) {
  return (
    <Card className="flex gap-4 bg-white shadow-profileCard py-[1.875rem] px-8 items-center w-full max-w-[21.563rem] rounded-lg">
      <img src={icon} alt="icon" className="w-8 h-8 rounded-lg" />
      <span className="text-lg text-title font-normal leading-[1.375rem] capitalize">
        {text}
      </span>
    </Card>
  );
}
