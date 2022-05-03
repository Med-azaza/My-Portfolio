import Tooltip from "@mui/material/Tooltip";

export default function WorkSection({ title, preview, desc, techs, link }) {
  return (
    <section>
      <div className="link">
        <a href={link} rel="noreferrer" target="_blank">
          Live Demo <i className="fas fa-angle-double-right"></i>
        </a>
      </div>
      <div className="name">
        <h2>{title}</h2>
      </div>
      <div className="showcase">
        <div className="image">
          <div className="imageWrapper">
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img src={preview} alt="tnfeed website preview" />
          </div>
        </div>
        <div className="description">
          <p>{desc}</p>
          <div className="techs">
            <h4>Techs used in the project:</h4>
            {techs.map((item, index) => (
              <Tooltip key={index} title={item.name}>
                <span style={{ cursor: "pointer" }}>{item.logo}</span>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
