import { Link } from "react-router-dom";
import WorkSection from "./workSection";

import projects from "./projectsList";

const Work = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  const show = (e) => {
    document.querySelector(".nav-btn").classList.toggle("clicked");
    document.querySelector(".nav-list").classList.toggle("show");
    let p = document.querySelectorAll("p");
    let img = document.querySelectorAll("img");
    let h2 = document.querySelectorAll("h2");
    let h4 = document.querySelectorAll("h4");
    let i = document.querySelectorAll("i");
    let svg = document.querySelectorAll("svg");
    let imgWrapper = document.querySelectorAll(".imageWrapper");
    p.forEach((el) => el.classList.toggle("opacity"));
    img.forEach((el) => el.classList.toggle("opacity"));
    h2.forEach((el) => el.classList.toggle("opacity"));
    h4.forEach((el) => el.classList.toggle("opacity"));
    i.forEach((el) => el.classList.toggle("opacity"));
    imgWrapper.forEach((el) => el.classList.toggle("opacity"));
    svg.forEach((el) => el.classList.toggle("opacity"));
  };
  return (
    <div className="Work">
      <button onClick={show} className="nav-btn">
        <i className="fas fa-bars"></i>
      </button>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {projects.map((item, index) => (
        <WorkSection
          title={item.title}
          desc={item.description}
          link={item.link}
          preview={item.preview}
          techs={item.techs}
          key={index}
        />
      ))}
    </div>
  );
};

export default Work;
