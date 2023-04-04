"use client";
import React from "react";
import { colorBg } from "@/base/colors";
import Skills from "@/base/components/pages/content/skills";
import Profile from "@/base/components/pages/content/profile";
import Project from "@/base/components/pages/content/project";
import HeaderTitle from "@/base/components/pages/header/title";
import Education from "@/base/components/pages/content/education";
import HeaderContact from "@/base/components/pages/header/contact";
import WorkExperience from "@/base/components/pages/content/work_experience";
import { useWindowSize } from "@/hooks/use_window_size";

export default function Home() {
  const size = useWindowSize();

  const widthMin_613: boolean = (size?.width ?? 0) < 613;
  const container2: React.CSSProperties = { flex: 1, padding: 10 };

  const container: React.CSSProperties = {
    display: "flex",
    marginBottom: 10,
    flexDirection: widthMin_613 ? "column" : "row",
  };

  const renderHeader = () => (
    <div style={container}>
      <div style={container2}>
        <HeaderTitle />
      </div>
      <div style={container2}>
        <HeaderContact />
      </div>
    </div>
  );

  const renderContent = () => (
    <div style={container}>
      <div style={container2}>
        <Profile />
        <WorkExperience />
        <Education />
      </div>
      <div style={container2}>
        <Skills />
        <Project />
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: colorBg,
        flexDirection: "column",
        padding: widthMin_613 ? 10 : 40,
      }}
    >
      {renderHeader()}
      {renderContent()}
    </div>
  );
}
