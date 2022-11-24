import React from "react";
import TierColumn from "./TierColumn";
import TierRow from "./TierRow";

export default function TierGrid({ register, control }) {
  return (
    <div>
      <TierColumn />
      <TierRow
        name="Tier Name 1"
        id="tier1"
        register={register}
        control={control}
        className="mt-1 flex items-center"
      />
      <TierRow
        name="Tier Name 2"
        id="tier2"
        register={register}
        control={control}
        className="mt-2 flex items-center"
      />
      <TierRow
        name="Tier Name 3"
        id="tier3"
        register={register}
        control={control}
        className="mt-2 flex items-center"
      />
      <TierRow
        name="Tier Name 4"
        id="tier4"
        register={register}
        control={control}
        className="mt-2 flex items-center"
      />
    </div>
  );
}
