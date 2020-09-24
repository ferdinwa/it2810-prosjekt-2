import React from "react"
import './Frame.css'
/*import { stringify } from "querystring";*/
import './Slider.css'


interface TextSliderProps {
    textHandleClick: () => void;
    index: number;

}

interface TextSliderState {
    text: string[];

}

export default class textSlider extends React.Component<any, TextSliderProps, TextSliderState> {
    poems = [
        "https://poetrydb.org/title/Not at Home to Callers/.json",
        "https://poetrydb.org/title/The words the happy say/.json",
        "https://poetrydb.org/title/The Life we have is very great./.json"
    ]

    data = [] as string[][];


    componentDidMount() {
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
        if (this.data != null) {
            return (this.data.map((list: string[], index: number) => [list.map((line: string, index: number) => <p key={index}>{line}</p>)])[index]);
        }
        else {
            return <p> ... loading ...</p>
        }
    }


    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="poem"> {this.makeText(this.props.index)} </div>
                </div>
                <div>
                    <button onClick={this.props.textHandleClick} className="textbutton ok" > Tekst </button>
                </div>


            </div>
        )
    }
}






