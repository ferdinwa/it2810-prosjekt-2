import React from 'react';
import './Sound.css'


interface SoundProps {
    //Interface to types of props passed to Sound
    soundHandleClick: () => void;
    index: number;
    sound: string;
}

export default class Sound extends React.Component<SoundProps, {}> {
    //Class to render the audio-object. Uses props from App.tsx to display pictures
    //Button to change the song.  
    render() {
        return (
            <div className="audiocontainer">
                <div>
                    <audio src={this.props.sound} controls autoPlay></audio>
                </div>
                <div className="audiobutton">
                    <button onClick={this.props.soundHandleClick}>Bytt lyd</button>
                </div>

            </div>
        )
    }

}
