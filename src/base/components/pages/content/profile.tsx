import React from "react";
import TitleIcon from "../../ui/title_icon";
import { MyInfo } from "@/base/constanst";

export default function Profile() {
  return (
    <div>
      <TitleIcon title={"Profile"} state={"profile"} />
      <div style={{ paddingLeft: 30 }}>
        <span>{MyInfo.details_profile}</span>
      </div>
    </div>
  );
}
