import React from "react";
import Typed from "typed.js";
import resume from "../files/mohamed-azaza-resume.pdf";
import NavMenu from "./navMenu";

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
    const options = {
      strings: [
        "Compiling... ^7500 Compiled successfully",
        `<code>const aboutMe=()=&gt;{ <br /> console.log("   </code> Hi, I am Med, I am a past computer science student with over 5 years of experience in the IT field. <code>);</code><br /><br /><code>console.log(" </code> You can call me a Front-end web developer, ReactJs developer and MERN developer,  I don't like to define myself by the work i have done. I define myself by the work i want to do. Skills can be taught and i am always open to learn new things, especially continue challenging myself. <code>);</code> <br /><br /> <code>return(</code> You can read more about my experience, Skills, education and much more in the PDF below: <code>);</code> <br /> <a href=${resume} target="_blank">//My resume</a>  <br/> <code>}</code>`,
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
      </header>
      <section>
        <h3>About</h3>
        <p ref={el}></p>
      </section>
    </div>
  );
};

export default About;
