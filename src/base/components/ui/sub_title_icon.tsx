import React from "react";
import {
  FaCalendar,
  FaExclamationCircle,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

type Props = {
  text: string;
  spaceLeft?: boolean;
  state: "date" | "location" | "alert" | "mail" | "phone";
};

export default function SubTitleIcon({ text, state, spaceLeft }: Props) {
  const renderIcon = () => {
    let icon: any = {
      date: <FaCalendar size={12} color="grey" />,
      location: <FaMapMarker size={12} color="grey" />,
      alert: <FaExclamationCircle size={12} color="grey" />,
      phone: <FaPhone size={12} color="grey" />,
      mail: <FaEnvelope size={12} color="grey" />,
    };

    return icon[state] || <></>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginLeft: 20}}>{renderIcon()}</div>
      <span style={{ marginLeft: 5 }}>{text}</span>
    </div>
  );
}
