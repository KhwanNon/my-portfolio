import React from "react";

type Props = {
  percent: number;
};

export default function ProgressBar({ percent }: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 200,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{ width: `${percent}%`, background: "#393E46", height: 12 }}
      />
      <div
        style={{
          height: 12,
          background: "lightgrey",
          width: `${100 - percent}%`,
        }}
      />
    </div>
  );
}
