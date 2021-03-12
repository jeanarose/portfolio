import React, { useEffect } from "react";
// import heroImage from "../../images/hero-background.png";
import heroImage from "../../images/hero-test.png";
import "./Hero.css";

const Hero = (props) => {
  useEffect(() => {
    document.title = "Jeana Rose Mathis";
  });
  return (
    // <section className="hero-section">
    //   <img className="hero-image" src={heroImage} alt="" />
    //       <p className="title hero-title is-size-1 has-text-dark hax-text-weight-bold ml-6">
    //         Hi, I'm Jeana Rose, and I am a full stack developer.
    //       </p>
    // </section>
    <section class="hero hero-section is-fullheight mb-6">
      <div class="hero-body">
        <div class="">
          <p class="title is-size-1 hero-title">
            Hi, I'm Jeana Rose, and I am a full stack developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
