import React, { Component } from 'react';
import Locations from './Locations';
import Map from './Map';
import pointData from './pointData.json';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      points: pointData
    }
  }
  
  render() {
    return (
      <div className="App">
        <Locations />
        <Map />
      </div>
    );
  }
}

export default App;
