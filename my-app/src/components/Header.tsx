import React, { useState } from 'react';
import CSS from 'csstype';


export default function Header(): React.ReactElement {
    const[title, setTitle] = useState("Interaktiv og kul utstilling")
    
    return (
        <div>
            <h1 style={headerStyle}>{title}</h1>
        </div>
    )
}

const headerStyle: CSS.Properties = {
    textAlign: 'center',
    fontFamily: 'Brush Script MT, Brush Script Std, cursive',
    fontSize: '300%',
    borderBottom: '5px solid red'
}



