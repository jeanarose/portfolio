import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import dogMeetDogImage from '../../images/dog-meet-dog.png';
import visualizeImage from '../../images/visualize.png';
import weatherDashboardImage from '../../images/weather-dashboard.png';
import passwordGeneratorImage from '../../images/password-generator.png';
import codeQuizImage from '../../images/code-quiz.png';
import burgerLoggerImage from '../../images/burger-logger.png';

const Portfolio = props => {
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
      <h1>Hello World</h1>
      {projects.map(project => {
        <>
        <h1>{project.name}</h1>
        <img className='portfolio-image' src={project.image} alt='' />
        </>
      })}
    </>
  )
}

export default Portfolio
