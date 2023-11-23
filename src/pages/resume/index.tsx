import { MyInfo } from "@/base/constanst";
import React from "react";
import styles from "./resume.module.css";
import Box from "@/base/components/ui/box";
import SubTitleIcon from "@/base/components/ui/sub_title_icon";
import TitleIcon from "@/base/components/ui/title_icon";
import { useWindowSize } from "@/hooks/use_window_size";
import Image from "next/image";
import {
  assetFlutter,
  assetReact,
  assetTS,
  assetJS,
  assetNuxt,
  assetGo,
} from "@/generated/assets";
import ProgressBar from "@/base/components/ui/progress";

export default function ResumePage() {
  const size = useWindowSize();

  const listSkill: JSX.Element[] = [
    <Image src={assetGo} alt="go" width="30" height="30" />,
    <Image src={assetFlutter} alt="nuxt" width="50" height="30" />,
    <Image src={assetReact} alt="react" width="30" height="30" />,
    <Image src={assetTS} alt="ts" width="30" height="30" />,
    <Image src={assetJS} alt="js" width="30" height="30" />,
    <Image src={assetNuxt} alt="nuxt" width="30" height="30" />,
  ];

  const renderWorkExperience = () =>
    MyInfo.work_experience.map((item, index) => (
      <div
        key={`#${index}`}
        style={{
          marginBottom: index != MyInfo.work_experience.length - 1 ? 20 : 0,
        }}
      >
        <SubTitleIcon text={item.date} state={"date"} />
        <SubTitleIcon text={item.location} state={"location"} />
        <div style={{}}>
          <div className="textTitle">{item.title1}</div>
          <div className="textTitle">{item.title2}</div>
          {item.details.map((text) => (
            <div key={`#${text}`} className={styles.rowRadio}>
              <div className={styles.dot} />
              <Box w={10} />
              <div style={{ flex: 1 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    ));

  const renderEducation = () =>
    MyInfo.education.map((item, index) => (
      <div key={`#${index}`}>
        {index === 1 && <Box h={25} />}
        <SubTitleIcon text={item.date} state={"date"} />
        <SubTitleIcon text={item.location} state={"location"} />
        <div>
          <div className="textTitle">{item.title1}</div>
          <div className="textTitle">{item.title2}</div>
        </div>
        <div>{item.details}</div>
      </div>
    ));

  const renderRowData = (
    title: string,
    value: string,
    percent: number,
    state: "text" | "progressbar"
  ) => {
    const isSmall = (size?.width ?? 0) < 394;
    return (
      <div key={`#00${title}`} className={styles.rowData}>
        <div className={styles.data}>
          <div>{title}</div>
        </div>
        <div className={styles.data} style={{ marginBottom: isSmall ? 5 : 0 }}>
          {state === "text" ? (
            <span>{value}</span>
          ) : (
            <ProgressBar percent={percent} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <TitleIcon title={"Profile"} state={"profile"} />
        <span>{MyInfo.details_profile}</span>
      </div>
      <div className="wrapContainer">
        <div className="flexInContainer">
          <Box h={30} />
          <div>
            <TitleIcon title={"Work Experience"} state={"work"} />
            <div>{renderWorkExperience()}</div>
          </div>
          <Box h={30} />
          <div>
            <TitleIcon title={"Education"} state={"education"} />
            <div>{renderEducation()}</div>
          </div>
        </div>
        <div className="flexInContainer">
          <Box h={30} />
          <div>
            <TitleIcon title={"Skills"} state={"skills"} />
            <div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {listSkill.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>

              <Box h={20} />
              <SubTitleIcon text={"LANGUAGES"} state={"alert"} />
              {MyInfo.skills.languages.map((item, index) =>
                renderRowData(item.name, item.level, 100, "text")
              )}

              <Box h={20} />
              <SubTitleIcon text={"SOFTWARE SKILLS"} state={"alert"} />
              {MyInfo.skills.software_skills.map((item, index) =>
                renderRowData(item.name, item.level, 100, "text")
              )}

              <Box h={20} />
              <SubTitleIcon text={"SOFT SKILLS"} state={"alert"} />
              {MyInfo.skills.soft_skills.map((item, index) =>
                renderRowData(item.name, "", item.percent, "progressbar")
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
