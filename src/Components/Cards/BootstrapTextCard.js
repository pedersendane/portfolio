import React, { Children } from 'react'
import * as Constants from '../../Constants'
import './Cards.css'
const BootstrapTextCard = (props) => {
    const darkStorage = localStorage.getItem("dark-mode");
    const isDarkMode = darkStorage.toString() === "true";
    const darkMode = isDarkMode ? "dark-mode-secondary" : "";
    const adjustedWidth = Constants.UserIsOnMobile() ? 100 : props.width;
    return (
        <div class={`card text-center ${darkMode}`}
            style={{ width: `${adjustedWidth}%`, marginBottom: '2em' }}
        >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                        {props.children}
                    <p className="card-text">{props.text}</p>
                    {props.link && props.linkText ? <a href={props.link} className={"btn btn-primary"}>{props.linkText}</a> : ""}
                </div>
            </div>
    )
}

export default BootstrapTextCard
