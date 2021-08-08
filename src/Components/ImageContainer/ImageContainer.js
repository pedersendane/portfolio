import React, { useEffect } from 'react'
import * as Constants from '../../Constants.js'
import './ImageContainer.css'
import TypeWriter from '../TypeWriter/TypeWriter.js';

function ImageContainer(){
    useEffect(() => {
            let nameMessage = "Hello! My name is Dane Pedersen. Welcome to my site";
            TypeWriter(nameMessage, 45, 'name-text');
        })
    return (
        <>
            <div className="image-container">
                <img id="landing-page-photo" src={Constants.CodePhoto} alt={Constants.CodePhotoAlt} />
                <h2 className="pt-4 pb-4" id={"name-text"}> </h2>
            </div>
        </>
       
            
    )
}


export default ImageContainer

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
            