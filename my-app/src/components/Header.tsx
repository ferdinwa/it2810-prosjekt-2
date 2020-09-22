import React, { useState, useEffect } from 'react';
import './Header.css';


export default function Header(props: any): React.ReactElement {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [background, setBackground] = useState<string>(localStorage.getItem("background") || "");
    const [color, setColor] = useState<string>(props.color);

    useEffect(() => 
        setBackground(background), [background]);
    
    useEffect(() => {
        document.body.style.background = background;
        document.body.style.color = color;
        }, [background, color]);
    

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

    const handleLoveClick = () => {
        setBackground("pink url('heart.svg') no-repeat 50% 25%")
        setColor("red");
    }

    const handleWhaleClick = () => {
        setBackground("lightblue url('whale.svg') no-repeat 50% 40%")
        setColor("blue");  
    }

    const handleSunClick = () => {
        setBackground("lightyellow url('summer.svg') no-repeat 50% 40%")
        setColor("orange")
        
    }

    const handleLogoClick = () => {
        setBackground("white url('artist.svg') no-repeat 50% 40%")
        setColor("black")
    }

    const handleSaveClick = () => {
        localStorage.setItem("background", background);
    }



    return (
        <div className="grid-container">
            <div className="Navbar">
                <img src={require("../pictures/logo192.png")} className="Logo" alt="logo" onClick={handleLogoClick} />
                {(!isSmallScreen || isNavVisible) && (
                    <nav className="Nav">
                        <button className="theme" id="love" onClick={handleLoveClick}>&#128150;</button>
                        <button className="theme" id="whale" onClick={handleWhaleClick}>&#128011;</button>
                        <button className="theme" id="sun" onClick={handleSunClick}>&#128526;</button>
                        <button className="save" onClick={handleSaveClick}>Lagre</button>
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






