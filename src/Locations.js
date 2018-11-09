import React, { Component } from 'react';
import Places from './Places';


class Locations extends Component {

  updateParent(value) {
    this.props.updateGrandparent(value);
  }

  render() {
    return (
      <div className="Locations">
        {
            this.props.placeData.map((placeData) => {
              return <Places location={placeData} updateParent={this.updateParent.bind(this)} highlightPlaceID = {this.props.highlightPlaceID}/>
            })
        }
      </div>
    );
  }
}

export default Locations;
