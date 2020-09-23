import React from 'react'
import './Frame.css';

interface ImageSliderState {
    images: string[]
    displayed_picture: string
    index: number
}

export default class ImageSlider extends React.Component<any, ImageSliderState> {
    
    constructor(props: any){
        super(props)
        this.state = {
            images: [
                "whale.svg",
                "summer.svg",
                "heart.svg"
            ],
            index: Number(sessionStorage.getItem("index")) || 0,
            displayed_picture: sessionStorage.getItem("picture") || ""}
    }

    handleNext = () => {
        if (this.state.index === 2) {
            sessionStorage.setItem("index", "0")
            this.setState({
                index: Number(sessionStorage.getItem("index"))
            })
        }
        else if (this.state.index === 1) {
            sessionStorage.setItem("index", "2")
            this.setState({
                index: Number(sessionStorage.getItem("index"))
            })
        }
        else if (this.state.index === 0) {
            sessionStorage.setItem("index", "1")
            this.setState({index: Number(sessionStorage.getItem("index"))})
        }
        //Saves the picture that is displayed to session-storage
        sessionStorage.setItem("picture", this.state.images[this.state.index])

        this.setState({displayed_picture: sessionStorage.getItem("picture")!})
        
        console.log(this.state.index)
        console.log(sessionStorage.getItem("picture"))

    }

    render() {
        return (
            <div>
                <div className="container frame">
                    <img
                        className="image"
                        src={this.state.displayed_picture}
                        alt="" />
                    <p className="p">Halla</p>

                </div>
                <button onClick={this.handleNext}> Bilde </button>
            </div>
        )
    }

};