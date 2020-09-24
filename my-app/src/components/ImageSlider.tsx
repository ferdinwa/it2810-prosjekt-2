import React from 'react'
import './Frame.css';

interface ImageSliderProps {
    imageHandleClick: () => void;
    index: number;
    display: string;
}

interface ImageSliderState {
    images: string[];
    index: number;
}

export default class ImageSlider extends React.Component<any, ImageSliderProps, ImageSliderState> {

    render() {
        return (
            <div>
                <div >
                    <img
                        className="image"
                        src={this.props.display}
                        alt="" />
                </div>
                <button onClick={this.props.imageHandleClick}> Bilde </button>
            </div>
        )
    }

};

