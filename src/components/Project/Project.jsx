import React, { useState, useEffect } from 'react';
import './Project.css';
import dogMeetDogImage from '../../images/dog-meet-dog.png';
import visualizeImage from '../../images/visualize.png';
import weatherDashboardImage from '../../images/weather-dashboard.png';
import passwordGeneratorImage from '../../images/password-generator.png';
import codeQuizImage from '../../images/code-quiz.png';
import burgerLoggerImage from '../../images/burger-logger.png';

const Project = (props) => {
    const [projects, setProject] = useState([
        {
          name: 'Dog Meet Dog',
          description: "Dog Meet Dog is a social media app for dogs to connect with other dogs, because your pup needs a furever friend too. This app was built using primarily Handlebars and server-side routing.",
          url: 'https://gentle-sea-84823.herokuapp.com/',
          github: 'https://github.com/jeanarose/dog-meet-dog',
          image: dogMeetDogImage
        },
        {
          name: 'Visualize',
          description: "Visualize is a vision board generator designed to guide the user towards their goals and provide images to choose from. Visualize utilized jQuery and DOM manipulation.",
          url: 'https://jeanarose.github.io/vision-board/',
          github: 'https://github.com/jeanarose/vision-board',
          image: visualizeImage
        },
        {
          name: 'Weather Dashboard',
          url: 'https://jeanarose.github.io/weather-dashboard',
          github: 'https://github.com/jeanarose/weather-dashboard',
          image: weatherDashboardImage
        },
        {
          name: 'Password Generator',
          url: 'https://jeanarose.github.io/password-generator',
          github: 'https://github.com/jeanarose/password-generator',
          image: passwordGeneratorImage
        },
        {
          name: 'Code Quiz',
          url: 'https://jeanarose.github.io/code-quiz',
          github: 'https://github.com/jeanarose/code-quiz',
          image: codeQuizImage
        },
        {
          name: 'Burger Logger',
          url: 'https://dry-anchorage-08139.herokuapp.com/',
          github: 'https://github.com/jeanarose/burger-logger',
          image: burgerLoggerImage
        }
      ])
    return (
      <>
      <div className="columns is-multiline is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd mt-6">

      {projects.map(project => (
          <div className="column is-12">
            <div className="container">
              <div className="columns">
                <div className="column is-4">
                  <h1 className="title mb-0">{project.name}</h1>
                  <div className="columns mb-0">
                    <div className="column is-4 mb-0">
                      <hr className="mb-0"/>
                    </div>
                  </div>
                  <p className="mt-0 mb-3 pr-6">{project.description}</p>
                  <a className="button" href={project.url}>Application</a>
                  <a className="button ml-4" href={project.github}>GitHub</a>
                </div>
                <div className="column is-8">
                  <img src={project.image} alt=""/>
                </div>
              </div>
            </div>
            <hr className="main-hr"/>

          </div>
      ))}
      </div>
      
      </>
    );
};

export default Project;