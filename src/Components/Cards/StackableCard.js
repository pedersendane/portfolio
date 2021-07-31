import React from 'react'
import './Cards.css';
function StackableCard(props) {
    let number = `card_${props.number}`;
    return (
        <>
            <li class="card" id={number}>
                <div class="card__content">
                    <figure>
                        <img src={props.image} alt={props.alt}/>
                    </figure>
                </div>
            </li>
        </>
    )
}

export default StackableCard
/* <div id="imageCard" className="card">
                <div className="card-body">
                <img id="codePhoto" src={props.image} alt={props.alt}/>
            </div>
            </div> */