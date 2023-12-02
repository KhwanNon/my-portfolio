import React from "react";
import s from "./cover.module.css";
import { MyInfo } from "@/base/constanst";
import Box from "@/base/components/ui/box";
import Image from "next/image";
import { assetCP1 } from "@/generated/assets";

export default function CoverComponent() {
  console.log("cover");

  return (
    <>
      <Image src={assetCP1} alt={"cp1"} className={s.imgBg} />
      <div className={s.container}>
        <div className="text-very-large text-white text-center">
          {MyInfo.contact.name}
        </div>
        <Box h={40} />
        <div className="text-white text-small text-center">
          WELCOME TO MY PORTFOLIO
        </div>
        <Box h={30} />
        <div className={s.rowBtn}>
          <button
            className={s.btnStyle}
            onClick={() => {
              const section: any = document.getElementById("profile");
              section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            VIEW PROFILE
          </button>
          <Box w={30} />
          <button
            className={s.btnStyle}
            onClick={() => {
              const section: any = document.getElementById("project");
              section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            VIEW PROJECT
          </button>
        </div>
      </div>
    </>
  );
}
