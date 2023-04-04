import React from "react";
import SubTitleIcon from "../../ui/sub_title_icon";

export default function HeaderContact() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <SubTitleIcon text={"083-862-3540"} state={"phone"} />
      <SubTitleIcon text={"Khwan.nontawichit@gmail.com"} state={"mail"} />
    </div>
  );
}
