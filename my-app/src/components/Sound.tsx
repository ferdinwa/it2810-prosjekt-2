import React from 'react';
import './Sound.css'


interface SoundProps {
    soundHandleClick: () => void;
    index: number;
    sound: string;
}

export default class Sound extends React.Component<SoundProps, {}> {

    render() {
        return (
            <div className="audiocontainer">
                <div>
                    <audio src={this.props.sound} controls autoPlay></audio>
                </div>
                <div className="audiobutton">
                    <button onClick={this.props.soundHandleClick}>Lyd</button>
                </div>

            </div>
        )
    }

}
