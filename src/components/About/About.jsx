import React from "react";
import "./About.css";
import profilePicture from "../../images/profile-element.png";

const About = () => {
  return (
    <>
      <div className="about-section mt-6 pt-6">
        <div className="" id="about">
          <h1 className="title is-size-1 has-text-centered has-text-light">
            About
          </h1>
          <div id="about" className="columns is-vcentered pr-5 pl-5">
            <div className="column is-6 about-me">
              <img className="profile-picture" src={profilePicture} alt="" />
            </div>
            <div className="column is-6 p-6 has-text-light">
              <h1 className="title has-text-light">Jeana Rose Mathis</h1>
              <p>
                I am a recent graduate from the University of Georgia with a
                B.S. in Public Health. I knew when I graduated that I did not
                want to pursue a career in public health, and I knew I needed to
                shift. I took an internship at an IT consulting firm, and it was
                there that I gained exposure to software development. I decided
                to invest in myself in order to make a career out of web
                development. I enrolled in the Georgia Tech Full Stack Coding
                Boot Camp in November, 2020, and I haven't looked back.
              </p>
              <br />
              <p>
                Through my internship and the boot camp, I have reconnected with
                a logical, meticulous, and creative side of myself that I let go
                of when I entered the public health field. Software development
                has refreshed and excited me, and I am eager to build amazing
                applications with incredible people.
              </p>
              <br />

              <p>
                Besides software development, I enjoy spending time with my
                husband Chad and our dog Moose, exercising, and making memories
                with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
