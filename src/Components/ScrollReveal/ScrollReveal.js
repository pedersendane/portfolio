import React, { useEffect } from 'react'
import * as Constants from '../../Constants.js'
import './ScrollReveal.css'
import TypeWriter from '../TypeWriter/TypeWriter.js';

function ScrollReveal(){
    useEffect(() => {
            let nameMessage = "Hello! My name is Dane Pedersen";
            TypeWriter(nameMessage, 45, 'name-text');
            let welcomeMessage = "Welcome to my site";
            TypeWriter(welcomeMessage, 45, 'welcome-text');
            //welcome
        })
    return (
        <>
        <div className="scroll-reveal">
                    <img id="landing-page-photo" src={Constants.TransparentCodePhoto} alt={Constants.TransparentCodePhotoAlt} />
                    <h3 className="pt-2" id={"name-text"}> </h3>
                    <h3 id={"welcome-text"}> </h3>
            </div>
        </>
       
            
    )
}

export default ScrollReveal

        // <>
        //     <div className="header">
        //         <div className="container container_image">
        //             <div className="title_wrapper">
        //                 <img id="landing-page-photo" src={Constants.TransparentCodePhoto} alt={Constants.TransparentCodePhotoAlt} />
        //                 <h3 className="pt-2" id={"name-text"}> </h3>
        //                 <h3 id={"welcome-text"}> </h3>
        //             </div>
        //         </div>

        //         <div className="container container_gradient" aria-hidden="true">
        //             <div className="title_wrapper">
        //                 <h1>Full-Stack Web Developer</h1>
        //             </div>
        //         </div>
        //     </div>
        //     </>
            