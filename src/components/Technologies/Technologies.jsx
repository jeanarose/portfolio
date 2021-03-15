import React, { useState } from "react";
import "./Technologies.css";

const Technologies = (props) => {
  const [technologies] = useState([
    {
      name: "React",
      icon: "fab fa-react",
    },
    {
      name: "Node JS",
      icon: "fab fa-node-js",
    },
    {
      name: "HTML",
      icon: "fab fa-html5",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
    },
    {
      name: "Canva",
      icon: "fas fa-palette",
    },
    {
      name: "WordPress",
      icon: "fab fa-wordpress-simple",
    },
  ]);
  return (
    <div className="mt-6 technology-section">
      <div className="columns ml-5 mr-5 is-multiline is-centered">
        {technologies.map((technology) => (
          <div className="column is-3 has-text-centered">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <>
                    <i className={`${technology.icon} fa-10x`}></i>
                    <p className="title is-size-3 mt-2">{technology.name}</p>
                  </>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
