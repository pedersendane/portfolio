import React, { useState } from 'react'
import './DarkToggle.css';

function DarkToggle() {
    const [dark, toggleDark] = useState(false);

    return (
        <>
            <input type="checkbox" id="toggle" class="toggle--checkbox"/>
            <label for="toggle" class="toggle--label" onClick={() => {
                document.body.classList.toggle('dark-mode')
                }}>
                    <span class="toggle--label-background"></span>
                </label>
        </>
    )
}

export default DarkToggle
