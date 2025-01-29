import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";

// Importing images
import resumeImg from "./res.png";
import cricketImg from "./cric.jpeg";
import shopImg from "./shop.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        {/* Resume Builder Project Card */}
        <ProjectCard
          title="Resume Builder"
          main="The Resume Builder helps individuals create professional resumes efficiently, eliminating the need for advanced design skills or external tools."
          image={resumeImg} // Pass Resume Builder image
        />
        {/* Cricket Score Sheet Project Card */}
        <ProjectCard
          title="Cricket Score Sheet"
          main="The score sheet provides a permanent record of the match, documenting runs, wickets, and other important statistics."
          image={cricketImg} // Pass Cricket Score Sheet image
        />
        {/* Shop Now Project Card */}
        <ProjectCard
          title="Shop Now"
          main="The button or option encourages customers to make a purchase right away, streamlining the buying process."
          image={shopImg} // Pass Shop Now image
        />
      </div>
    </div>
  );
};

export default Projects;
