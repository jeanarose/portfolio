import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="/dashboard">
            <p className="is-size-4">Jeana Rose Mathis</p>
        </a>
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