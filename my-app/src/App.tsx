import React from 'react';
import Header from "./components/Header";
import './App.css';
import ImageSlider from './components/ImageSlider';
import TextSlider from './components/TextSlider'

export default class App extends React.Component {



  render() {
    return (
      <div className="App" data-observe-resize>
        <Header />
        <div className="containter">
          <ImageSlider />
          <TextSlider />
        </div>
      </div>
    );
  }
}


