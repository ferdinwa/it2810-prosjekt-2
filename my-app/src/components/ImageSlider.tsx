import React from 'react'
import './Slider.css';

interface ImageSliderProps {
    imageHandleClick: () => void;
    index: number;
    display: string;
}

interface ImageSliderState {
    images: string[];
    index: number;
}
export default class ImageSlider extends React.Component<ImageSliderProps, ImageSliderState> {
    render() {
        return (
            <div>
                <div >
                    <img
                        className="image"
                        src={this.props.display}
                        alt="" />
                </div>
                <button className="imagebutton ok" onClick={this.props.imageHandleClick}>Bilde</button>

            </div>
        )
    }
}

