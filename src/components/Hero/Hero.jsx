import React, { useEffect } from "react";
// import heroImage from "../../images/hero-background.png";
import heroImage from "../../images/hero-test.png";
import "./Hero.css";

const Hero = (props) => {
  useEffect(() => {
    document.title = "Jeana Rose Mathis";
  });
  return (
    <section className="hero hero-section is-fullheight mb-6">
      <div className="hero-body">
        <div className="">
          <p className="title is-size-1 hero-title ml-6">
            Hi, I'm Jeana Rose. 
          </p>
          <p className="subtitle hero-subtitle is-size-1 ml-6">I am a full stack developer.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
