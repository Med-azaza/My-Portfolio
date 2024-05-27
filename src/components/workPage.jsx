import { useState } from "react";
import Projects from "./projects";
import Timeline from "./timeline";

const WorkPage = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="work-page-container">
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
