import React, { Component } from 'react';
import Places from './Places';


class Locations extends Component {
  render() {
    return (
      <div className="Locations">
        {
            this.props.placeData.map((placeData, idx) => {
              return <Places location={placeData} key={idx} pointId={idx}/>
            })
        }
      </div>
    );
  }
}

export default Locations;
