import React, { useEffect, useState } from 'react'

const BootstrapDetailedCard = (props) => {
    const darkStorage = localStorage.getItem("dark-mode");
    const darkMode = darkStorage.toString() === "true" ? "dark-mode-secondary" : "";
    const button = props.link && props.linkText ? <a href={props.link} target={"_blank"} rel={"noreferrer"} class="btn btn-primary">{props.linkText}</a> : ""
    return (
        <div class={`card text-center ${darkMode}`}
            style={{ width: `${props.width}%`, marginBottom: '2em' }}
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
