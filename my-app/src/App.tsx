import React from 'react';
import Header from "./components/Header";
import './App.css';

export default class App extends React.Component {


  render() {
    return (
      <div className="App" data-observe-resize>
        <Header />
      </div>
    );
  }
}


