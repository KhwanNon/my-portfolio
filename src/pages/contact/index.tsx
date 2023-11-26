import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { assetBannerContact } from "@/generated/assets";
import Box from "@/base/components/ui/box";
import { MyInfo } from "@/base/constanst";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTiktok,
  FaLine,
} from "react-icons/fa";
import { useRouter } from "next/router";

export default function ContactPage() {
  const router = useRouter();

  const channel = [
    {
      title: "GITHUB",
      data: "Click to view my GitHub profile",
      value: MyInfo.contact.git,
    },
    {
      title: "PHONE",
      data: MyInfo.contact.phone,
      value: MyInfo.contact.phone,
    },
    {
      title: "GENERAL INQUIRIES",
      data: MyInfo.contact.email,
      value: MyInfo.contact.email,
    },
  ];

  const social = [
    {
      name: "ig",
      color: "#FF6D60",
      link: "https://colorhunt.co/palettes/green",
      icon: <FaInstagram size={20} color="#fff" />,
    },
    {
      name: "fb",
      color: "#279EFF",
      link: "",
      icon: <FaFacebookF size={20} color="#fff" />,
    },
    {
      name: "tt",
      color: "#000",
      link: "",
      icon: <FaTiktok size={20} color="#fff" />,
    },
    {
      name: "ln",
      color: "#1C82AD",
      link: "",
      icon: <FaLinkedin size={20} color="#fff" />,
    },
    {
      name: "li",
      color: "#3CCF4E",
      link: "",
      icon: <FaLine size={20} color="#fff" />,
    },
  ];

  function buttonGit() {
    return (
      <button className={styles.btnGit}>
        <span className={styles.textGit}>GO TO GITHUB</span>
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={assetBannerContact}
          alt={"banner"}
          className={styles.banner}
        />
        <div className={styles.textHeader}>
          <div className={styles.hd1}>FOR INQUIRIES</div>
          <Box h={15} />
          <div className={styles.hd2}>CONTACT ME</div>
        </div>
      </div>

      <Box h={15} />
      <div className={styles.content}>
        <div className={styles.channelContainer}>
          {channel.map((item, index) => (
            <div className={styles.channel}>
              <div className={styles.chTitle}>{item.title}</div>
              <Box h={5} />
              <div className={styles.chValue}>{item.data}</div>
            </div>
          ))}
        </div>

        <div className={styles.textHeader}>
          <div className={styles.hd1}>OR CONTACT AT</div>
          <Box h={10} />
          <div className={styles.hd2}>SOCIAL ONLINE</div>
        </div>

        <Box h={10} />
        <div className={styles.socialContainer}>
          {social.map((item, index) => (
            <div className={styles.social}>
              <div
                className={styles.circleSocial}
                style={{ "--color": item.color } as any}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
        <Box h={20} />
      </div>
    </div>
  );
}
