import React from "react";
import s from "./skills.module.css";

export default function SkillsComponent() {
  console.log("skills");
  
  return (
    <>
      <div className={s.tabs}>Tabs</div>
      <div className={s.info}>Info</div>
    </>
  );
}
