import TimerComponent from "./components/TimerComponent.jsx";
import { ReactComponent as BgStars } from "./images/bg-stars.svg";
import BgHills from "./images/pattern-hills.svg";
import { ReactComponent as LogoFacebook } from "./images/icon-facebook.svg";
import { ReactComponent as LogoPinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as LogoInstagram } from "./images/icon-instagram.svg";
import SettingsComponent from "./components/SettingsComponent.jsx";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function App() {
  const [settingsState, settingsStateSet] = useState(false);

  return (
    <div
      className="h-screen w-full bg-[hsl(235,_16%,_14%)] flex flex-col items-center overflow-hidden relative"
      style={{ fontFamily: "'Red Hat Text', sans-serif" }}
    >
      <BgStars className="h-full w-full absolute" />
      <p className="text-white text-xl lg:text-2xl tracking-[0.4rem] px-4 mt-32 mb-0 lg:my-32 text-center">
        WE'RE LAUNCHING SOON
      </p>
      <TimerComponent />
      {settingsState && <SettingsComponent settingsStateSet={settingsStateSet} />}
      <div
        className="absolute z-10 bottom-36 md:bottom-16 -right-6 md:right-10 pr-10 pl-3 md:px-6 py-3 bg-[hsl(345,_95%,_68%)] rounded-full md:rounded-xl flex gap-4 items-center justify-center cursor-pointer"
        onClick={() => settingsStateSet(true)}
      >
        <Cog8ToothIcon className="h-6 w-6" />
        <p className="hidden md:inline-block">Settings</p>
      </div>
      <div className="absolute bottom-16 z-30 flex gap-8">
        <LogoFacebook className="svgIcon cursor-pointer" />
        <LogoPinterest className="svgIcon cursor-pointer" />
        <LogoInstagram className="svgIcon cursor-pointer" />
      </div>
      {/* <BgHills className="absolute bottom-0 w-full" /> */}
      <img src={BgHills} alt="" className="absolute bottom-0 w-full" />
    </div>
  );
}

export default App;
