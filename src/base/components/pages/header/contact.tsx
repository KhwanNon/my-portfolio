import React from "react";
import SubTitleIcon from "../../ui/sub_title_icon";
import { colorText } from "@/base/colors";
import { MyInfo } from "@/base/constanst";
import Box from "../../ui/box";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

export default function HeaderContact() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <SubTitleIcon text={MyInfo.contact.phone} state={"phone"} />
      <Box h={5} />
      <SubTitleIcon text={MyInfo.contact.email} state={"mail"} />
    </div>
  );
}
