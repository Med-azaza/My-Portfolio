import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import resume from "../files/Mohamed_Azaza_-_Front-end_react_developer_&_MERN_developer.pdf";
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
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <header>
        <p>
          I develop user interfaces & build MERN stack web apps, with L
          <i className="fas fa-heart"></i>VE.
        </p>
      </header>
      <section>
        <h3>About</h3>
        <p ref={el}>
          {/* <code>const aboutMe=()=&gt;{'{'} <br /> console.log('   </code>
                    Hi, I am Med, I'am a past computer science student
                    with over 5 years of experience in the IT field. <code>);</code><br /><br />
                    <code>console.log(' </code>
                    You can call me a Front-end web developer, ReactJs developer & MERN developer, 
                    I don't like to define myself by the work i've done. I define myself
                    by the work i want to do. Skills can be taught and i am always open to learn
                    new things, continue challenging myself.
                    <code>);</code> <br /><br />
                    <code>return(</code>
                    You can read more about my experience, Skills, education and much more in the PDF below:
                    <code>);</code> <br /> <code>{ '}'}</code> */}
        </p>
      </section>
    </div>
  );
};

export default About;
