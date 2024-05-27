import { Link } from "react-router-dom";
import photo from "../img/my_photo.jpeg";
import { FaReact } from "react-icons/fa";

const Home = () => {
  const showLinks = () => {
    document.querySelector(".about-link").classList.toggle("mobile-about");
    document.querySelector(".work-link").classList.toggle("mobile-work");
    document.querySelector(".contact-link").classList.toggle("mobile-contact");
    document.querySelector(".imageContainer").classList.toggle("blob-mobile");
    document.querySelector(".textContainer").classList.toggle("top");
  };
  return (
    <div className="Home">
      <div onClick={showLinks} className="mobile">
        <p>Tap here</p>
      </div>
      <div className="welcome">
        <span>WEL</span>COME
      </div>
      <div className="textContainer">
        <Link className="about-link" to="/about">
          <span></span>
        </Link>
        <br />
        <Link className="work-link" to="/work">
          <span></span>
        </Link>
        <br />
        <Link className="contact-link" to="/contact">
          <span></span>
        </Link>
        <br />
      </div>
      <div className="imageContainer">
        <img className="photo" src={photo} alt="owner of the portfolio" />
      </div>
      <FaReact className="react-icon" color="#1976d2" />
    </div>
  );
};

export default Home;
