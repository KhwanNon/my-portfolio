import React from "react";

type Props = {
  text: string;
};

export default function TextBold({ text }: Props) {
  return <div style={{ fontSize: 18, fontWeight: "bold" }}>{text}</div>;
}
