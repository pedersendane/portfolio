import React from 'react'
import { Link } from 'react-router-dom';
import * as Constants from '../../Constants'
import './Cards.css'
const BootstrapTextCard = (props) => {
    const darkStorage = localStorage.getItem("dark-mode");
    const isDarkMode = darkStorage && darkStorage.toString() === "true";
    const darkMode = isDarkMode ? "dark-mode-secondary" : "";
    const adjustedWidth = Constants.UserIsOnMobile() ? "100%" : props.width;
    // USE LINK TO IF ROUTING TO ANOTHER COMPONENT
    const formattedLink = props.link && props.linkText ? <Link to={props.link} className={"btn btn-primary"}>{props.linkText} {props.icon}</Link> : ""
    const formattedHref = props.href && props.hrefText ? <a href={props.href} className={"btn btn-primary"}>{props.hrefText} {props.icon}</a> : ""
    return (
        <div class={`card text-center ${darkMode}`}
            style={{ width: adjustedWidth, marginBottom: '2em', marginTop:'2em'}}
        >
                <div className="card-body" style={{padding: props.cardPadding}}>
                    <h5 className="card-title" style={{padding: props.titlePadding}}>{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                        {props.children}
                <p className="card-text">{props.text}</p>
                {formattedLink}
                {formattedHref}
                </div>
            </div>
    )
}

export default BootstrapTextCard
