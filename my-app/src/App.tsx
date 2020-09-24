import React from 'react';
import Header from "./components/Header";
import './App.css';
import ImageSlider from './components/ImageSlider';
import TextSlider from './components/TextSlider'

interface AppState {
  image_index: number,
  text_index: number,
  displayed_picture: string,
  color: string, background:
  string, title: string

}


export default class App extends React.Component<{}, AppState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      image_index: Number(sessionStorage.getItem("index")) || 0,
      text_index: 0,
      displayed_picture: sessionStorage.getItem("picture") || "",
      background: localStorage.getItem("background") || "",
      color: localStorage.getItem("color") || "",
      title: localStorage.getItem("title") || "Kul utstilling"
    }
    this.textHandleClick = this.textHandleClick.bind(this);
    this.imageHandleClick = this.imageHandleClick.bind(this);
    this.handleLoveClick = this.handleLoveClick.bind(this);
    this.handleWhaleClick = this.handleWhaleClick.bind(this);
    this.handleSunClick = this.handleSunClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  };

  images = [
    "/whale.svg",
    "/summer.svg",
    "/heart.svg"
  ]


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
      sessionStorage.setItem("index", "0")
      this.setState({
        image_index: Number(sessionStorage.getItem("index"))
      })
    }
    else if (this.state.image_index === 1) {
      sessionStorage.setItem("index", "2")
      this.setState({
        image_index: Number(sessionStorage.getItem("index"))
      })
    }
    else if (this.state.image_index === 0) {
      sessionStorage.setItem("index", "1")
      this.setState({ image_index: Number(sessionStorage.getItem("index")) })
    }
    //Saves the picture that is displayed to session-storage
    sessionStorage.setItem("picture", this.images[this.state.image_index])

    this.setState({ displayed_picture: sessionStorage.getItem("picture")! })

  }

  handleLoveClick() {
    this.setState({ background: "pink" });
    this.setState({ color: "red" });
  }

  handleWhaleClick() {
    this.setState({ background: "lightblue" });
    this.setState({ color: "blue" });
  }

  handleSunClick() {
    this.setState({ background: "lightyellow" });
    this.setState({ color: "orange" })
  }

  handleLogoClick() {
    let titles = ["Kul utstilling", "Skikkelig kul", "Den var fin", "Megastilig greie"]
    this.setState({ background: "white" });
    this.setState({ color: "black" })
    if (this.state.title === titles[0]) {
      this.setState({ title: titles[1] })
    }
    else if (this.state.title === titles[1]) {
      this.setState({ title: titles[2] })
    }
    else if (this.state.title === titles[2]) {
      this.setState({ title: titles[3] })
    }
    else if (this.state.title === titles[3]) {
      this.setState({ title: titles[0] })
    }
  }

  handleSaveClick() {
    localStorage.setItem("background", this.state.background);
    localStorage.setItem("color", this.state.color);
    localStorage.setItem("title", this.state.title)
  }
  render() {
    return (
      <div className="App" data-observe-resize>

        <Header color={this.state.color}
          background={this.state.background}
          title={this.state.title}
          handleSaveClick={this.handleSaveClick}
          handleLogoClick={this.handleLogoClick}
          handleLoveClick={this.handleLoveClick}
          handleWhaleClick={this.handleWhaleClick}
          handleSunClick={this.handleSunClick}
        />
        <div className="container">
          <div className="img">
            <ImageSlider display={this.state.displayed_picture} index={this.state.image_index} imageHandleClick={this.imageHandleClick} />
          </div>
          <div className="text">
            <TextSlider index={this.state.text_index} textHandleClick={this.textHandleClick} />
          </div>
        </div>
      </div>
    );
  }
}


