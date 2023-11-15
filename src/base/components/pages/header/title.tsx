import { colorText } from "@/base/colors";
import { MyInfo } from "@/base/constanst";
import React from "react";

export default function HeaderTitle() {
  return (
    <div>
      <span
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: colorText,
        }}
      >
        {MyInfo.contact.name}
      </span>
    </div>
  );
}
