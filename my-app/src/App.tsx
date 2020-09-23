import React from 'react';
import Header from "./components/Header";
import './App.css';
import ImageSlider from './components/ImageSlider';



export default class App extends React.Component<{}, {color : string, background : string, title: string}> {

  constructor(props : any){
    super(props);
    this.state = {
      background: localStorage.getItem("background") || "",
      color: localStorage.getItem("color") || "",
      title: localStorage.getItem("title") || "Kul utstilling" 
    }
    this.handleLoveClick = this.handleLoveClick.bind(this);
    this.handleWhaleClick = this.handleWhaleClick.bind(this);
    this.handleSunClick = this.handleSunClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

handleLoveClick() {
    this.setState({background: "pink url('heart.svg') no-repeat 50% 25%"});
    this.setState({ color: "red"});
}

handleWhaleClick() {
    this.setState({ background: "lightblue url('whale.svg') no-repeat 50% 40%"});
    this.setState({ color:  "blue"});  
}

handleSunClick() {
    this.setState({ background: "lightyellow url('summer.svg') no-repeat 50% 40%"});
    this.setState({ color: "orange"})
}

handleLogoClick() {
    let titles = ["Kul utstilling" ,"Skikkelig kul","Den var fin","Megastilig greie"]
    this.setState({ background: "white url('artist.svg') no-repeat 50% 40%"});
    this.setState({ color: "black"})
    if(this.state.title === titles[0]) {
      this.setState({title: titles[1]})
    }
    else if(this.state.title === titles[1]) {
      this.setState({title: titles[2]})
    }
    else if(this.state.title === titles[2]) {
      this.setState({title: titles[3]})
    }
    else if(this.state.title === titles[3]) {
      this.setState({title: titles[0]})
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
        <ImageSlider />
      </div>
    );
  }
}


