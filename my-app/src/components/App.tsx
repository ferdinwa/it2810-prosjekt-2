import React from 'react';
import ImageSlider from './ImageSlider';

interface MyProps {
  tab?: string
}

interface MyState {
  tab?: string
}


export default class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props)
    this.state = {
      tab: "1"
    }
  }

  render() {
    return (
      <div className="App" data-observe-resizes>
        <ImageSlider />
      </div>
    );
  }
}



