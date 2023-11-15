import React from "react";
import Box from "../../ui/box";
import TitleIcon from "../../ui/title_icon";
import TextBold from "../../ui/text_bold";
import { colorText } from "@/base/colors";
import { MyInfo } from "@/base/constanst";
import SubTitleIcon from "../../ui/sub_title_icon";

export default function WorkExperience() {
  const renderTextRaio = (text: string) => (
    <div
      key={`#${text}`}
      style={{ display: "flex", flexDirection: "row", alignItems: "start" }}
    >
      <div
        style={{
          width: 5,
          height: 5,
          marginTop: 7,
          borderRadius: 10,
          background: colorText,
        }}
      />
      <Box w={10} />
      <div style={{ flex: 1, color: "#D0C9C0" }}>{text}</div>
    </div>
  );

  const renderWorkExperience = () =>
    MyInfo.work_experience.map((item, index) => (
      <div key={`#${index}`} style={{ marginBottom: index == 0 ? 20 : 0 }}>
        <SubTitleIcon text={item.date} state={"date"} />
        <SubTitleIcon text={item.location} state={"location"} />
        <div style={{ paddingLeft: 20 }}>
          <TextBold text={item.title1} />
          <TextBold text={item.title2} />
          {item.details.map((itm) => renderTextRaio(itm))}
        </div>
      </div>
    ));

  return (
    <div>
      <TitleIcon title={"Work Experience"} state={"work"} />
      <div style={{ padding: 10 }}>{renderWorkExperience()}</div>
    </div>
  );
}
