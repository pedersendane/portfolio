import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import Image from '../../Styles/Images/dpLogo.png';
import * as Constants from '../../Constants.js';
import './Header.css';
import FetchSpotifyUrl from '../api/Spotify/FetchSpotifyUrl';

function toggler(id, [classToToggle]) {
    let x = document.getElementById(id).classList;
    x.toggle(classToToggle)
}

function Header() {
    const url = window.location.pathname;
    return (
        <nav id="navBar" className="navbar navbar-expand-lg">
            <Link to={Constants.HomeUrl} className="navbar-brand">
                <img id="headerImage" src={Image} alt={"Dane Pedersen's Personal Logo"}></img>
            </Link>
            <button id="hamburger"
                className="navbar-dark navbar-toggler"
                type="button"
                aria-label="Toggle navigation"
                onClick={() => {
                    toggler('navbarToggler', ['open']);
                    toggler('navbarSupportedContent', ['open', 'collapse'])
                    toggler('navbar-close', ['open'])
                    // let icon = document.getElementById('navbarToggler').classList;
                    // icon.toggle('open');
                    // let hiddenContent = document.getElementById('navbarSupportedContent').classList;
                    // hiddenContent.toggle('open');
                    // hiddenContent.toggle('collapse');
                    // let x = document.getElementById('navbar-close').classList;
                    // x.toggle('open');
                }}
            >
                <span id={'navbarToggler'} className="navbar-toggler-icon"><span id="navbar-close">X</span></span>
            </button>
            
            <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mr-sm-2">
                    <li className="nav-item my-2 my-sm-0">
                    <Link to={Constants.HomeUrl} className={`nav-link my-2 my-sm-0 ${url === Constants.HomeUrl ? "active" : "dark-theme-link"}`}>Home</Link>
                </li>
                <li className={`nav-item my-2 my-sm-0 ${url === Constants.ProjectsUrl ? "active" : ""}`}>
                    <Link to={Constants.ProjectsUrl} className={`nav-link my-2 my-sm-0 ${url === Constants.ProjectsUrl ? "active" : "dark-theme-link"}`}>Projects</Link>
                    </li>
                    <li className={`nav-item my-2 my-sm-0 ${url === Constants.SpotifyUrl ? "active" : ""}`}>
                    <a href={FetchSpotifyUrl()} className={`nav-link my-2 my-sm-0 ${url === Constants.SpotifyUrl ? "active" : "dark-theme-link"}`}>Spotify</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Header
