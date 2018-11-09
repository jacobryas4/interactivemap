import React, { Component } from 'react';



class Popup extends Component {

    

  

  render() {

   

      
    return (
      <div className={this.props.highlightPlaceID === "" && this.props.highlightPointID === "" ? "hidden" : "Popup"}>
        <div className="textContainer">
            <h1>{this.props.placeData[this.props.textID].name}</h1>
            <p>{this.props.placeData[this.props.textID].desc}</p>
        </div>
        <div className="imgContainer">
           
        </div>

      </div>
    );
  }
}

export default Popup;