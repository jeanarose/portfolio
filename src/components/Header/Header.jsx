import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="/dashboard">
            <a
            className="navbar-item has-text-dark is-size-4"
            href="https://www.linkedin.com/in/jeana-rose-mathis/"
            target="_blank"
            ><i className="fab fa-linkedin fa-lg"></i
          ></a>
        </a>
        <a
            className="navbar-item has-text-dark is-size-4"
            href="https://github.com/jeanarose"
            target="_blank"
            ><i className="fab fa-github fa-lg"></i
          ></a>
        <a role="button" className="navbar-burger mr-0"
            onClick={()=> (document.querySelector('.navbar-menu').classList.toggle('is-active'))} aria-label="menu"
            aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end mr-0">
        <a href="/" className="navbar-item has-text-right">
                Home
            </a>

            <a href="/#/portfolio" className="navbar-item has-text-right">
                Portfolio
            </a>
            <a href="/#/contact" className="navbar-item has-text-right">
                Contact
            </a>
        </div>
            
    </div>
</nav>
    );
};

export default Header;