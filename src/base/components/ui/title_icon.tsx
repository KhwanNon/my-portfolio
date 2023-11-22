import React from "react";

type Props = {
  title: string;
  state: string;
};

export default function TitleIcon({ title }: Props) {
  return (
    <div style={{ marginBottom: 10}}>
      <span className="textHeader">*{title}</span>
    </div>
  );
}
