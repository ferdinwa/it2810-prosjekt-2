import React from 'react';


interface SoundProps {
    soundHandleClick: () => void;
    index: number;
    sound: string;
}

export default class Sound extends React.Component<SoundProps, {}> {

    render() {
        return (
            <div>
                <audio src={this.props.sound} controls></audio>
                <button onClick={this.props.soundHandleClick}>Lyd</button>
            </div>
        )
    }

}
