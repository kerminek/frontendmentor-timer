import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { timeValueState } from "../atoms/timeValueAtom";
import SettingsInput from "./SettingsInput";

const second = 1;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const SettingsComponent = ({ settingsStateSet }) => {
  const [inputValues, inputValuesSet] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [time, timeSet] = useRecoilState(timeValueState);

  const startClock = () => {
    let seconds = 0;

    Object.keys(inputValues).forEach((inpVal) => {
      if (inpVal === "days") {
        seconds += inputValues[inpVal] * day;
      } else if (inpVal === "hours") {
        seconds += inputValues[inpVal] * hour;
      } else if (inpVal === "minutes") {
        seconds += inputValues[inpVal] * minute;
      }
      //else if (inpVal === "seconds")
      else {
        seconds += inputValues[inpVal] * second;
      }
    });

    timeSet(seconds);
    settingsStateSet(false);
  };

  return (
    <div className="absolute z-50 top-0 h-full w-full bg-black/90 flex justify-center items-center">
      <div className="absolute top-0 h-full w-full" onClick={() => settingsStateSet(false)} />
      <div className="absolute z-50 text-[hsl(345,_95%,_68%)] p-20 rounded-lg flex flex-col gap-10">
        <SettingsInput inputValuesSet={inputValuesSet} timeInterval={"days"} />
        <SettingsInput inputValuesSet={inputValuesSet} timeInterval={"hours"} />
        <SettingsInput inputValuesSet={inputValuesSet} timeInterval={"minutes"} />
        <SettingsInput inputValuesSet={inputValuesSet} timeInterval={"seconds"} />
        <div
          className="px-6 py-3 bg-[hsl(345,_95%,_68%)] text-black rounded-md cursor-pointer"
          onClick={() => startClock()}
        >
          Start
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
