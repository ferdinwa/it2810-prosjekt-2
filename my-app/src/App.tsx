import React from 'react';
import Header from "./components/Header";
import Sound from "./components/Sound";
import './App.css';
import ImageSlider from './components/ImageSlider';
import TextSlider from './components/TextSlider'

interface AppState {
  image_index: number,
  text_index: number,
  displayed_picture: string,
  color: string,
  background: string,
  title: string
  sound_index: number
  chosen_picture_list: string[]
  chosen_sound_list: string[]
  displayed_sound: string
}

export default class App extends React.Component<{}, AppState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      image_index: Number(sessionStorage.getItem("index")) || 0,
      text_index: 0,
      sound_index: 0,
      displayed_picture: sessionStorage.getItem("picture") || "summer.svg",
      displayed_sound: "amigolyd.mp3",
      background: localStorage.getItem("background") || "",
      color: localStorage.getItem("color") || "",
      title: localStorage.getItem("title") || "Kul utstilling",
      chosen_sound_list: [],
      chosen_picture_list: []
    }
    this.textHandleClick = this.textHandleClick.bind(this);
    this.imageHandleClick = this.imageHandleClick.bind(this);
    this.handleLoveClick = this.handleLoveClick.bind(this);
    this.handleWhaleClick = this.handleWhaleClick.bind(this);
    this.handleSunClick = this.handleSunClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.soundHandleClick = this.soundHandleClick.bind(this);
  }

  images = [
    ["heart.svg", "heart2.svg", "lovegiraffe.svg"],
    ["whale.svg", "sealion.svg", "crab.svg"],
    ["summer.svg", "summer2.svg", "summer3.svg"]
  ]

  sounds = [
    ["loveontop.mp3", "lovesomeone.mp3", "lovestory.mp3"],
    ["ocean.mp3", "badekarettilpelle.mp3", "kapteinsabeltann.mp3"],
    ["summerof69.mp3", "summer.mp3", "sommartider.mp3"]
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

  soundHandleClick() {
    if (this.state.sound_index === 2) {
      this.setState({
        sound_index: 0,
      })
    }
    else {
      this.setState({
        sound_index: this.state.sound_index + 1
      })
    }
    this.setState({ displayed_sound: this.state.chosen_sound_list[this.state.sound_index] });
    console.log(this.state.chosen_sound_list)
    console.log(this.state.sound_index);
  }

  imageHandleClick() {
    if (this.state.image_index === 2) {
      sessionStorage.setItem("index", "0")
      this.setState({
        image_index: Number(sessionStorage.getItem("index"))
      })
    }
    else if (this.state.image_index === 0) {
      sessionStorage.setItem("index", "1")
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
    //Saves the picture that is displayed to session-storage
    sessionStorage.setItem("picture", this.state.chosen_picture_list[this.state.image_index])
    this.setState({ displayed_picture: sessionStorage.getItem("picture")! })
  }

  handleLoveClick() {
    this.setState({ displayed_picture: this.images[0][0] })
    this.setState({ chosen_picture_list: this.images[0] });
    this.setState({ image_index: 1 })
    this.setState({ displayed_sound: this.sounds[0][0] })
    this.setState({ chosen_sound_list: this.sounds[0] });
    this.setState({ background: "pink" });
    this.setState({ color: "red" });
    this.setState({ sound_index: 1 })

    console.log()
  }

  handleWhaleClick() {
    this.setState({ displayed_picture: this.images[1][0] })
    this.setState({ chosen_picture_list: this.images[1] });
    this.setState({ image_index: 1 })
    this.setState({ chosen_sound_list: this.sounds[1] });
    this.setState({ background: "lightblue" });
    this.setState({ color: "blue" });
    this.setState({ sound_index: 1 })
    this.setState({ displayed_sound: this.sounds[1][0] })
  }

  handleSunClick() {
    this.setState({ displayed_picture: this.images[2][0] })
    this.setState({ chosen_picture_list: this.images[2] });
    this.setState({ image_index: 1 })
    this.setState({ chosen_sound_list: this.sounds[2] });
    this.setState({ background: "lightyellow" });
    this.setState({ color: "orange" })
    this.setState({ sound_index: 1 })
    this.setState({ displayed_sound: this.sounds[2][0] })
  }

  handleLogoClick() {
    let titles = ["Kul utstilling", "Skikkelig kul", "Den var fin", "Megastilig greie"]
    this.setState({ background: "white" });
    this.setState({ color: "black" });
    this.setState({ displayed_picture: "sealion.svg" });
    this.setState({ displayed_sound: "amigolyd.mp3" });
    this.setState({ chosen_picture_list: [] });
    this.setState({ chosen_sound_list: [] })

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
          <div className="wrapper">

            <div>
              <ImageSlider display={this.state.displayed_picture} index={this.state.image_index} imageHandleClick={this.imageHandleClick} />
            </div>
          </div>
          <div className="wrapper">
            <div>
              <TextSlider index={this.state.text_index} textHandleClick={this.textHandleClick} />
            </div>

          </div>
        </div>
        <div className="framecontainer">
          <Sound sound={this.state.displayed_sound} index={this.state.sound_index} soundHandleClick={this.soundHandleClick} />
        </div>
      </div>
    );
  }
}


