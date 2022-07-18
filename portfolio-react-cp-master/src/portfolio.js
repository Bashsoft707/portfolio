/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import React from "react";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Alausa Bashir",
  title: "Hi all, I'm Bashir",
  subTitle: emoji(
    "A Software developer dedicated to helping clients accomplish technical goals by developing user friendly, purpose-driven and forward-thinking apps. Experience in handling complex coding tasks, testing and debugging to address inconsistencies and maintain performance thresholds, applying deep technical knowledge and creative design sense to amplify online traffic. Quality-focused developer with a history of working well in fast-paced, challenging, and team-oriented environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1oi689s7dIh04zHRK8j_mJ8HoLRS85hqh/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bashsoft707",
  linkedin: "https://www.linkedin.com/in/alausa-bashir-b5780b19b",
  gmail: "contact@dalausabashir.com",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  instagram: "https://www.instagram.com/bashsofts/",
  twitter: "https://twitter.com/eemamBashir",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FRONT END WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Focuses on databases, scripting, website architecture for server-side development"
    ),
    emoji(
      "⚡ Writing unit tests to help detect and protect against future bugs"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-type",
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fab fa-graphql",
    },
    {
      skillName: "apollo-client",
      fontAwesomeClassname: "fas apollo-client",
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-mongodb",
    },
    {
      skillName: "fluent-ui",
      fontAwesomeClassname: "fab fa-fluent-ui",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lagos State University",
      logo: require("./assets/images/lasuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2020 - Till Date",
      desc:
        "Relevant Coursework: Data Structure & Algorithm, Discrete Mathematics, Embedded System Design, Management Information System, Computer Architecture, Network Security, Object Oriented Language using C++ etc.",
    },
    {
      schoolName: "Gateway [ICT] Polytechnic",
      logo: require("./assets/images/gaposaLogo.png"),
      subHeader: "National Diploma in Computer Science",
      duration: "December 2017 - September 2019",
      desc:
        "Relevant Coursework: Fundamentals of Data Structure, Algorithm & Its Complexities, Computer Hardware & Maintenance, Database Management System, Computer Architecture, Intelligent Systems, Object Oriented Language using Java etc.",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Hololux GmBH",
      companylogo: require("./assets/images/hololux.jpg"),
      date: "April 2022 – Present",
      desc:
        "Hololux is a team of interdisciplinary graphic designers and programmers with a focus on disruptive immersive media in the fields of virtual reality, augmented reality and mixed reality.",
    },
    {
      role: "Software Engineer",
      company: "Bitpowr Technologies",
      companylogo: require("./assets/images/bitpowr.jpg"),
      date: "Novermber 2021 – March 2022",
      desc:
        "Bitpowr is a blockchain payment solution and wallet infrastructure that lets you accept and process Crypto-Payments, manage crypto wallets and build secured digital business. Payment Infrastructure and Wallet Management.",
    },
    {
      role: "Software Engineer",
      company: "Pleasant Codes",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "February 2021 – September 2021",
      desc: "",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Bashsoft707", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/hololux.jpg"),
    //   projectName: "Porsche TRACE",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "",
    //     },
    //   ],
    // },
    {
      image: require("./assets/images/bitpowr.jpg"),
      projectName: "BitpowrTooling",
      projectDesc:
        "An internal tooling for Bitpowr that includes logging and webhooks",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gitlab.com/bitpowr/bitpowrtooling",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://hashnode.com/post/how-to-use-sort-and-join-array-methods-in-javascript-cknpuqzg90sojlps1aqqt72kc",
      title: "How to use sort() and join() array methods in JavaScript",
      description:
        "A detailed article on using the sort() & join() array method efficiently",
    },
    {
      url:
      "https://hashnode.com/post/hng-internship-i8-x-i4g-an-avenue-to-be-a-better-self-cksennk3q0n99u5s14ll8br21",
      title: "HNG Internship i8 x i4G: An avenue to be a better self",
      description:
        "Changing the world, one intern at a time",
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234 9027647320",
  email_address: "contact@alausabashir.com",
};

// Twitter Section

const twitterDetails = {
  userName: "eemamBashir", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
