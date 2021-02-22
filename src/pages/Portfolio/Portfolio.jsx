import React from "react";
import Project from "../../components/Project/Project";

const Portfolio = (props) => {
  return (
    <>
      <section className="hero is-medium is-primary has-text-centered">
        <div id="portfolio-hero" className="hero-body">
          <h1 className="title">Portfolio</h1>
          <p className="subtitle">Medium subtitle</p>
        </div>
      </section>
      <Project />
    </>
  );
};

export default Portfolio;
