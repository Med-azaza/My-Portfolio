import { RiTimelineView } from "react-icons/ri";
import { default as MuiTimeline } from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Timeline = ({ setActiveSection, activeSection }) => {
  return (
    <div
      className={`${activeSection === "timeline" ? "active" : "inactive"}`}
      onClick={() => setActiveSection("timeline")}
    >
      {activeSection === "" && (
        <div className="thumbnail default">
          <span>TIMELINE</span>
          <RiTimelineView className="icon" />
        </div>
      )}
      {activeSection === "projects" && (
        <div className="thumbnail vertical">
          <span>TIMELINE</span>
        </div>
      )}
      {activeSection === "timeline" && (
        <div className="timeline">
          <p>
            As a skilled React developer with a passion for building engaging
            user interfaces and experiences, I have consistently delivered
            high-quality results across diverse projects. My expertise in React,
            along with my adaptability and collaborative spirit, have allowed me
            to contribute to the success of various teams and organizations.
          </p>
          <div className="timeline-container">
            <MuiTimeline>
              <TimelineItem>
                <TimelineOppositeContent color="rgba(255, 255, 255, 0.555)">
                  Jul 21 - Oct 21
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <span>Neux Ltd:</span> As a React frontend developer at Neux
                  Ltd, I played a key role in maintaining and enhancing a music
                  application. My expertise in React and the Tone.js library
                  allowed me to contribute to a dynamic and interactive user
                  experience for music enthusiasts.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem position="alternate">
                <TimelineOppositeContent color="rgba(255, 255, 255, 0.555)">
                  Oct 21 - May 22
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <span>Nexo Games:</span> During my time at Nexo Games, I
                  leveraged my React development skills to build a diverse range
                  of NFT-related websites. Projects like Million Dollar Vault,
                  Shrewd Shark, and NFT Fever showcased my ability to create
                  engaging and functional platforms for the growing NFT market.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="rgba(255, 255, 255, 0.555)">
                  May 22 - Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <span>Rāna Dev:</span> As a React developer at Rana, I
                  demonstrated my versatility by contributing to the development
                  and maintenance of large-scale projects. My experience working
                  on complex applications highlights my ability to collaborate
                  effectively within a team and deliver high-quality results.
                </TimelineContent>
              </TimelineItem>
            </MuiTimeline>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
