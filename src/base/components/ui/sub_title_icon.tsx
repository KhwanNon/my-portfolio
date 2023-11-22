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
import Box from "./box";

type Props = {
  text: string;
  state: "date" | "location" | "alert" | "mail" | "phone" | "git";
};

export default function SubTitleIcon({ text, state }: Props) {
  const renderIcon = () => {
    let icon: any = {
      date: <FaCalendar size={12} color="grey" />,
      location: <FaMapMarker size={12} color="#00ADB5" />,
      alert: <FaExclamationCircle size={12} color="#3F72AF" />,
      phone: <FaPhone size={12} color="#A2FF86" />,
      mail: <FaEnvelope size={12} color="#EF5B0C" />,
    };

    return icon[state] || <></>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>{renderIcon()}</div>
      <Box w={5} />
      <span className="textSubTitle">{text}</span>
    </div>
  );
}
