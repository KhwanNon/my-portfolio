import { MyInfo } from "@/base/constanst";
import React from "react";
import {
  FaCalendar,
  FaExclamationCircle,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

type Props = {
  text: string;
  spaceLeft?: boolean;
  state: "date" | "location" | "alert" | "mail" | "phone" | "git";
};

export default function SubTitleIcon({ text, state, spaceLeft }: Props) {
  const renderIcon = () => {
    let icon: any = {
      date: <FaCalendar size={12} color="#B7B7B7" />,
      location: <FaMapMarker size={12} color="#FE0000" />,
      alert: <FaExclamationCircle size={12} color="#EDE4E0" />,
      phone: <FaPhone size={12} color="#38E54D" />,
      mail: <FaEnvelope size={12} color="#EF5B0C" />,
    };

    return icon[state] || <></>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginLeft: 20 }}>{renderIcon()}</div>
      <span
        style={{
          marginLeft: 5,
          fontWeight: "bold",
          color: "#EEEEEE",
        }}
      >
        {text}
      </span>
    </div>
  );
}
