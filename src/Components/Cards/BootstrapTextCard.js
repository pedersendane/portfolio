import React, { Children } from 'react'
import './Cards.css'
const BootstrapTextCard = (props) => {
    return (
        <>
            <div className="card" style={{ width: `${props.width}%`}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                        {props.children}
                        <p className="card-text">{props.text}</p>
                        <a href={props.linkOne} className="card-link">{props.linkOneText}</a>
                        <a href={props.linkTwo} className="card-link">{props.linkTwoText}</a>
                </div>
            </div>
            </>
    )
}

export default BootstrapTextCard
