import React, { Component } from 'react';
import Locations from './Locations';
import Map from './Map';
import pointData from './pointData.json';
// import logo from './logo.svg';
import './App.css';
import Popup from './Popup'

class App extends Component {

  constructor() {
    super();
    this.state = {
      points: pointData,
      highlightPointID: "",
      highlightPlaceID: "",
      textID: 0,
      
    }
  }

  updateGrandparent = (value) => {
    this.setState({highlightPlaceID: value, textID: value});
  }

  updatePointGrandparent = (value) => {
    this.setState({highlightPlaceID: value, textID: value});
  }
  
  render() {
    return (
      <div className="App">
        <Locations placeData = {this.state.points} updateGrandparent={this.updateGrandparent} highlightPlaceID = {this.state.highlightPlaceID}/>
        <Map points = {this.state.points} highlightPlaceID = {this.state.highlightPlaceID} highlightPointID = {this.state.highlightPointID} updatePointGrandparent={this.updatePointGrandparent}/>
        <Popup highlightPlaceID = {this.state.highlightPlaceID} highlightPointID = {this.state.highlightPointID} placeData = {this.state.points} textID = {this.state.textID}/>
      </div>
    );
  }
}

export default App;
