import React from 'react';
import './Frame.css';
//import Amigo from './img/amigo.jpg'
//import Blubbe from './img/blubbe.jpg'
//const url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

export const picture = () => {
    alert("Bilde")
}

export const text = () => {
    alert("Tekst")
}

export const music = () => {
    alert("Musikk")
}

interface Props {
    test: String
}

export const Frame = (props: any) => {
    let img1 = ""
    let img2 = ""
    let img3 = ""
    let img4 = ""
    if (props.tab === "1") {
        img1 = '/amigo.jpg'
        img2 = '/blubbe.jpg'
        img3 = '/blubbe.jpg'
        img4 = '/amigo.jpg'
    }
    else {
        img1 = '/blubbe.jpg'
        img2 = '/amigo.jpg'
    }



    return (
        <div className="container">
            <img src={img1} className="sliderimg" alt="" />
            <div>
                <h1> Halla </h1>
            </div>
            <div className="buttoncontainer">
                <button onClick={picture} className="buttona">Bilde</button>
                <button onClick={text} className="buttonb">Tekst</button>
                <button onClick={music} className="buttonc" >Musikk</button>
            </div>

        </div>
    );
};








