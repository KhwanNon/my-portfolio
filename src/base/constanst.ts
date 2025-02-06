import {
  assetVN4,
  assetVN3,
  assetVN2,
  assetVN1,
  assetBL1,
  assetBL2,
  assetBL3,
  assetBL4,
  assetEVP1,
  assetEVP2,
  assetEVP3,
  assetEVP4,
  assetG2G1,
  assetG2G2,
  assetG2G3,
  assetG2G4,
  assetEF1,
  assetEF2,
  assetEF3,
  assetEF4,
  assetMO1,
  assetMO2,
  assetMO3,
  assetMO4,
  assetAI1,
  assetAI2,
  assetAI3,
  assetAI4,
} from "@/generated/assets";

export const MyInfo = {
  contact: {
    name: "Khwanchai Nontawichit",
    phone: "📱 +66 642-565-976",
    email: "📧 khwan.nontawichit@gmail.com",
    git: "https://github.com/KhwanNon?tab=repositories",
    address: "📍 Bangkok, Thailand",
    theme:
      "https://marketplace.visualstudio.com/items?itemName=GopherTheme.gumua-gopher-theme",
  },
  details_profile:
    "Hello, my name is Khwan, a 26-year-old Mobile Developer with over 3 years of experience in Flutter development. I have a strong background in leading development teams, structuring applications with Clean Architecture, and managing environments efficiently. I am passionate about mobile development and always eager to take on new challenges. Additionally, I can contribute to front-end development in various languages and frameworks, even those I haven’t previously worked with, as I quickly adapt and learn due to shared concepts across technologies.",
  work_experience: [
    {
      date: "01/2024 - Present",
      location: "Thailand, Bangkok",
      title1: "Development/Mobile-app Developer",
      title2: "LEARNCLOUD CO., LTD.",
      details: [
        "Led the development of Flutter applications from scratch, implementing Clean Architecture.",
        "Collaborated with backend, AI, and design teams, contributing ideas and assisting in UX/UI design.",
        "Participated in Scrum-based planning meetings to ensure smooth project execution.",
        "Managed app deployment to both the App Store & Play Store.",
        "Oversaw version control, release management, and test build distribution.",
        "Served as Mobile Team Lead, assigning tasks and managing workflows using Jira.",
      ],
    },
    {
      date: "05/2023 - 10/2023",
      location: "Thailand, Chon Buri",
      title1: "Mobile Developer",
      title2: "MYORDER MARKETING CO., LTD.",
      details: [
        "Developed mobile applications using Flutter and React Native.",
        "Worked with a team of developers to maintain and enhance applications.",
        "Contributed to project planning, design discussions, and team meetings.",
      ],
    },
    {
      date: "09/2021 - 04/2023",
      location: "Thailand, Bangkok",
      title1: "Mobile Developer",
      title2: "MINERTA TECHNOLOGY CO., LTD.",
      details: [
        "Developed mobile and web applications.",
        "Mentored junior developers, providing guidance on best practices, code reviews, and improving maintainability.",
        "Worked in a collaborative team to maintain and enhance applications.",
        "Assisted senior developers in coding, testing, and debugging mobile applications.",
        "Participated in team meetings and contributed to project planning & design discussions.",
      ],
    },
  ],
  education: [
    {
      date: "2017 - 2021",
      location: "Thailand, Chonburi",
      title1: "Software Engineering",
      title2: "Burapha University",
      details: [
        "Studied a comprehensive curriculum covering software development, algorithms, databases, and related topics.",
        "Engaged in hands-on projects and assignments to apply theoretical knowledge to real-world scenarios.",
        "Participated in extracurricular activities, workshops, and events to enhance skills and network with peers.",
      ],
    },
    {
      date: "2011 - 2017",
      location: "Thailand, Chachoengsao",
      title1: "High School",
      title2: "Sanam Chai Khet School",
      details: [
        "Completed a comprehensive high school curriculum, covering a range of subjects.",
        "Participated in extracurricular activities and events, developing interpersonal and leadership skills.",
      ],
    },
  ],
  skills: {
    languages: [
      {
        name: "English",
        level: "Basic",
      },
    ],
    software_skills: [
      {
        name: "Flutter",
        level: "3 Year",
      },
      {
        name: "React Native",
        level: "5 Month",
      },
      {
        name: "Next",
        level: "1 Month",
      },
      {
        name: "Nuxt",
        level: "2 Month",
      },
      {
        name: "Android (Kotlin)",
        level: "4 Month",
      },
      {
        name: "TypeScript/JavaScript",
        level: "",
      },
      {
        name: "HTML/CSS",
        level: "",
      },
      {
        name: "C/C++",
        level: "",
      },
    ],
    soft_skills: [
      {
        name: "Teamwork",
        percent: 80,
      },
      {
        name: "Analytical Skills",
        percent: 80,
      },
      {
        name: "Problem-solving",
        percent: 70,
      },
      {
        name: "Time Management",
        percent: 80,
      },
      {
        name: "Multitasking",
        percent: 80,
      },
      {
        name: "Communication",
        percent: 70,
      },
    ],
  },
  project: [
    {
      name: "aiLearn",
      details: "",
      link: "https://play.google.com/store/apps/details?id=ai.myorder&hl=th&gl=US&pli=1",
      img: [assetAI1, assetAI2, assetAI3, assetAI4],
    },
    {
      name: "My order",
      details:
        "I employ React Native with TypeScript for my development projects. Utilizing this powerful combination, I build cross-platform mobile applications with a strong emphasis on code quality, scalability, and maintainability. The integration of TypeScript enhances the development experience, providing static typing and improved code structuring. ",
      link: "https://play.google.com/store/apps/details?id=ai.myorder&hl=th&gl=US&pli=1",
      img: [assetMO1, assetMO2, assetMO3, assetMO4],
    },
    {
      name: "The Blacklist",
      details:
        "I utilize Nuxt for my development endeavors. Leveraging its capabilities, I craft dynamic and performant web applications with a focus on scalability and user experience. Nuxt's framework empowers me to streamline the development process and deliver modern, responsive, and feature-rich websites.",
      link: "",
      img: [assetBL1, assetBL2, assetBL3, assetBL4],
    },
    {
      name: "G2G",
      details:
        "I employ React Native with TypeScript for my development projects. Utilizing this powerful combination, I build cross-platform mobile applications with a strong emphasis on code quality, scalability, and maintainability. The integration of TypeScript enhances the development experience, providing static typing and improved code structuring. ",
      link: "",
      img: [assetG2G1, assetG2G2, assetG2G3, assetG2G4],
    },
    {
      name: "EVP Network",
      details:
        "I employ React Native with TypeScript for my development projects. Utilizing this powerful combination, I build cross-platform mobile applications with a strong emphasis on code quality, scalability, and maintainability. The integration of TypeScript enhances the development experience, providing static typing and improved code structuring. ",
      link: "",
      img: [assetEVP1, assetEVP2, assetEVP3, assetEVP4],
    },
    {
      name: "VN",
      details:
        "I leverage Flutter for my development projects, taking advantage of its robust framework to build cross-platform mobile applications with a seamless user experience. The versatility and efficiency of Flutter empower me to create visually appealing and performant applications for both Android and iOS platforms.",
      link: "https://play.google.com/store/apps/details?id=com.viknavara.vn",
      img: [assetVN1, assetVN2, assetVN3, assetVN4],
    },
    {
      name: "Enfagrow",
      details:
        "I leverage Flutter for my development projects, taking advantage of its robust framework to build cross-platform mobile applications with a seamless user experience. The versatility and efficiency of Flutter empower me to create visually appealing and performant applications for both Android and iOS platforms.",
      link: "",
      img: [assetEF1, assetEF2, assetEF3, assetEF4],
    },
  ],
};
