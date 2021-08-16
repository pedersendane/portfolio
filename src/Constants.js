import {
    useEffect,
    useState
} from "react";


import dpLogo from './Styles/Images/dpLogo.png';
import codePhoto from './Styles/Images/terminalCode.png';
//Urls
export const HomeUrl = "/portfolio/";
export const ProjectsUrl = "/portfolio/projects";
export const SpotifyUrl = "/portfolio/spotify";



//Photos
export const Logo = dpLogo;
export const CodePhoto = codePhoto;

//Alts
export const LogoAlt = "The letters D and P surrounded by opening and closing code brackets";
export const CodePhotoAlt = "A block of code with information about Dane Pedersen";

//Colors
export const Theme = {
    red: '#ff3036',
    lightBackground: '#d0d6db',
    navBar: '#1d1d1d',
    darkBackground: '#121212',
    darkBackgroundSecondary: '#222222',
}


export const ProjectTitle = "Projects";
export const ProjectParagraph = "Take a look at all of the projects I have been working on";
export const ProjectButtonText = "View Projects";

export const UserIsOnMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}