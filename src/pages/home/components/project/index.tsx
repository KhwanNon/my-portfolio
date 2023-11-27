import React, { useState } from "react";
import s from "./project.module.css";
import { MyInfo } from "@/base/constanst";
import Box from "@/base/components/ui/box";
import Image from "next/image";
import { assetCP3 } from "@/generated/assets";

export default function ProjectComponent() {
  const [indexActive, setIndexActive] = useState<number>(0);

  console.log("project");

  const handleTabClick = (index: number) => {
    if (index === indexActive) return;
    setIndexActive(index);
  };

  return (
    <>
      <Image src={assetCP3} alt={"cp3"} className={s.imgBg} />
      <div className="text-white text-label-large m-20" style={{ zIndex: 2 }}>
        MOBILE DEVELOPMENT PROJECT
      </div>
      <Box h={20} />
      <div className={s.boxListProject}>
        <div>
          {MyInfo.project[indexActive].img.map((item, i) => (
            <Image
              key={`#${i}`}
              src={item}
              alt={item}
              width="240"
              height="500"
              className={s.itemImage}
            />
          ))}
        </div>
      </div>
      <Box h={30} />
      <div className={s.boxTabs}>
        {MyInfo.project.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === indexActive ? s.tabActive : s.tab}
          >
            {item.name.toUpperCase()}
          </div>
        ))}
      </div>
    </>
  );
}
