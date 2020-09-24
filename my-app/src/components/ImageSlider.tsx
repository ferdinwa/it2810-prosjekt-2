import React from 'react'
import './Frame.css';

interface ImageSliderProps {
    imageHandleClick: () => void;
    index: number;
}

interface ImageSliderState {
    images: string[];
    index: number;
}

export default class ImageSlider extends React.Component<ImageSliderProps, ImageSliderState> {
    images = [
        "/whale.svg",
        "/summer.svg",
        "/heart.svg"
    ]

    render() {
        return (
            <div>
                <div >
                    <img
                        src={this.images[this.props.index]}
                        alt="" />
                </div>
                <button onClick={this.props.imageHandleClick}> Bilde </button>
            </div>
        )
    }

};

