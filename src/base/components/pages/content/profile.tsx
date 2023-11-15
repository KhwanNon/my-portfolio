import React from "react";
import { MyInfo } from "@/base/constanst";
import { colorText } from "@/base/colors";

export default function Profile() {
  return (
    <div>
      <div style={{ paddingLeft: 30 }}>
        <span style={{ fontSize: 18, color: colorText }}>
          {MyInfo.details_profile}
        </span>
      </div>
    </div>
  );
}
