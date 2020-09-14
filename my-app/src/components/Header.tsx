import React, { useState, useEffect } from 'react';
import './Header.css';


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
        <div className="grid-container">
            <div className="Navbar">
                <img src={require("../pictures/logo192.png")} className="Logo" alt="logo"/>
                {(!isSmallScreen || isNavVisible) && (
                <nav className="Nav">
                    <a href="#">&#128150;</a>
                    <a href="#">&#128011;</a>
                    <a href="#">&#128526;</a>
                    <button>Lagre</button>
                </nav>
                )}
                <button onClick={toggleNav} className="Lion">&#129409;</button>
            </div>
            <div className="Title">
                <h1>Kul utstilling bro</h1>
            </div>
        </div>
    )
}






