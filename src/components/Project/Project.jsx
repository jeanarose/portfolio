import React, { useState, useEffect } from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import FadeInSection from "../FadeInSection/FadeInSection";
import roamImage from "../../images/roam.png";
import dogMeetDogImage from "../../images/dog-meet-dog.png";
import visualizeImage from "../../images/visualize.png";
import weatherDashboardImage from "../../images/weather-dashboard.png";
import passwordGeneratorImage from "../../images/password-generator.png";
import codeQuizImage from "../../images/code-quiz.png";
import burgerLoggerImage from "../../images/burger-logger.png";

const Project = (props) => {
  const [projects] = useState([
    {
      name: "Roam",
      technologies: ["React", "Express", "MongoDB", "Mongoose"],
      description:
        "Roam is a group vacation planning application that allows users to create a trip and invite their travel companions to plan the trip with them. With Roam you can easily track expenses and split costs among group members. Roam also features a group checklist to streamline the trip planning process.",
      url: "https://www.roam-together.com",
      github: "https://github.com/jeanarose/roam",
      image: roamImage,
      id: "10992kcck30xaa200xs",
    },
    {
      name: "Dog Meet Dog",
      technologies: ["Handlebars", "Express", "MySQL", "Sequelize"],
      description:
        "Dog Meet Dog is a social media app for dogs to connect with other dogs, because your pup needs a furever friend too.",
      url: "https://gentle-sea-84823.herokuapp.com/",
      github: "https://github.com/jeanarose/dog-meet-dog",
      image: dogMeetDogImage,
      id: "1029384c0asdf0897",
    },
    {
      name: "Visualize",
      technologies: ["jQuery", "Pexels API"],
      description:
        "Visualize is a vision board generator designed to guide the user towards their goals and provide images to choose from.",
      url: "https://jeanarose.github.io/vision-board/",
      github: "https://github.com/jeanarose/vision-board",
      image: visualizeImage,
      id: "23p98sdoi23iudas34",
    },
    {
      name: "Weather Dashboard ",
      technologies: ["jQuery", "Open Weather API"],
      description:
        "Weather Dashboard is a dynamic jQuery app designed to display the forecast for the current day and the next five days of a city that the user searches. The application stores the user's recently searched cities into local storage and displays them on the left-hand side. The user can simply click on the recently searched cities to view the weather for each city.",
      url: "https://jeanarose.github.io/weather-dashboard",
      github: "https://github.com/jeanarose/weather-dashboard",
      image: weatherDashboardImage,
      id: "123p90d02kd023wef089",
    },
    {
      name: "Password Generator",
      technologies: ["JavaScript"],
      description:
        "Password Generator was created to generate a random password when the button Generate Password is clicked. The password is dependent on answers to a series of prompts that the user receives when the button is clicked.",
      url: "https://jeanarose.github.io/password-generator",
      github: "https://github.com/jeanarose/password-generator",
      image: passwordGeneratorImage,
      id: "2q398df902uhdf0su3f",
    },
    {
      name: "Code Quiz",
      technologies: ["JavaScript"],
      description:
        "Code Quiz is here to test users' coding knowledge. At the start of a button, the user is given a timed quiz that displays one question at a time. Code Quiz was designed to be a dynamic JavaScript application.",
      url: "https://jeanarose.github.io/code-quiz",
      github: "https://github.com/jeanarose/code-quiz",
      image: codeQuizImage,
      id: "asd90f8234ioasd02234",
    },
    {
      name: "Burger Logger",
      technologies: ["Handlebars", "jQuery", "MVC"],
      description:
        "Burger Logger is a fun app to keep track of burgers that have been devoured and burgers that have yet to be devoured. This app is a simple representation of the usefulness of a model-view controller (MVC). ",
      url: "https://dry-anchorage-08139.herokuapp.com/",
      github: "https://github.com/jeanarose/burger-logger",
      image: burgerLoggerImage,
      id: "aslikuj239c87wge39df73",
    },
  ]);

  useEffect(() => {
    projects.map((project) => {
      const technology = project.technologies.join(", ");
      console.log(technology);
    });
  }, []);
  return (
    <>
      <div id="projects" className="project-section mt-5 ml-5">
        <p className="title has-text-centered is-size-1 mt-6 pt-6">Projects</p>
        <div className="columns is-multiline is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd mt-6 mb-6">
          {projects.map((project) => (
            <div className="column is-12">
              <FadeInSection>
                <hr className="main-hr" />

                <div className="container">
                  <div className="columns ">
                    <div className="column is-4">
                      <h1 className="title is-size-3 mb-0 ">{project.name}</h1>
                      <div className="columns mb-0">
                        <div className="column is-4 mb-0"></div>
                      </div>
                      <div className="columns mb-0 mt-1">
                        <div className="column is-10">
                          {project.technologies.map((technology) => (
                            <p className="project-technologies button p-3 mr-2 mb-2">
                              {technology}
                            </p>
                          ))}
                        </div>
                      </div>
                      <p className="project-description mt-0 mb-4 pr-6">
                        {project.description}
                      </p>
                      <a className="button app-button" href={project.url}>
                        Application
                      </a>
                      <a
                        className="button github-button ml-4"
                        href={project.github}
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="column is-8">
                      <a href={project.url}>
                        <img
                          className="project-image"
                          src={project.image}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
