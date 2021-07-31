import React from 'react';
import './Cards.css';
const StackingCards=({children}) =>{
    return (
        <div className={"card-stack-header"}>
            <ul id="cards">{children}</ul>
        </div>   
    )
}

export default StackingCards
