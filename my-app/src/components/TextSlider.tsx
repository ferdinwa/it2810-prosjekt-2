import React from "react"
/*import { stringify } from "querystring";*/


interface TextSliderProps {
    textHandleClick: () => void;
    index: number;
}

interface TextSliderState {
    poems: string[];
    index: number;
}

export default class textSlider extends React.Component<TextSliderProps, TextSliderState> {
    poems = [
        "https://poetrydb.org/title/Not at Home to Callers/.json",
        "https://poetrydb.org/title/The words the happy say/.json",
        "https://poetrydb.org/title/The Life we have is very great./.json"
    ]
    poemsDone = [] as any;
    data = [] as string[][];


    componentDidMount() {
        var i;
        for (i = 0; i < this.poems.length; i++) {
            fetch(this.poems[i])
                .then((response) => response.json())
                .then((result) => {
                    console.log(result[0].lines)
                    this.data.push(result[0].lines)
                });
        }
        console.log(this.data)
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

                {this.makeText(this.props.index)}
                <button onClick={this.props.textHandleClick}> Tekst </button>
            </div>
        )
    }

}


