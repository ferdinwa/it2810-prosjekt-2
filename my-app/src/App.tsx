import React from 'react';
import Header from "./components/Header";
import './App.css';
import ImageSlider from './components/ImageSlider';

export default class App extends React.Component {


  render() {
    return (
      <div className="App" data-observe-resize>
        <Header />
        <ImageSlider />
      </div>
    );
  }
}


