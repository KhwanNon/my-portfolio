import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaReact,
  FaTiktok,
} from "react-icons/fa";
import Box from "@/base/components/ui/box";
import s from "./contact.module.css";
import { MyInfo } from "@/base/constanst";

export default function ContactComponent() {
  console.log("contact");
  const social = [
    {
      name: "ig",
      link: "https://www.instagram.com/khwankuj/",
      icon: <FaInstagram size={20} color="#000" />,
    },
    {
      name: "fb",
      link: "https://www.facebook.com/profile.php?id=100003267797988",
      icon: <FaFacebookF size={20} color="#000" />,
    },
    {
      name: "tt",
      link: "https://www.tiktok.com/@khwanchainontawic2?is_from_webapp=1&sender_device=pc",
      icon: <FaTiktok size={20} color="#000" />,
    },
    {
      name: "ln",
      link: "https://www.linkedin.com/in/khwanchai-nontawichit-343468286/",
      icon: <FaLinkedin size={20} color="#000" />,
    },
    {
      name: "li",
      link: "https://line.me/ti/p/~lozcbus",
      icon: <FaLine size={20} color="#000" />,
    },
  ];

  return (
    <div className={s.container}>
      <FaReact size={40} color="#000" />
      <Box h={20} />
      <div className="text-label-medium text-center">
        YOU CAN REACH OUT TO ME AT!
      </div>
      <Box h={60} />
      <div className={s.row}>
        <div>Find me on</div>
        {social.map((item, index) => (
          <div
            key={index}
            className={s.socialItem}
            onClick={() => window.open(item.link, "_blank")}
          >
            <div>{item.icon}</div>
          </div>
        ))}
      </div>
      <Box h={50} />
      <div className={s.row}>
        <div className={s.flex}>
          <div>PHONE</div>
          <Box h={10} />
          <div className={s.text}>{MyInfo.contact.phone}</div>
        </div>
        <div className={s.flex}>
          <div>EMAIL</div>
          <Box h={10} />
          <div className={s.text}>{MyInfo.contact.email}</div>
        </div>
        <div className={s.flex}>
          <div>ADDRESS</div>
          <Box h={10} />
          <div className={s.text}>{MyInfo.contact.address}</div>
        </div>
      </div>
    </div>
  );
}
