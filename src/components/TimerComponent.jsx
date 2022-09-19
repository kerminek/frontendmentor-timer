import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import TimerTile from "./TimerTile";
import { timeValueState } from "../atoms/timeValueAtom";

const second = 1;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const TimerComponent = () => {
  const [time, timeSet] = useRecoilState(timeValueState);

  let copiedTime = time;

  const hmDays = Number((copiedTime / day).toString().split(".")[0]);
  copiedTime = copiedTime - hmDays * day;
  const hmHours = Number((copiedTime / hour).toString().split(".")[0]);
  copiedTime = copiedTime - hmHours * hour;
  const hmMinutes = Number((copiedTime / minute).toString().split(".")[0]);
  copiedTime = copiedTime - hmMinutes * minute;
  const hmSeconds = copiedTime;

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        timeSet((e) => e - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="flex gap-10 scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 z-50">
      <TimerTile timeValue={hmDays} maxValue={365} timeType={"DAYS"} />
      <TimerTile timeValue={hmHours} maxValue={24} timeType={"HOURS"} />
      <TimerTile timeValue={hmMinutes} maxValue={60} timeType={"MINUTES"} />
      <TimerTile timeValue={hmSeconds} maxValue={60} timeType={"SECONDS"} />
    </div>
  );
};

export default TimerComponent;
