import React from "react";
import s from "./home.module.css";
import SkillsComponent from "./components/skills";
import ExperienceComponent from "./components/experience";
import SocialComponent from "./components/social";
import ProfileComponent from "./components/profile";
import ProjectComponent from "./components/project";
import ContactComponent from "./components/contact";
import CoverComponent from "./components/cover";
import { assetBL2 } from "@/generated/assets";

export default function HomePage() {
  console.log('home');
  
  return (
    <div className={s.container}>
      <div className={s.boxCover}>
        <CoverComponent />
      </div>
      <div className={s.boxProfile}>
        <ProfileComponent />
      </div>
      <div className={s.boxSkills}>
        <SkillsComponent />
      </div>
      <div className={s.boxProject}>
        <ProjectComponent />
      </div>
      <div className={s.boxExperience}>
        <ExperienceComponent />
      </div>
      <div className={s.boxSocial}>
        <SocialComponent />
      </div>
      <div className={s.boxContact}>
        <ContactComponent />
      </div>
    </div>
  );
}
