import {
    React,
    useEffect
} from 'react'
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
    localStorage.setItem('dark-mode', setStorageValue);
};

export const updateDarkMode = () => {
    let bodyClassList = document.body.classList;
    let cards = document.querySelectorAll('div.card');
    let darkStorage = localStorage.getItem('dark-mode');
    let toggleSwitch = document.getElementById('toggle');
    if (darkStorage == null) {
        setLocalStorage()
    }
    if (darkStorage.toString() === "true") {
        if (!bodyClassList.contains('dark-mode')) {
            bodyClassList.toggle('dark-mode');
        }
        if (!toggleSwitch.checked) {
            toggleSwitch.checked = true;
        }
        cards.forEach((e) => {
            if (!e.classList.contains('dark-mode-secondary')) {
                e.classList.toggle('dark-mode-secondary');
            }
        })

    } else if (darkStorage.toString() === "false") {
        if (bodyClassList.contains('dark-mode')) {
            bodyClassList.toggle('dark-mode');
            }
        if (toggleSwitch.checked) {
            toggleSwitch.checked = false;
        }
        cards.forEach((e) => {
            if (e.classList.contains('dark-mode-secondary')) {
                e.classList.toggle('dark-mode-secondary');
            }
        })

    }
}

function DarkToggle() {
    setLocalStorage();
    useEffect(() => {
        updateDarkMode();
    }, []);
    return ( <>
        <input type = "checkbox" id = "toggle" className = "toggle--checkbox" />
        <label htmlFor = "toggle" className = "toggle--label"
        onClick = {
            (e) => {
                e.preventDefault();
                updateLocalStorage();
                updateDarkMode();
            }
        }>
            <span className="toggle--label-background" > </span> </label >
    </>
    )
}

export default DarkToggle