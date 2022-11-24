import React from "react";
import { SettingsList } from "../../data/SettingsList";
import SettingCard from "../../components/assets/cards/SettingCard";
import { Link } from "react-router-dom";

export default function SettingsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {SettingsList.map((item) => (
        <Link to={item.href} key={item.id}>
          <SettingCard icon={item.icon} text={item.text} />
        </Link>
      ))}
    </div>
  );
}
