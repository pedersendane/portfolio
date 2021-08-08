import React from 'react'
import { Link } from 'react-router-dom';
import * as Constants from '../../Constants';

const BootstrapDetailedCard = (props) => {
    const darkStorage = localStorage.getItem("dark-mode");
    const isDarkMode = darkStorage.toString() === "true";
    const darkMode = isDarkMode ? "dark-mode-secondary" : "";
    const button = props.link && props.linkText ? <Link to={props.link} target={"_blank"} rel={"noreferrer"} class="btn btn-primary">{props.linkText} {props.icon}</Link> : "";
    const adjustedWith = Constants.UserIsOnMobile() ? 100 : props.width;
    return (
        <div class={`card text-center ${darkMode}`}
            style={{ width: `${adjustedWith}%`, marginBottom: '2em' }}
        >
            <div class="card-header">
                <h5><b>{props.header}</b></h5>
            </div>
            <div class="card-body">
                <p className="card-text"><b>{props.description}</b></p>
                <p class="card-subtitle mb-2 text-muted">{props.mutedText}</p>
                {props.children}
                {button}
            </div>
            <div class="card-footer text-muted">
                {props.footer}
            </div>
        </div>
    )
}

export default BootstrapDetailedCard
