import React from "react";
import { colorText } from "@/base/colors";

type Props = {
  title: string;
  state: string;
};

export default function TitleIcon({ title, state }: Props) {
  return (
    <div style={{ marginBottom: 15, marginTop: 20 }}>
      <span
        style={{
          fontSize: 23,
          paddingLeft: 10,
          fontWeight: "bold",
          color: colorText,
        }}
      >
        {title}
      </span>
    </div>
  );
}
