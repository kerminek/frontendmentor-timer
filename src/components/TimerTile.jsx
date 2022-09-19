import React, { useEffect, useState } from "react";

const TimerTile = ({ timeValue, maxValue, timeType }) => {
  const [values, valuesSet] = useState({
    up: timeValue,
    upNotRefreshed: timeValue,
    down: timeValue,
  });
  const [isAnimated, isAnimatedSet] = useState(true);

  useEffect(() => {
    isAnimatedSet((prev) => (prev ? false : true));
  }, [timeValue]);

  return (
    <div className="relative w-48 h-40 flex justify-center items-center flex-col font-bold text-8xl text-[hsl(345,_95%,_68%)]">
      {/* deck */}
      <div className="relative h-full w-full z-10" style={{ perspective: "1000px" }}>
        {/* card */}

        <div
          className={`w-full h-full origin-bottom ${!isAnimated ? "flipAnimation" : undefined}`}
          style={{
            transformStyle: "preserve-3d",
            display: isAnimated ? "none" : "block",
          }}
          onAnimationStart={() => {
            valuesSet((e) => ({
              up: timeValue,
              upNotRefreshed: timeValue + 1,
              down: timeValue + 1,
            }));
          }}
          onAnimationEnd={() => {
            isAnimatedSet(true);
            valuesSet((e) => ({
              up: e.up,
              upNotRefreshed: e.up,
              down: e.down - 1,
            }));
          }}
        >
          <div className="absolute flipElement rounded-t-lg" style={{ backfaceVisibility: "hidden" }}>
            <span className="absolute top-8">
              {values.upNotRefreshed === maxValue
                ? "00"
                : values.upNotRefreshed < 10
                ? "0" + values.upNotRefreshed
                : values.upNotRefreshed}
            </span>
            <div className="absolute bottom-0 w-full">
              <div className="feBorderCircle -bottom-2 -left-2" />
              <div className="feBorderCircle -bottom-2 -right-2" />
            </div>
          </div>
          <div
            className="absolute flipElement rounded-b-lg"
            style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
          >
            <span className="absolute -top-12">{values.down - 1 < 10 ? "0" + (values.down - 1) : values.down - 1}</span>
            <div className="feBottomBorder" />
            <div className="absolute top-0 w-full">
              <div className="feBorderCircle -top-2 -left-2" />
              <div className="feBorderCircle -top-2 -right-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flipElement absolute z-0 rounded-t-lg">
        <span className="absolute top-8">
          {values.up === maxValue ? "00" : values.up < 10 ? "0" + values.up : values.up}
        </span>
        <div className="absolute top-0 w-full h-1/2">
          <div className="feBorderCircle -bottom-2 -left-2" />
          <div className="feBorderCircle -bottom-2 -right-2" />
        </div>
      </div>
      <div className="flipElement relative z-0 rounded-b-lg shadow-[0px_15px_0px_0px_rgba(25,_26,_36,_1)]">
        <span className="absolute -top-12">
          {values.down === maxValue ? "00" : values.down < 10 ? "0" + values.down : values.down}
        </span>
        <div className="feBottomBorder" />
        <div className="absolute top-0 w-full">
          <div className="feBorderCircle -top-2 -left-2" />
          <div className="feBorderCircle -top-2 -right-2" />
        </div>
      </div>
      <p className="absolute -bottom-14 font-bold text-base tracking-[0.4rem] text-[hsl(237,_18%,_59%)]">{timeType}</p>
    </div>
  );
};

export default TimerTile;
