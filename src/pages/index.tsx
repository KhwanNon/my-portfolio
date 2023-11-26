import React from "react";
import styles from "./main.module.css";
import Image from "next/image";
import { assetCP1, assetCP2, assetCP3 } from "@/generated/assets";
import Box from "@/base/components/ui/box";
import { MyInfo } from "@/base/constanst";
import HomePage from "./home";

export default function Main() {
  const skills = ["SOFT SKILLS", "HARD SKILLS", "LANGUADE"];
  return (
    <HomePage />
    // <div className={styles.container}>
    //   <div className={styles.coverContainer}>
    //     <Image src={assetCP1} alt={"cover"} className={styles.cover} />
    //     <div className={styles.coverContent}>
    //       <div className={styles.textName}>KHWANCHAI NONTAWICHIT</div>
    //       <Box h={40} />
    //       <div className={styles.text20}>WELCOME TO MY PORTFOLIO</div>
    //       <Box h={30} />
    //       <div className={styles.row}>
    //         <button className={styles.btnStyle}>BUTTON</button>
    //         <Box w={20} />
    //         <button className={styles.btnStyle}>BUTTON</button>
    //       </div>
    //       <Box h={100} />
    //     </div>
    //   </div>
    //   <div className={styles.infoContainer}>
    //     <div className={styles.info}>
    //       <div className={styles.textTitleYellow}>PROFILE AND INTERESTS</div>
    //       <Box h={20} />
    //       <div className={styles.textBodyWhite}>{MyInfo.details_profile}</div>
    //     </div>
    //   </div>
    //   <div className={styles.skillsContainer}>
    //     <div className={styles.skillsTab}>
    //       <div className={styles.textTitleWhite}>SKILLS AND</div>
    //       <div className={styles.textTitleWhite}>LANGUADE</div>
    //       <div>
    //         {skills.map((item, index) => (
    //           <div
    //             key={index}
    //             className={
    //               index == 0 ? styles.listSkillsActive : styles.listSkills
    //             }
    //           >
    //             {item}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <Image src={assetCP2} alt={"cp2"} className={styles.cp2} />
    //     <div className={styles.skillsInfo}></div>
    //   </div>
    //   <Box h={40} />
    //   <div className={styles.workExperience}>
    //     <Image src={assetCP3} alt={"cp3"} className={styles.cp3} />
    //     <div className={styles.textExperience}>WORK EXPERIENCE</div>
    //     <div className={styles.rowExperience}>
    //       <div className={styles.boxExperience}></div>
    //       <div className={styles.boxExperience}></div>
    //     </div>
    //   </div>
    //   <div className={styles.education}></div>
    //   <div className={styles.socialOnline}></div>
    //   <div className={styles.contact}></div>
    // </div>
  );
}
