"use client";
import React, { useState } from "react";
import styles from "./main.module.css";
import { useWindowSize } from "@/hooks/use_window_size";
import HomePage from "./home";
import ResumePage from "./resume";
import ProjectPage from "./project";
import ContactPage from "./contact";
import { FaHome, FaUser, FaBookmark, FaPhone } from "react-icons/fa";

export default function Main() {
  const size = useWindowSize();
  const isMac: boolean = (size?.width ?? 0) > 768;
  const showIcon: boolean = (size?.width ?? 0) < 700;

  const [tabsIndex, setTabsIndex] = useState<number>(0);
  const listTabs: string[] = ["Home", "Resume", "Project", "Contact"];

  const tabComponents: JSX.Element[] = [
    <HomePage />,
    <ResumePage />,
    <ProjectPage />,
    <ContactPage />,
  ];

  const tabIcons: JSX.Element[] = [
    <FaHome size={12} color={tabsIndex == 0 ? "#000" : "#FFF"} />,
    <FaUser size={12} color={tabsIndex == 1 ? "#000" : "#FFF"} />,
    <FaBookmark size={12} color={tabsIndex == 2 ? "#000" : "#FFF"} />,
    <FaPhone size={12} color={tabsIndex == 3 ? "#000" : "#FFF"} />,
  ];

  function onPressTabbar(index: number) {
    if (index == tabsIndex) return;
    setTabsIndex(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabbar}>
        {listTabs.map((item: string, index: number) => (
          <div
            key={index}
            className={index == tabsIndex ? styles.tabActive : styles.tab}
            onClick={() => onPressTabbar(index)}
          >
            {!showIcon && item}
            {showIcon && tabIcons[index]}
          </div>
        ))}
      </div>
      <div className={styles.screen}>
        <div className={styles.display}>
          {/* screen */}
          <div>{tabComponents[tabsIndex]}</div>
          <div className={styles.loadingScreen}>Loading...</div>
        </div>
      </div>
      {isMac && <div className={styles.base}></div>}
    </div>
  );
}
