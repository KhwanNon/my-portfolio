import React from "react";
import s from "./experience.module.css";
import { MyInfo } from "@/base/constanst";
import Box from "@/base/components/ui/box";

export default function ExperienceComponent() {
  console.log("experience");
  return (
    <>
      <div className={s.work}>
        <div
          className="text-label-large text-center text-white"
          style={{ color: "#fff" }}
        >
          EXPERIENCE
        </div>
        {MyInfo.work_experience.map((item, i) => (
          <div
            key={i}
            className={s.box}
            style={{ "--color": "#fff" } as any}
          >
            <div className="text-small">{item.date}</div>
            <div className="text-small">{item.location}</div>
            <Box h={10} />
            <div className="text-small">{item.title1}</div>
            <div className="text-small">{item.title2}</div>
            <Box h={10} />
            <div>
              {item.details.map((itm, inx) => (
                <>
                  <div key={inx} className="text-very-small">
                    - {itm}
                  </div>
                  <Box h={5} />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={s.education}>
        <div
          className="text-label-large text-center text-white"
          style={{ color: "#63e8fd" }}
        >
          EDUCATION
        </div>
        {MyInfo.education.map((item, i) => (
          <div
            key={i}
            className={s.box}
            style={{ "--color": "#63e8fd" } as any}
          >
            <div className="text-small">{item.date}</div>
            <div className="text-small">{item.location}</div>
            <Box h={10} />
            <div className="text-small">{item.title1}</div>
            <div className="text-small">{item.title2}</div>
            <Box h={10} />
            <div>
              {item.details.map((itm, inx) => (
                <div key={inx}>
                  <div className="text-very-small">- {itm}</div>
                  <Box h={5} />
                </div>
              ))}
            </div>
            <Box h={10} />
          </div>
        ))}
      </div>
    </>
  );
}
