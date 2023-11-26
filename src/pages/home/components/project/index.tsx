import React from "react";
import s from "./project.module.css";
import { MyInfo } from "@/base/constanst";

export default function ProjectComponent() {
  return (
    <>
      <div className="text-white text-label-large">PROJECT MOBILE</div>
      <div className={s.boxTabs}>
        {MyInfo.project.map((item, index) => (
          <div key={index} className={s.tab}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={s.boxListProject}></div>
    </>
  );
}
