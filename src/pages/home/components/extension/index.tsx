import React from "react";
import s from "./extension.module.css";
import Image from "next/image";
import { assetCP4 } from "@/generated/assets";
import Box from "@/base/components/ui/box";
import { MyInfo } from "@/base/constanst";

export default function ExtensionComponent() {
  console.log("extension");

  return (
    <>
      <Image src={assetCP4} alt={"avatar"} className={s.img} />
      <div className={s.extension}>
        <div className="text-label-large text-black text-center">EXTENSION</div>
        <Box h={20} />
        <div className="text-center text-small text-black">
          This extension incorporates both my customized Visual Studio Code (VS
          Code) theme and my GitHub. The VS Code theme is crafted based on my
          personal preferences for visual styling, while GitHub serves as a
          platform for storing my personal projects.
        </div>
        <Box h={40} />
        <div className={s.rowBtn}>
          <button
            className={s.btnStyle}
            style={{ "--color": "#63e8fd", "--text": "#000" } as any}
            onClick={() => window.open(MyInfo.contact.git, "_blank")}
          >
            GITHUB
          </button>
          <button
            className={s.btnStyle}
            style={{ "--color": "#e5362e", "--text": "#fff" } as any}
            onClick={() => window.open(MyInfo.contact.theme, "_blank")}
          >
            VS CODE THEME
          </button>
        </div>
      </div>
    </>
  );
}
