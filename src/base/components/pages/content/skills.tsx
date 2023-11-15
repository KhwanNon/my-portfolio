import React from "react";
import Box from "../../ui/box";
import Image from "next/image";
import TitleIcon from "../../ui/title_icon";

import { colorGoLight } from "@/base/colors";
import { MyInfo } from "@/base/constanst";
import SubTitleIcon from "../../ui/sub_title_icon";
import { useWindowSize } from "@/hooks/use_window_size";

import {
  assetFlutter,
  assetReact,
  assetTS,
  assetJS,
  assetNuxt,
  assetGo,
} from "@/generated/assets";

export default function Skills() {
  const size = useWindowSize();

  const renderRowData = (
    title: string,
    value: string,
    percent: number,
    state: "text" | "progressbar"
  ) => {
    let isSmall = (size?.width ?? 0) < 376 && state === "progressbar";
    return (
      <div
        key={`#00${title}`}
        style={{
          display: "flex",
          paddingLeft: 20,
          flexDirection: isSmall ? "column" : "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <span style={{ color: "#D0C9C0" }}>{title}</span>
        </div>

        <Box w={10} />
        {isSmall && <Box h={10} />}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {state === "text" ? renderText(value) : renderProgressBar(percent)}
        </div>
      </div>
    );
  };

  const renderText = (value: string) => (
    <span style={{ fontWeight: "bold", color: colorGoLight }}>{value}</span>
  );

  const renderProgressBar = (percent: number) => (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxWidth: 200,
        flexDirection: "row",
      }}
    >
      <div
        style={{ width: `${percent}%`, background: colorGoLight, height: 12 }}
      />
      <div
        style={{
          height: 12,
          background: "lightgrey",
          width: `${100 - percent}%`,
        }}
      />
    </div>
  );

  const renderListLanguages = () =>
    MyInfo.skills.languages.map((item, index) =>
      renderRowData(item.name, item.level, 100, "text")
    );

  const renderListSoftwareSkills = () =>
    MyInfo.skills.software_skills.map((item, index) =>
      renderRowData(item.name, item.level, 100, "text")
    );

  const renderListSoftSkills = () =>
    MyInfo.skills.soft_skills.map((item, index) =>
      renderRowData(item.name, "", item.percent, "progressbar")
    );

  return (
    <div>
      <TitleIcon title={"Skills"} state={"skills"} />
      <div style={{ padding: 10 }}>
        <div style={{ display: "flex" }}>
          <Box w={10} />
          <Image src={assetFlutter} alt="nuxt" width="50" height="40" />
          <Box w={10} />
          <Image src={assetReact} alt="react" width="40" height="40" />
          <Box w={10} />
          <Image src={assetTS} alt="ts" width="40" height="40" />
          <Box w={10} />
          <Image src={assetJS} alt="js" width="40" height="40" />
          <Box w={10} />
          <Image src={assetNuxt} alt="nuxt" width="40" height="40" />
          <Box w={10} />
          <Image src={assetGo} alt="nuxt" width="40" height="40" />
        </div>

        <Box h={20} />
        <SubTitleIcon text={"LANGUAGES"} state={"alert"} />
        {renderListLanguages()}

        <Box h={20} />
        <SubTitleIcon text={"SOFTWARE SKILLS"} state={"alert"} />
        {renderListSoftwareSkills()}

        <Box h={20} />
        <SubTitleIcon text={"SOFT SKILLS"} state={"alert"} />
        {renderListSoftSkills()}
      </div>
    </div>
  );
}
