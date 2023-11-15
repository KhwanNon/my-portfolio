"use client";
import React from "react";
import {
  colorBg,
  colorGoDark,
  colorGoDark2,
  colorGoLight,
} from "@/base/colors";
import Skills from "@/base/components/pages/content/skills";
import Profile from "@/base/components/pages/content/profile";
import Project from "@/base/components/pages/content/project";
import HeaderTitle from "@/base/components/pages/header/title";
import Education from "@/base/components/pages/content/education";
import HeaderContact from "@/base/components/pages/header/contact";
import WorkExperience from "@/base/components/pages/content/work_experience";
import { useWindowSize } from "@/hooks/use_window_size";
import { assetMac } from "@/generated/assets";
import Image from "next/image";
import ButtonLight from "@/base/components/ui/button";
import { MyInfo } from "@/base/constanst";

export default function Home() {
  const size = useWindowSize();

  const widthMin_613: boolean = (size?.width ?? 0) < 613;
  const widthMin_1000: boolean = (size?.width ?? 0) < 1000;
  const widthMin_500: boolean = (size?.width ?? 0) < 500;
  const containerF: React.CSSProperties = { flex: 1, padding: 10 };

  const containerRes613: React.CSSProperties = {
    display: "flex",
    padding: widthMin_613 ? 10 : 40,
    flexDirection: widthMin_613 ? "column" : "row",
  };

  const containerRes1000: React.CSSProperties = {
    display: "flex",
    padding: widthMin_1000 ? 0 : 40,
    flexDirection: widthMin_1000 ? "column" : "row",
  };

  const containerRes500: React.CSSProperties = {
    display: "flex",
    flexDirection: widthMin_500 ? "column" : "row",
  };

  const renderHeader = () => (
    <div style={{ ...containerRes613, backgroundColor: colorGoDark }}>
      <div style={containerF}>
        <HeaderTitle />
      </div>
      <div style={{ ...containerF }}>
        <HeaderContact />
      </div>
    </div>
  );

  const renderBanner = () => (
    <div style={{ ...containerRes1000, backgroundColor: colorGoDark2 }}>
      <div style={containerF}>
        <Profile />
        <div style={containerRes500}>
          <ButtonLight
            text={"Github"}
            colorIn={"#38E54D"}
            shadow={"10 8px 8px #38E54D"}
            onPress={() => {
              window.open(MyInfo.contact.git, "_blank");
            }}
          />
          <ButtonLight
            text={"My Golang"}
            colorIn={"#4FD3C4"}
            shadow={"10 8px 8px #4FD3C4"}
            onPress={() => {
              window.open(MyInfo.contact.git, "_blank");
            }}
          />
        </div>
      </div>
      <div
        style={{
          ...containerF,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={assetMac}
          alt="mac"
          width={widthMin_500 ? 300 : 500}
          height={widthMin_500 ? 160 : 300}
        />
      </div>
    </div>
  );

  const renderContent = () => (
    <div style={containerRes613}>
      <div style={containerF}>
        <WorkExperience />
        <Education />
      </div>
      <div style={containerF}>
        <Skills />
        <Project />
      </div>
    </div>
  );

  const renderFooter = () => (
    <div
      style={{
        height: 100,
        backgroundColor: colorGoDark,
        width: "100%",
        marginLeft: 0,
      }}
    >
      <div>sdfdsfsd</div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: colorBg,
        flexDirection: "column",
      }}
    >
      {renderHeader()}
      {renderBanner()}
      {renderContent()}
      {renderFooter()}
    </div>
  );
}
