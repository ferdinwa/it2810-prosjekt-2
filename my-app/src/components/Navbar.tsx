import React, { useState } from 'react';
import './Navbar.css';


export default function Navbar() {

    function loveTheme() {
        document.body.style.backgroundColor = "pink"
        document.body.style.color = "red"
    }
    function happyTheme() {
        document.body.style.backgroundColor = "lightblue"
        document.body.style.color = "magenta"
    }
    function sadTheme() {
        document.body.style.backgroundColor = "grey"
        document.body.style.color = "lightgrey"
    }

    function summerTheme() {
        document.body.style.backgroundColor = "yellow"
        document.body.style.color = "orange";
    }

    return (
        <header className="Header">
            <img src="../public/logo192.png" className="Logo" alt="logo"/>
            <ul id="nav">
                <li><a href="#" onClick={loveTheme}>Kjærleik</a></li>
                <li><a href="#" onClick={happyTheme}>God stemning</a></li>
                <li><a href="#" onClick={sadTheme}>Trist</a></li>
                <li><a href="#" onClick={summerTheme}>Sommer</a></li>
              </ul>
        </header>
    )
}


