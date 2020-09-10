import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './logo.svg';
import CSS from 'csstype';


export default function Header(): React.ReactElement {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);


    const handleMediaQueryChange = (mediaQuery : any) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    
    return (
        <header className="Header">
            <img src={require("../pictures/logo192.png")} className="Logo" alt="logo"/>
            {(!isSmallScreen || isNavVisible) && (
            <nav className="Nav">
                <a href="#">XXXX</a>
                <a href="#">XXXX</a>
                <a href="#">XXXX</a>
                <button>Lagre</button>
            </nav>
            )}
            <button onClick={toggleNav} className="Lion">&#129409;</button>
            
        </header>
    )
}

/*
const headerStyle: CSS.Properties = {
    textAlign: 'center',
    fontFamily: 'Brush Script MT, Brush Script Std, cursive',
    fontSize: '300%',
    borderBottom: '5px solid red'
}

*/



