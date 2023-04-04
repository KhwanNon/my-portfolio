import React from "react";

type Props = {
  h?: number;
  w?: number;
};

export default function Box({ h, w }: Props) {
  return <div style={{ width: w, height: h }} />;
}
