import React from "react";
// import projectImage from "../../images/projects-background.png";
import projectImage from "../../images/test2.png";
import Project from "../../components/Project/Project";
import "./Portfolio.css";

const Portfolio = (props) => {
  return (
      <section id="projects" className="projects-section">
        {/* <img className="projects-image mt-6" src={projectImage} alt="" /> */}
        <p
          className="title projects-title has-text-centered is-size-1"
        >
          Projects
        </p>
        <Project {...props} key={props.id} />
      </section>
  );
};

export default Portfolio;
