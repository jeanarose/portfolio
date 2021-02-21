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
          url: 'https://gentle-sea-84823.herokuapp.com/',
          github: 'https://github.com/jeanarose/dog-meet-dog',
          image: dogMeetDogImage
        },
        {
          name: 'Visualize',
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
      <h1 className="title">Portfolio</h1>
      <div className="columns is-multiline is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">

      {projects.map(project => (
        <div className="column is-4">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={project.image} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4 has-text-centered">{project.name}</p>
              </div>
            </div>

            <div className="content has-text-centered">
              <a href={project.url} className="button mr-2">Application</a>
              <a href={project.github} className="button ml-2">GitHub</a>
            </div>
          </div>
        </div>
        </div>
      ))}
      </div>
      
      </>
    );
};

export default Project;