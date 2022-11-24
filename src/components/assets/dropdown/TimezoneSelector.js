import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";

export default function TimezoneSelector() {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  return (
    <div className="block">
      <span className="text-sm text-title leading-5">Your Timezone</span>
      <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
    </div>
  );
}
