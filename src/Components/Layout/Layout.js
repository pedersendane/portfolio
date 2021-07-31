import React from 'react';
import Header from '../Header/Header.js';
import DarkToggle from '../Toggle/DarkToggle.js';
const Layout =({children}) =>{
    return(
        <>
            <Header/>
            <main>{children}</main>
            <DarkToggle/>
        </>
    )
}

export default Layout;
