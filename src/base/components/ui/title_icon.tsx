import React from "react";
import { colorMain } from "@/base/colors";

import {
  FaUser,
  FaStar,
  FaClock,
  FaBlackTie,
  FaDatabase,
  FaLightbulb,
} from "react-icons/fa";

type Props = {
  title: string;
  state: string;
};

export default function TitleIcon({ title, state }: Props) {
  const renderIcon = () => {
    let icon: any = {
      profile: <FaUser size={18} color="grey" />,
      work: <FaBlackTie size={18} color="grey" />,
      education: <FaClock size={18} color="grey" />,
      objective: <FaStar size={18} color="grey" />,
      skills: <FaLightbulb size={18} color="grey" />,
      project: <FaDatabase size={18} color="grey" />,
    };

    return icon[state] || <></>;
  };

  return (
    <div style={{ marginBottom: 15, marginTop: 20 }}>
      {renderIcon()}
      <span
        style={{
          fontSize: 23,
          paddingLeft: 10,
          fontWeight: "bold",
          color: colorMain,
        }}
      >
        {title}
      </span>
    </div>
  );
}
