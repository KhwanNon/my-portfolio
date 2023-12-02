import React, { useState } from "react";
import HomePage from "./home";
import s from "./main.module.css";

export default function Main() {
  const [tabActive, setTabActive] = useState<number>(0);
  const tabs = [
    "PROFILE",
    "SKILLS",
    "PROJECT",
    "EXPERIENCE",
    "SOCIAL ONLINE",
    "CONTACT ME",
  ];

  return (
    <div className={s.container}>
      <HomePage />
      <div className={s.boxBar}>
        <div className="text-white">Khwan</div>
        <div className={s.boxTabs}>
          {tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => setTabActive(index)}
              className={tabActive == index ? s.tabActive : s.tab}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
