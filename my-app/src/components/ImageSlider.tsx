import React from 'react'
import './Frame.css';

export default class ImageSlider extends React.Component {
    state = {
        images: [
            "/amigo.jpg",
            "/blubbe.jpg",
            "/Carol.jpeg"

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
        console.log(this.state.index)

    }

    render() {
        return <div className="container">
            <img
                className="pic"
                src={this.state.images[this.state.index]}
                alt="" />
            <p>Halla</p>
            <button onClick={this.handleNext}> Bilde </button>


        </div>
    }

};