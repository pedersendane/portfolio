import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../Styles/Images/dpLogo.png';
import * as Constants from '../../Constants.js';
import './Header.css';

function FormatNavLinks() {
    const HomeUrl = document.location.origin;
    const CurrentUrl = document.location.href;
    console.log(HomeUrl);
    console.log(CurrentUrl);
}
FormatNavLinks();
function Header() {
    return (
        <nav id="navBar" class="navbar navbar-expand-lg">
            <Link to={Constants.HomeUrl} class="navbar-brand"><img id="headerImage" src={Image} alt={"Dane Pedersen's Personal Logo"}></img></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mr-sm-2">
                <li class="nav-item active my-2 my-sm-0">
                    <Link to={Constants.HomeUrl} class="nav-link my-2 my-sm-0">Home</Link>
                </li>
                <li class="nav-item my-2 my-sm-0">
                    <Link to={Constants.ProjectsUrl} class="nav-link my-2 my-sm-0">Projects</Link>
                </li>
                </ul>
        </div>
        </nav>
    )
}

export default Header
