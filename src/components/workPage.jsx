import { useState } from "react";
import Projects from "./projects";
import Timeline from "./timeline";
import NavMenu from "./navMenu";

const WorkPage = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="work-page-container">
      <NavMenu />
      <Projects
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <Timeline
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
    </div>
  );
};

export default WorkPage;
