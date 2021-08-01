import React from 'react'
import './Cards.css';

/**
 * @prop number Card Number
 * @prop title Title
 * @prop paragraph Paragraph
 * @prop href string link
 * @prop buttonText what should the button say
 * @image image src
 * @alt alt text
 * @return void
 */
function StackableCard(props) {
        return (
            <>
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
		
            </>
        )
}

export default StackableCard
/* <div id="imageCard" className="card">
                <div className="card-body">
                <img id="codePhoto" src={props.image} alt={props.alt}/>
            </div>
            </div> */