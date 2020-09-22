import React from 'react'
import './Frame.css';

export default class ImageSlider extends React.Component {
    state = {
        images: [
            "/whale.svg",
            "/summer.svg",
            "/heart.svg"
        ],
        index: 0
    };

    handleNext = () => {
        if (this.state.index === 2) {
            this.setState({
                index: 0
            })
        }
        else {
            this.setState({
                index: this.state.index + 1
            })
        }

    }

    render() {
        return (
            <div>
                <div >
                    <img
                        className="image"
                        src={this.state.images[this.state.index]}
                        alt="" />
                </div>
                <button onClick={this.handleNext}> Bilde </button>
            </div>
        )
    }

};

