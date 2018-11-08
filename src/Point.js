import React, {Component} from 'react';


class Point extends Component {

    

    // handleClick() {
        
    //     PointStore.changePoint(this.props.pointId);
    // }

    render() {

        var styleObj = {
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            position: "absolute",
            top: this.props.location.y,
            left: this.props.location.x,
            borderRadius: "10px",
        }

       

        return(
            <div onClick={() => {this.handleClick()}} style={styleObj}>
                <div className="locationPointContainer">
                    <p class="locationPointName">{this.props.location.name}</p>
                </div>
            </div>
        )
    }

}

export default Point;