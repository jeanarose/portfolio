import React, { useEffect } from "react";
import "./Hero.css";

const Hero = (props) => {
  useEffect(() => {
    document.title = "Jeana Rose Mathis";
  });
  return (
    <section className="hero home-hero is-fullheight">
      <div className="hero-body">
        <div className="columns">
          <div className="column is-three-quarters hero-body">
            <p className="title home-title is-size-1 has-text-dark hax-text-weight-bold">
              Hi, I'm Jeana Rose. I am a full stack developer who is open to
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
