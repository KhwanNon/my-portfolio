import React, { useState } from "react";
import s from "./project.module.css";
import { MyInfo } from "@/base/constanst";
import Box from "@/base/components/ui/box";
import Image from "next/image";
import { assetCP3 } from "@/generated/assets";
import { useWindowSize } from "@/hooks/use_window_size";
import { FaCaretDown } from "react-icons/fa";

export default function ProjectComponent() {
  const size = useWindowSize();
  const ipadSize: boolean = (size?.width ?? 0) < 631;
  const [indexActive, setIndexActive] = useState<number>(0);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  console.log("project");

  const handleTabClick = (index: number) => {
    if (index === indexActive) return;
    setIndexActive(index);
  };

  const onSelectProject = (index: number) => {
    handleTabClick(index);
    setOpenDropdown(false);
  };

  const renderDropdown = () => {
    return (
      <>
        <div
          className={s.tabActive}
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          {MyInfo.project[indexActive].name.toUpperCase()}
          <FaCaretDown size={15} color="#000" className={s.arrowDown} />
        </div>
        {openDropdown && (
          <div className={s.dropdown}>
            {MyInfo.project.map((itm, idx) => (
              <div
                key={idx}
                className={
                  indexActive == idx ? s.dropdownListActive : s.dropdownList
                }
                onClick={() => onSelectProject(idx)}
              >
                {itm.name.toUpperCase()}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <Image src={assetCP3} alt={"cp3"} className={s.imgBg} />
      <div
        style={{ zIndex: 2 }}
        className="text-white text-label-large m-20 text-center"
      >
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
              width="250"
              height="500"
              className={s.itemImage}
            />
          ))}
        </div>
      </div>
      <div className={s.boxTabs}>
        {ipadSize
          ? renderDropdown()
          : MyInfo.project.map((item, index) => (
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
