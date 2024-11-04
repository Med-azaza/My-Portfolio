import todo from "../img/todo.png";
import tnfeed from "../img/tnfeed.png";
//import weather from "../img/weather.png";
import chat from "../img/chatapp.png";
import ss from "../img/ss.png";
import nftfever from "../img/nftfever.png";
import mdv from "../img/mdv.png";
import rps from "../img/rps.png";
import rfc from "../img/rfc.png";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  // SiHtml5,
  // SiCss3,
  // SiJavascript,
  // SiJquery,
  SiFramer,
} from "react-icons/si";

const projects = [
  {
    link: "https://milliondollarvault.io/",
    title: "Million Dollar Vault",
    description:
      "The Million Dollar Vault NFT project connects enthusiasts globally on a seamless platform powered by React.js and Firebase. Now open to the public, it fosters a vibrant community for trading unique digital assets. With robust infrastructure for high transaction volumes, it welcomes both seasoned collectors and newcomers. Explore innovation and excitement in the world of non-fungible tokens!",
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
      "A visionary initiative leveraging digital innovation to support research institutions tackling the world's deadliest diseases. By purchasing these NFTs, individuals and organizations contribute directly to vital scientific efforts, ensuring researchers have the necessary resources. The website features a user-friendly interface powered by React.js, showcasing unique NFTs that represent not just art, but a commitment to advancing global health.",
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
      "The Shrewd Sharks NFT project landing page showcases my expertise in creating dynamic and visually engaging websites using React.js. Designed to attract and captivate users, this NFT website features seamless transitions and animations implemented through the powerful Framer Motion library. With a clean and modern layout, the landing page guides users effortlessly through the site's sections.",
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
      "NFT Fever is an innovative platform for learning about NFTs, built with React JS and Firebase. It offers engaging video courses for both beginners and seasoned enthusiasts, covering NFT creation, investment strategies, and blockchain technology. Each course is designed to provide valuable insights and practical knowledge. ",
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
      "Tnfeed is a full-stack social network app built on the MERN stack, utilizing React and Next.js for a seamless user experience. Its architecture separates the backend and frontend, allowing efficient communication via a RESTful API. This design ensures scalability and flexibility, making Tnfeed perfect for social networking.",
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
      "Commutify is an intuitive chat app that fosters global conversations with a seamless user experience. It currently features a global chat room, with plans for expansion. Users can easily sign in with Google for secure onboarding. Built with React and Firebase, the app offers real-time message synchronization.",
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
