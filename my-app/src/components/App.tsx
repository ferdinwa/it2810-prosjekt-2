import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar"


export default class App extends React.Component {

  render() {
    return (
      <div className="App" data-observe-resizes>
        <Header />
      </div>
    );
  }
}


