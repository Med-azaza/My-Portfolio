import NavMenu from "./navMenu";

const Contact = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  const show = (e) => {
    document.querySelector(".nav-btn").classList.toggle("clicked");
    document.querySelector(".nav-list").classList.toggle("show");
    let p = document.querySelectorAll("p");
    p.forEach((el) => el.classList.toggle("opacity"));
  };
  return (
    <div className="Contact">
      <button onClick={show} className="nav-btn">
        <i className="fas fa-bars"></i>
      </button>
      <NavMenu />
      <header>
        <p>Let's make something great!</p>
      </header>
      <section>
        <h3>Contact</h3>
        <p>
          I'm seeking opportunities to collaborate with Companies/Individuals,
          not just work with them. I want to bring my experience to the table
          where we can work together to solve real problems in a way that
          optimizes our experience and knowledge. <br />
          <br />
          Feel free to reach out through any of the platforms below: <br />
          <a rel="noreferrer" href="mailto:hamaaz666@gmail.com">
            hamaaz666@gmail.com
          </a>
          <br />
          <a
            rel="noreferrer"
            href="https://www.upwork.com/freelancers/medazaza"
            target="_blank"
          >
            Upwork
          </a>
          <br />
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohamed-azaza-683445203/"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
          <a
            rel="noreferrer"
            href="https://github.com/Med-azaza/"
            target="_blank"
          >
            Github
          </a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
