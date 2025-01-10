import React from "react";
import Typed from "typed.js";
import resume from "../files/mohamed-azaza-resume.pdf";
import NavMenu from "./navMenu";
import { RiScrollToBottomLine } from "react-icons/ri";

const About = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  const show = (e) => {
    document.querySelector(".nav-btn").classList.toggle("clicked");
    document.querySelector(".nav-list").classList.toggle("show");
    let p = document.querySelectorAll("p");
    p.forEach((el) => el.classList.toggle("opacity"));
  };
  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const firstParagraph =
      "Hi, I'm Mohamed. With a background in computer science and over three years of experience in Software Development, I've honed my skills as a Front-end Web Developer, specializing in ReactJs and the MERN stack.";
    const secondPraragraph =
      "However, I prefer not to be defined solely by my past work experiences. Instead, I am deeply driven by the ambitious projects I aspire to undertake in the future. I believe that while skills can be taught, true passion and creativity come from a commitment to continuous learning and personal growth. I thrive on new challenges that push me out of my comfort zone and allow me to think outside the box. I’m eager to collaborate with others who share a similar vision, as I believe that together we can innovate and create something truly remarkable. Let's explore new possibilities and make a meaningful impact together.";
    const options = {
      strings: [
        "Compiling... ^7500 Compiled successfully",
        `<code>const aboutMe=()=&gt;{ <br /> console.log("   </code> ${firstParagraph} <code>);</code><br /><br /><code>console.log(" </code> ${secondPraragraph} <code>);</code> <br /><br /> <code>return(</code> You can read more about my experience, Skills, education and much more in the PDF below: <code>);</code> <br /> <a href=${resume} target="_blank">//My resume</a>  <br/> <code>}</code>`,
      ],
      typeSpeed: 6,
      backSpeed: 20,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="About">
      <button onClick={show} className="nav-btn">
        <i className="fas fa-bars"></i>
      </button>
      <NavMenu />
      <header>
        <p>
          I develop user interfaces & build MERN stack web apps, with L
          <i className="fas fa-heart"></i>VE.
        </p>
        <div className="scroll-prompt">
          <div className="scroll-arrow">
            <RiScrollToBottomLine />
          </div>
        </div>
      </header>
      <section>
        <h3>About</h3>
        <p ref={el}></p>
      </section>
    </div>
  );
};

export default About;
