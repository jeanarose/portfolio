import React, { useEffect } from "react";
import Project from "../../components/Project/Project";

const Portfolio = (props) => {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <>
      <section className="hero is-small is-primary has-text-centered">
        <div id="portfolio-hero" className="hero-body">
          <h1 className="title is-size-1">Portfolio</h1>
        </div>
      </section>
      <Project />
    </>
  );
};

export default Portfolio;
