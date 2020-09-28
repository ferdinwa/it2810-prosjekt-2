import React from 'react'
import './Slider.css';

interface ImageSliderProps {
    //Inteface to name types of props passed to ImageSlider
    imageHandleClick: () => void;
    index: number;
    display: string;
}

interface ImageSliderState {
    //Inteface to name types of states in ImageSlider
    images: string[];
    index: number;
}
export default class ImageSlider extends React.Component<ImageSliderProps, ImageSliderState> {
    //Class to render the SVG-animations. Uses props from App.tsx to display pictures
    //Button to switch change the SVG-animation
    render() {
        return (
            <div>
                <div >
                    <img
                        className="image"
                        src={this.props.display}
                        alt="" />
                </div>
                <button className="imagebutton" onClick={this.props.imageHandleClick}>Bytt bilde</button>

            </div>
        )
    }
}

