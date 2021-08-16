import React from 'react'
import { Link } from 'react-router-dom';
import * as Constants from '../../Constants'

const BootstrapImageCard = (props) => {
    const darkStorage = localStorage.getItem("dark-mode");
    const darkMode = darkStorage.toString() === "true" ? "dark-mode-secondary" : "";
    const adjustedWidth = Constants.UserIsOnMobile() ? "100%" : props.cardWidth;

    return (
        <div className={`card text-center ${darkMode}`} style={{
            width: adjustedWidth,
            margin: props.cardMargin,
            display: props.cardDisplay,
            padding: props.cardPadding
        }}>
            <h2 className={"text-center card-header"} style={{margin: props.headerMargin}}>
                {props.header}
            </h2>
            <img class="card-img-top center"
                style={{
                    width: props.imageWidth,
                    height: props.imageHeight,
                    borderRadius: props.imageBorderRadius,
                    padding: props.imagePadding,
                    maxWidth: props.imageMaxWidth
                }}
                src={props.imageSrc}
                alt={props.imageAlt} />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                {props.children}
                <a href={props.link} target={"_blank"} rel={"noreferrer"} class="btn btn-primary">{props.linkText} {props.icon}</a>
            </div>
        </div>
            
    )
}

export default BootstrapImageCard
