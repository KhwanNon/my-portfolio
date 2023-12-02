import React from "react";
import s from "./social.module.css";
import Image from "next/image";
import { assetCP4 } from "@/generated/assets";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTiktok,
  FaLine,
} from "react-icons/fa";
import Box from "@/base/components/ui/box";

export default function SocialComponent() {
  const social = [
    {
      name: "ig",
      color: "#FF6D60",
      link: "https://www.instagram.com/khwankuj/",
      icon: <FaInstagram size={20} color="#fff" />,
    },
    {
      name: "fb",
      color: "#279EFF",
      link: "https://www.facebook.com/profile.php?id=100003267797988",
      icon: <FaFacebookF size={20} color="#fff" />,
    },
    {
      name: "tt",
      color: "#000",
      link: "https://www.tiktok.com/@khwanchainontawic2?is_from_webapp=1&sender_device=pc",
      icon: <FaTiktok size={20} color="#fff" />,
    },
    {
      name: "ln",
      color: "#1C82AD",
      link: "https://www.linkedin.com/in/khwanchai-nontawichit-343468286/",
      icon: <FaLinkedin size={20} color="#fff" />,
    },
    {
      name: "li",
      color: "#3CCF4E",
      link: "https://line.me/ti/p/~lozcbus",
      icon: <FaLine size={20} color="#fff" />,
    },
  ];

  console.log("social");

  return (
    <>
      <Image src={assetCP4} alt={"avatar"} className={s.img} />
      <div className={s.social}>
        <div className="text-label-large text-black text-center">SOCIAL ONLINE</div>
        <Box h={20} />
        <div className="text-center text-small text-black">
          Explore the digital realm with our vibrant online community. Connect,
          share, and stay tuned for exciting updates!
        </div>
        <Box h={20} />
        <div className={s.socialBox}>
          {social.map((item, index) => (
            <div
              key={index}
              className={s.socialItem}
              onClick={() => window.open(item.link, "_blank")}
            >
              <div
                className={s.circleSocial}
                style={{ "--color": item.color } as any}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
