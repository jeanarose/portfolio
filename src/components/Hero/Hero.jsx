import React, { useEffect } from "react";
import heroImage from "../../images/hero-background2.png";
import blobOne from "../../images/blob-one.png";
import blobTwo from "../../images/blob-two.png";
import "./Hero.css";

const Hero = (props) => {
  useEffect(() => {
    document.title = "Jeana Rose Mathis";
  });
  return (
    <>
      <div className="columns">
        <div className="column is-4">
          <img className="blob-one" src={blobOne} alt="" />
        </div>
      </div>
      <div className="columns">
        <div className="column hero-titles is-7 ml-6">
          <p className="title is-size-1 hero-title">
            Hi, I'm Jeana Rose.
          </p>
          <p className="subtitle hero-subtitle is-size-1">
            I am a full stack developer.
          </p>
        </div>
        <div className="column is-5 has-text-right">
          <img className="blob-two" src={blobTwo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
