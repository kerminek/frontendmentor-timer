import React from "react";

const maxValues = {
  days: 365,
  hours: 24,
  minutes: 60,
  seconds: 60,
};

const SettingsInput = ({ timeInterval, inputValuesSet }) => {
  return (
    <div className="flex justify-between gap-4">
      <input
        className="w-14 border-none outline-none bg-transparent"
        type="number"
        name=""
        id=""
        min={0}
        max={maxValues[timeInterval]}
        defaultValue={0}
        onChange={(e) => inputValuesSet((prev) => ({ ...prev, [timeInterval]: Number(e.target.value) }))}
      />
      <p className="capitalize">{timeInterval}</p>
    </div>
  );
};

export default SettingsInput;
