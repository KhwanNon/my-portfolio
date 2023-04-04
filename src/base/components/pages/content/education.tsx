import React from "react";
import Box from "../../ui/box";
import TitleIcon from "../../ui/title_icon";
import TextBold from "../../ui/text_bold";
import { MyInfo } from "@/base/constanst";
import SubTitleIcon from "../../ui/sub_title_icon";

export default function Education() {
  const renderEducation = () =>
    MyInfo.education.map((item, index) => (
      <div key={`#${index}`}>
        {index === 1 && <Box h={25} />}
        <SubTitleIcon text={item.date} state={"date"} />
        <SubTitleIcon text={item.location} state={"location"} />
        <div style={{ paddingLeft: 20 }}>
          <TextBold text={item.title1} />
          <TextBold text={item.title2} />
        </div>
        <div>{item.details}</div>
      </div>
    ));

  return (
    <div>
      <TitleIcon title={"Education"} state={"education"} />
      <div style={{ paddingLeft: 10 }}>{renderEducation()}</div>
    </div>
  );
}
