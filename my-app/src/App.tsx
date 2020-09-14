import React from 'react';
import Header from "./components/Header";
import './App.css';



export default class App extends React.Component {

  constructor(props : any) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }

  

  
  render() {
    return (
      <div className="App" data-observe-resizes>
        <Header />
      </div>
    );
  }
}


