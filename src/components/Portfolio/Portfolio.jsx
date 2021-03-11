import React from "react";
import Project from "../../components/Project/Project";

const Portfolio = (props) => {
  return (
    <>
      <section id="projects" className="hero is-small is-primary has-text-centered">
        <div id="portfolio-hero" className="hero-body">
          <h1 className="title is-size-1">Portfolio</h1>
        </div>
      </section>
      <Project {...props} key={props.id} />
    </>
  );
};

export default Portfolio;
