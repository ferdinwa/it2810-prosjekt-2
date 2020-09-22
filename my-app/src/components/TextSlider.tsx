import React from "react"

export default class TextSlider extends React.Component {
    state = {
        poems: [
            "https://poetrydb.org/title/Not at Home to Callers/.json",
            "https://poetrydb.org/title/The words the happy say/.json",
            "https://poetrydb.org/title/The Life we have is very great./.json"
        ],
        index: 0,
        data: [],

    }

    handleNext = () => {
        console.log(this.state.index)
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

    componentDidMount() {
        var i;
        for (i = 0; i < this.state.poems.length; i++) {
            fetch(this.state.poems[i])
                .then((response) => response.json())
                .then((result) => {
                    console.log(this.state.data);
                    this.setState({
                        data: [...this.state.data, result[0].lines]
                    });
                });
        }
    };

    render() {
        return (
            <div>
                <p> {this.state.data[this.state.index]} </p>
                <button onClick={this.handleNext}> Tekst </button>
            </div>
        )
    }

}


