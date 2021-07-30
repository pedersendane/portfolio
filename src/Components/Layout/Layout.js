import React from 'react';
import Header from '../Header/Header.js';
const Layout =({children}) =>{
    return(
        <>
        <div>
            <Header/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;
