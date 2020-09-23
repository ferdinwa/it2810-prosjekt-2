import React, { useState, useEffect } from 'react';
import './Header.css';


export default function Header(props: any): React.ReactElement {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    //const [background, setBackground] = useState<string>(localStorage.getItem("background") || "");
    //const [color, setColor] = useState<string>(props.color);

    
    useEffect(() => {
        document.body.style.background = props.background;
        document.body.style.color = props.color;
        }, [props.background, props.color]);
    

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = (mediaQuery: any) => {
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
                <img src={require("../pictures/logo192.png")} className="Logo" alt="logo" onClick={props.handleLogoClick} />
                {(!isSmallScreen || isNavVisible) && (
                    <nav className="Nav">
                        <button className="theme" id="love" onClick={props.handleLoveClick}>&#128150;</button>
                        <button className="theme" id="whale" onClick={props.handleWhaleClick}>&#128011;</button>
                        <button className="theme" id="sun" onClick={props.handleSunClick}>&#128526;</button>
                        <button className="save" onClick={props.handleSaveClick}>Lagre</button>
                    </nav>
                )}
                <button onClick={toggleNav} className="Lion">&#129409;</button>
            </div>
            <div className="Title">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}






