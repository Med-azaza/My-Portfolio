import todo from "../img/todo.png";
import tnfeed from "../img/tnfeed.png";
//import weather from "../img/weather.png";
import chat from "../img/chatapp.png";
import ss from "../img/ss.png";
import nftfever from "../img/nftfever.png";
import mdv from "../img/mdv.png";
import rps from "../img/rps.png";
import rfc from "../img/rfc.png";
import lc from "../img/linkcrate.png";
import mm from "../img/match-mates.png";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFramer,
  SiVite,
  SiVercel,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiSupabaseLine, RiTailwindCssFill } from "react-icons/ri";

const projects = [
  {
    link: "https://link-crate.vercel.app/",
    title: "LinkCrate",
    description:
      "LinkCrate is a modern web app built with React, TypeScript, and Supabase. It allows users to create accounts, manage social/media links, and upload profile images. Each user gets a unique shareable link and a QR code directing to their public profile page, perfect for networking and showcasing their online presence.",
    preview: lc,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "TypeScript", logo: <BiLogoTypescript /> },
      { name: "Vite", logo: <SiVite /> },
      { name: "Supabase", logo: <RiSupabaseLine /> },
      { name: "TailwindCSS", logo: <RiTailwindCssFill /> },
      { name: "Vercel", logo: <SiVercel /> },
    ],
  },
  {
    link: "https://match-mates.vercel.app/",
    title: "MatchMates",
    description:
      "MatchMates is an engaging memory card game built with React, TypeScript, Vite, and SCSS. Designed for 1-4 players, it challenges users to match pairs of cards with customizable themes and grid sizes (4x4 or 6x6). The app tracks time, moves, and scores in real time, catering to both solo and multiplayer sessions. With a sleek interface and intuitive controls, MatchMates delivers a fun and interactive experience while showcasing modern front-end development skills.",
    preview: mm,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "TypeScript", logo: <BiLogoTypescript /> },
      { name: "Vite", logo: <SiVite /> },
      { name: "Sass", logo: <FaSass /> },
      { name: "Vercel", logo: <SiVercel /> },
    ],
  },
  {
    link: "https://milliondollarvault.io/",
    title: "Million Dollar Vault",
    description:
      "The Million Dollar Vault NFT project connects collectors on a fast, easy-to-use platform built with React.js and Firebase. Open to everyone, it offers a vibrant space to trade unique digital assets and explore the exciting world of NFTs.",
    preview: mdv,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "Firebase", logo: <SiFirebase /> },
      { name: "Sass", logo: <FaSass /> },
    ],
  },
  {
    link: "",
    title: "Research Funding Club NFT",
    description:
      "A digital initiative supporting research on deadly diseases through NFT sales. Buyers help fund scientists directly. Built with React.js, the site offers unique NFTs that stand for art and global health.",
    preview: rfc,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "Sass", logo: <FaSass /> },
    ],
  },
  {
    link: "https://shrewdsharks.io/",
    title: "Shrewd Sharks",
    description:
      "The Shrewd Sharks NFT landing page highlights my skills in building engaging React.js websites. It features smooth Framer Motion animations and a clean layout that guides users through each section with ease.",
    preview: ss,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "Firebase", logo: <SiFirebase /> },
      { name: "Framer Motion", logo: <SiFramer /> },
      { name: "Sass", logo: <FaSass /> },
    ],
  },
  {
    link: "https://nftfever.io/",
    title: "NFT Fever",
    description:
      "NFT Fever is a React.js and Firebase platform for learning about NFTs. It offers video courses for all levels, covering NFT creation, investing, and blockchain with practical tips and insights.",
    preview: nftfever,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "Firebase", logo: <SiFirebase /> },
      { name: "Sass", logo: <FaSass /> },
    ],
  },
  {
    link: "https://tnfeed-v2.netlify.app/",
    title: "TnFeed Social Network app",
    description:
      "Tnfeed is a full-stack social app built with the MERN stack, using React and Next.js. A RESTful API connects the frontend and backend, ensuring a smooth, scalable, and flexible experience.",
    preview: tnfeed,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "NextJs", logo: <SiNextdotjs /> },
      { name: "Sass", logo: <FaSass /> },
      { name: "Nodejs", logo: <FaNodeJs /> },
      { name: "ExpressJs", logo: <SiExpress /> },
      { name: "MongoDB", logo: <SiMongodb /> },
    ],
  },
  {
    link: "https://commutify01.netlify.app/",
    title: "Commutify chat app",
    description:
      "Commutify is a chat app for global conversations, featuring a real-time chat room and Google sign-in. Built with React and Firebase, it ensures smooth, secure, and instant messaging.",
    preview: chat,
    techs: [
      { name: "React", logo: <FaReact /> },
      { name: "Firebase", logo: <SiFirebase /> },
    ],
  },
  {
    link: "https://reacttodoapp0.netlify.app/",
    title: "React TODO app",
    description:
      "A simple TODO web app with dark and light mode. User tasks are saved locally based on the device, ensuring a smooth and personalized experience without needing an account.",
    preview: todo,
    techs: [{ name: "React", logo: <FaReact /> }],
  },
  {
    link: "https://rpsgame-01.netlify.app/",
    title: "Rock paper scissors Game",
    description:
      "A simple game built with React, using React Hooks to manage game states for smooth and interactive gameplay.",
    preview: rps,
    techs: [{ name: "React", logo: <FaReact /> }],
  },
  // {
  //   link: "https://weather-app88.netlify.app/",
  //   title: "Weather web app",
  //   description:
  //     "A simple Weather web app that show basic weather infos and time of any city acroos the world,I used external API and interacted with it using AJAX.",
  //   preview: weather,
  //   techs: [
  //     { name: "HTML5", logo: <SiHtml5 /> },
  //     { name: "CSS3", logo: <SiCss3 /> },
  //     { name: "JavaScript", logo: <SiJavascript /> },
  //     { name: "JQuery", logo: <SiJquery /> },
  //   ],
  // },
];

export default projects;
