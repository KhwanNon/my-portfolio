import { colorGoLight } from "@/base/colors";
import React from "react";

type Props = {
  text: string;
};

export default function TextBold({ text }: Props) {
  return (
    <div style={{ fontSize: 18, fontWeight: "bold", color: "#EFEAD8" }}>
      {text}
    </div>
  );
}
