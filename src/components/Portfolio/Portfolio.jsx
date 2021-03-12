import React from "react";
import Project from "../../components/Project/Project";
import "./Portfolio.css";

const Portfolio = (props) => {
  return (
      <section id="projects" className="projects-section mt-6 pt-6">
        <p
          className="title projects-title has-text-centered is-size-1 pt-6"
        >
          Projects
        </p>
        <Project {...props} key={props.id} />
      </section>
  );
};

export default Portfolio;
