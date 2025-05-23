import projects from "./projectsList";
import Tooltip from "@mui/material/Tooltip";
import { FaEye } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

const Projects = ({ setActiveSection, activeSection }) => {
  return (
    <div
      className={`${activeSection === "projects" ? "active" : "inactive"}`}
      onClick={() => setActiveSection("projects")}
    >
      {activeSection === "" && window.innerWidth > 600 && (
        <div className="thumbnail default">
          <span>PROJECTS</span> <FaLaptopCode className="icon" />
        </div>
      )}
      {activeSection === "timeline" && window.innerWidth > 600 && (
        <div className="thumbnail vertical">
          <span>PROJECTS</span>
        </div>
      )}
      {(activeSection === "projects" || window.innerWidth < 600) && (
        <ul className="projects-list">
          {projects.map((item) => (
            <li>
              <h2>{item.title}</h2>
              <div className="project-details">
                <div className="image-container">
                  <img src={item.preview} alt="website preview" />
                </div>
                <div className="details">
                  <p>{item.description}</p>
                  <div className="techs">
                    <p>Techs used in the project:</p>
                    <div>
                      {item.techs.map((item, index) => (
                        <Tooltip key={index} title={item.name}>
                          <span style={{ cursor: "pointer" }}>{item.logo}</span>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  window.open(item.link, "_blank", "noopener noreferrer")
                }
                disabled={item.link === ""}
              >
                {item.link !== "" && <FaEye />}
                {item.link === "" ? "DEMO NOT AVAILABLE" : "DEMO"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
