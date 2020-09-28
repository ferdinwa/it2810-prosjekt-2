import React from "react"
/*import { stringify } from "querystring";*/
import './Slider.css'


interface TextSliderProps {
    //Interface to name types of props passed to TextSlider
    textHandleClick: () => void;
    index: number;

}

interface TextSliderState {
    //Interface to name types of states in TextSlider
    text: string[];

}

export default class TextSlider extends React.Component<any, TextSliderProps, TextSliderState> {
    //Class to render poems fetched from the PoetryDB REST api
    //Renders a poem and a button to chenge the poems
    poems = [
        "https://poetrydb.org/title/Not at Home to Callers/.json",
        "https://poetrydb.org/title/The words the happy say/.json",
        "https://poetrydb.org/title/The Life we have is very great./.json"
    ]

    data = [] as string[][];

    componentDidMount() {
        //fetches the poems from the REST api when the page mount 
        var i;
        for (i = 0; i < this.poems.length; i++) {
            fetch(this.poems[i])
                .then((response) => response.json())
                .then((result) => {
                    this.data.push(result[0].lines)
                });
        }
    };

    makeText(index: number) {
        //Maps the given poem to paragraphs with the lines in the poem
        //If there is no poem, display ... loading ...
        if (this.data != null) {
            return (this.data.map((list: string[], index: number) => [list.map((line: string, index: number) => <p>{line}</p>)])[index]);
        }
        else {
            return <p> ... loading ... </p>
        }
    }

    render() {
        return (
            <div>
                <div className="text">
                    <div className="poem"> {this.makeText(this.props.index)} </div>
                </div>
                <div>
                    <button onClick={this.props.textHandleClick} className="textbutton" > Bytt tekst </button>
                </div>


            </div>
        )
    }
}






