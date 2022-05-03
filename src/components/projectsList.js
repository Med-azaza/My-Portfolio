import todo from "../img/todo.png";
import tnfeed from "../img/tnfeed.png";
import weather from "../img/weather.png";
import chat from "../img/chatapp.png";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
} from "react-icons/si";

const projects = [
  {
    link: "https://tnfeed.live",
    title: "TnFeed Social Network app",
    description:
      "Tnfeed is fullstack MERN social network web app created with the well known react framework NextJs, the backend and the frontend are separated and communicating using RestAPI.",
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
      "Commutify is a simple chat app with a global room (it will be more rooms soon), the app uses google sign-in for an easy and simple authentication for the users ,also the messages is synced in real time.",
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
      "TODO web app with dark and light mode,also user todos will be saved based on device.",
    preview: todo,
    techs: [{ name: "React", logo: <FaReact /> }],
  },
  {
    link: "https://rpsgame-01.netlify.app/",
    title: "Rock paper scissors Game",
    description:
      "Simple Game created with React using react hooks to manage game states.",
    preview: tnfeed,
    techs: [{ name: "React", logo: <FaReact /> }],
  },
  {
    link: "https://weather-app88.netlify.app/",
    title: "Weather web app",
    description:
      "A simple Weather web app that show basic weather infos and time of any city acroos the world,I used external API and interacted with it using AJAX.",
    preview: weather,
    techs: [
      { name: "HTML5", logo: <SiHtml5 /> },
      { name: "CSS3", logo: <SiCss3 /> },
      { name: "JavaScript", logo: <SiJavascript /> },
      { name: "JQuery", logo: <SiJquery /> },
    ],
  },
];

export default projects;
