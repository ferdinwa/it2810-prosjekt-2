import React from 'react';
import Header from "./components/Header";
import './App.css';
import ImageSlider from './components/ImageSlider';
import TextSlider from './components/TextSlider'

interface AppProps {
  image_index: number, text_index: number
}


export default class App extends React.Component<{}, { image_index: number, text_index: number }>  {
  constructor(props: any) {
    super(props);
    this.state = {
      image_index: 0,
      text_index: 0
    };
    this.textHandleClick = this.textHandleClick.bind(this);
    this.imageHandleClick = this.imageHandleClick.bind(this);
  }


  textHandleClick() {
    if (this.state.text_index === 2) {
      this.setState({
        text_index: 0,
      })
    }
    else {
      this.setState({
        text_index: this.state.text_index + 1
      })
    }
  }

  imageHandleClick() {
    if (this.state.image_index === 2) {
      this.setState({
        image_index: 0,
      })
    }
    else {
      this.setState({
        image_index: this.state.image_index + 1
      })
    }
  }

  render() {
    return (
      <div className="App" data-observe-resize>
        <Header />
        <div className="container">
          <div className="img">
            <ImageSlider index={this.state.image_index} imageHandleClick={this.imageHandleClick} />
          </div>
          <div className="text">
            <TextSlider index={this.state.text_index} textHandleClick={this.textHandleClick} />
          </div>
        </div>
      </div>
    );
  }
}


