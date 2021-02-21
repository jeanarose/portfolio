import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="/dashboard">
            <p className="is-size-4">Jeana Rose Mathis</p>
        </a>
        <a role="button" className="navbar-burger"
            onClick={()=> (document.querySelector('.navbar-menu').classList.toggle('is-active'))} aria-label="menu"
            aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            <a href="/" className="navbar-item">
                Home
            </a>

            <a href="/#/portfolio" className="navbar-item">
                Portfolio
            </a>
            <a href="/#/contact" className="navbar-item">
                Contact
            </a>
        </div>
    </div>
    {/* <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
                <a href="/" className="button logout-button is-primary">
                    <strong>Logout</strong>
                </a>
            </div>
        </div>
    </div> */}

</nav>
    );
};

export default Header;