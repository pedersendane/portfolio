import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../Styles/Images/dpLogo.png';
import * as Constants from '../../Constants.js';
import './Header.css';

function Header() {
    return (
        <nav id="navBar" className="navbar navbar-expand-lg">
            <Link to={Constants.HomeUrl} className="navbar-brand"><img id="headerImage" src={Image} alt={"Dane Pedersen's Personal Logo"}></img></Link>
            <button id="hamburger" className="navbar-dark navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mr-sm-2">
                <li className="nav-item active my-2 my-sm-0">
                    <Link to={Constants.HomeUrl} className="nav-link my-2 my-sm-0 dark-theme-link">Home</Link>
                </li>
                <li className="nav-item my-2 my-sm-0">
                    <Link to={Constants.ProjectsUrl} className="nav-link my-2 my-sm-0 dark-theme-link">Projects</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Header
