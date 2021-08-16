import React, { useEffect } from 'react'
import * as Constants from '../../Constants.js'
import './ImageContainer.css'

function ImageContainer(){
    return (
        <>
            <div className="image-container">
                <img id="landing-page-photo" src={Constants.CodePhoto} alt={Constants.CodePhotoAlt} />
            </div>
        </>
       
            
    )
}


export default ImageContainer
