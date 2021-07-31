import React from 'react'
import './Cards.css';
function StackableCard(props) {
    let number = `card_${props.number}`;
    if (props.type === "image") {
        return (
            <>
                <li className="card" id={number}>
                    <div className="card__content content_image">
                        <figure>
                            <img src={props.image} alt={props.alt}/>
                        </figure>
                    </div>
                </li>
            </>
        )
    } else if(props.type === "text"){
        return(
        <>
                <li className="card" id={number}>
                    <div className="card__content">
                        <h2 className="text-center">{props.title}</h2>
                            <p>{props.paragraph}</p>
                            <p><a href={props.href} className="btn btn--accent">{ props.buttonText}</a></p>
                    </div>
                </li>
            </>
        )
    } else if (props.type === "both") {
        return (
            <>
                <li className="card" id={number}>
			<div className="card__content">
				<div>
					<h2>{props.title}</h2>
					<p>{props.paragraph}</p>
					<p><a href={props.href} class="btn btn--accent">{props.buttonText}</a></p>
				</div>
				<figure>
                            <img src={props.image} alt={props.alt}/>
				</figure>
			</div>
		</li>
            </>
        )
    }
    
}

export default StackableCard
/* <div id="imageCard" className="card">
                <div className="card-body">
                <img id="codePhoto" src={props.image} alt={props.alt}/>
            </div>
            </div> */