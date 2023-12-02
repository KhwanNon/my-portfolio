import React, { useState } from "react";
import s from "./skills.module.css";
import Box from "@/base/components/ui/box";
import Image from "next/image";
import {
  assetCP2,
  assetFlutter,
  assetJS,
  assetNuxt,
  assetReact,
  assetTS,
} from "@/generated/assets";
import { MyInfo } from "@/base/constanst";
import { useWindowSize } from "@/hooks/use_window_size";

export default function SkillsComponent() {
  console.log("skills");
  const size = useWindowSize();
  const ipadSize: boolean = (size?.width ?? 0) < 1137;
  const [indexActive, steIndexActive] = useState<number>(0);

  function onSelectTab(index: number) {
    if (index == indexActive) return;
    steIndexActive(index);
  }

  const renderRowData = (
    title: string,
    value: string,
    percent: number,
    state: "text" | "progressbar"
  ) => {
    return (
      <div key={`#00${title}`} className={s.row}>
        <div className={s.flexText}>
          <span className="text-white text-small">{title}</span>
        </div>
        <Box w={10} />
        <div className={s.containerProgress}>
          {state === "text" ? (
            <span className="text-white text-small">{value}</span>
          ) : (
            <div className={s.boxProgress}>
              <div className={s.filled} style={{ width: `${percent}%` }} />

              <div
                className={s.remaining}
                style={{ width: `${100 - percent}%` }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSoftSkills = () => {
    return MyInfo.skills.soft_skills.map((item, _) => (
      <>
        {renderRowData(item.name, "", item.percent, "progressbar")}
        <Box h={10} />
      </>
    ));
  };

  function renderHardSkills() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Image src={assetFlutter} alt="nuxt" width="45" height="40" />
          <Box w={10} />
          <Image src={assetReact} alt="react" width="40" height="40" />
          <Box w={10} />
          <Image src={assetTS} alt="ts" width="40" height="40" />
          <Box w={10} />
          <Image src={assetJS} alt="js" width="40" height="40" />
          <Box w={10} />
          <Image src={assetNuxt} alt="nuxt" width="40" height="40" />
        </div>
        <Box h={40} />
        {MyInfo.skills.software_skills.map((item, index) => (
          <>
            {renderRowData(item.name, item.level, 100, "text")}
            <Box h={10} />
          </>
        ))}
      </div>
    );
  }

  function renderLanguage() {
    return (
      <>
        {MyInfo.skills.languages.map((item, _) =>
          renderRowData(item.name, item.level, 100, "text")
        )}
        <Box h={40} />
        <div className="text-very-small text-white">
          In addressing language challenges, I am currently not enrolled in an
          English course. However, I make an effort to watch movies with English
          subtitles, explore content on foreign YouTube channels, and strive to
          comprehend spoken English.
        </div>
        ;
      </>
    );
  }

  const data = [
    { title: "HARD SKILLS", element: renderHardSkills() },
    { title: "SOFT SKILLS", element: renderSoftSkills() },
    { title: "LANGUAGE", element: renderLanguage() },
  ];

  return (
    <>
      <div className={s.tabs}>
        <div>
          <div
            className={`text-very-large text-white ${
              ipadSize ? "text-center" : ""
            }`}
          >
            SKILLS & LANGUAGE
          </div>
        </div>
        <Box h={70} />
        <div>
          {data.map((item, index) => (
            <div
              onClick={() => onSelectTab(index)}
              className={indexActive == index ? s.tabActive : s.tab}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className={s.info}>
        {!ipadSize && <Image src={assetCP2} alt={"cp2"} className={s.imgBg} />}
        <div className={s.boxInfomation}>{data[indexActive].element}</div>
      </div>
    </>
  );
}
