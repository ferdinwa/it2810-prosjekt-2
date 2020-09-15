import React, { useState, useEffect } from 'react';
import './Header.css';


export default function Header(props : any): React.ReactElement {

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

    const handleLoveClick = () => {
        document.body.style.background = "pink url('heart.svg') no-repeat 50% 50%"
        document.body.style.color = "red"
    }

    const handleWhaleClick = () => {
        document.body.style.background = "lightblue url('whale.svg') no-repeat 50% 80%"
        document.body.style.color = "blue"
    }

    const handleSunClick = () => {
        document.body.style.background = "lightyellow url('summer.svg') no-repeat 50% 100%"
        document.body.style.color = "orange"
    }

    return (
        <div className="grid-container">
            <div className="Navbar">
                <img src={require("../pictures/logo192.png")} className="Logo" alt="logo"/>
                {(!isSmallScreen || isNavVisible) && (
                <nav className="Nav">
                    <button className="theme" id="love" onClick={handleLoveClick}>&#128150;</button>
                    <button className="theme" id="whale" onClick={handleWhaleClick}>&#128011;</button>
                    <button className="theme" id="sun" onClick={handleSunClick}>&#128526;</button>
                    <button className="save">Lagre</button>
                </nav>
                )}
                <button onClick={toggleNav} className="Lion">&#129409;</button>
            </div>
            <div className="Title">
                <h1>Kul utstilling</h1>
            </div>
        </div>
    )
}






