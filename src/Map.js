import React, { Component } from 'react';
import Point from './Point';

class Map extends Component {

  updateParent(value) {
    this.props.updatePointGrandparent(value);
  }

  render() {
    return (
      <div className="Map">
        {
            this.props.points.map((pointData) => {
              return <Point location={pointData} highlightPlaceID = {this.props.highlightPlaceID} highlightPointID={this.props.highlightPointID} updateParent={this.updateParent.bind(this)}/>
            })
        }
      </div>
    );
  }
}

export default Map;
