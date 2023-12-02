import React from "react";
import s from "./home.module.css";
import SkillsComponent from "./components/skills";
import ExperienceComponent from "./components/experience";
import ProfileComponent from "./components/profile";
import ProjectComponent from "./components/project";
import ContactComponent from "./components/contact";
import CoverComponent from "./components/cover";
import ExtensionComponent from "./components/extension";

export default function HomePage() {
  console.log("home");

  return (
    <div className={s.container}>
      <div id="cover" className={s.boxCover}>
        <CoverComponent />
      </div>
      <div id="profile" className={s.boxProfile}>
        <ProfileComponent />
      </div>
      <div id="skills" className={s.boxSkills}>
        <SkillsComponent />
      </div>
      <div id="project" className={s.boxProject}>
        <ProjectComponent />
      </div>
      <div id="experience" className={s.boxExperience}>
        <ExperienceComponent />
      </div>
      <div id="extension" className={s.boxExtension}>
        <ExtensionComponent />
      </div>
      <div id="contact" className={s.boxContact}>
        <ContactComponent />
      </div>
    </div>
  );
}
