import React from "react";
import { Link } from "react-scroll";
import resume from "../../assets/JeanaRose_Mathis_Resume.pdf";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav
      className="navbar pl-4 pr-4"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <p id="navbar-brand" className="navbar-item is-size-3 has-text-dark">JRM</p>
        <a
          role="button"
          className="navbar-burger mr-0"
          onClick={() =>
            document.querySelector(".navbar-menu").classList.toggle("is-active")
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start ml-0">
          <Link
            to="about"
            className="navbar-item has-text-right has-text-dark has-text-weight-bold"
            active="text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="navbar-item has-text-right has-text-dark has-text-weight-bold"
            active="text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
          <a
            target="_blank"
            className="navbar-item has-text-right has-text-dark has-text-weight-bold"
            href={resume}
          >
            Resume
          </a>
        </div>
        <div className="navbar-end mt-2 mr-0">
          <div className="social-media has-text-right">
            <a
              href="https://www.linkedin.com/in/jeana-rose-mathis/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-lg navbar-item is-size-3 has-text-dark"></i>
            </a>
            <a href="https://github.com/jeanarose" target="_blank">
              <i className="fab fa-github fa-lg navbar-item is-size-3 has-text-dark"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
