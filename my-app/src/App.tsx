import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import { render } from '@testing-library/react';



export default class App extends React.Component {

  render() {
    return (
      <div className="App" data-observe-resizes>
        <Navbar />
        <Header />
      </div>
    );
  }
}


