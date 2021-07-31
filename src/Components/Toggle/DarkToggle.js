import { React, useEffect } from 'react'
import './DarkToggle.css';

function setLocalStorage() {
    if (localStorage.getItem('dark-mode') == null) {
        localStorage.setItem('dark-mode', false);
    }
}

function updateLocalStorage() {
    var setStorageValue;
    if (localStorage.getItem('dark-mode').toString() === 'true') {
        setStorageValue = false;
    } else {
        setStorageValue = true;
    }
    console.log(localStorage.getItem('dark-mode'));
    console.log(setStorageValue);
    localStorage.setItem('dark-mode', setStorageValue);
};

function updateDarkMode() {
    let bodyClassList = document.body.classList;
    let darkStorage = localStorage.getItem('dark-mode');
    let toggleSwitch = document.getElementById('toggle');
    let cards = document.querySelector('#cards');
    let cardContents = document.querySelectorAll('li.card > div.card__content');
    if (darkStorage == null) {
        setLocalStorage()
    }
    if (darkStorage.toString() === "true") {
        if (!bodyClassList.contains('dark-mode')) { 
            bodyClassList.toggle('dark-mode');
            if (cardContents) {
                cardContents.forEach(x => {
                    x.classList.toggle('card-dark-mode');
                });
            }
        }
        if (!toggleSwitch.checked) {
            toggleSwitch.checked = true;
        }
        
    }
    else if(darkStorage.toString() === "false") {
        if (bodyClassList.contains('dark-mode')) {
            bodyClassList.toggle('dark-mode');
            if (cardContents) {
                cardContents.forEach(x => {
                    x.classList.toggle('card-dark-mode');
                });
            }
        }
        if (toggleSwitch.checked) {
            toggleSwitch.checked = false;
        }
        
    }
}

function DarkToggle() {
    setLocalStorage();
    useEffect(() => {
        updateDarkMode();
    }, []);      
    return (
        <>
            <input type="checkbox" id="toggle" className="toggle--checkbox"/>
            <label htmlFor="toggle" className="toggle--label" onClick={(e) => {
                e.preventDefault();
                updateLocalStorage();
                updateDarkMode();
                }}>
                    <span className="toggle--label-background"></span>
                </label>
        </>
    )
}

export default DarkToggle
