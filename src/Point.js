import React, {Component} from 'react';


class Point extends Component {

    handleClick(data) {
        this.props.updateParent(this.props.location.id);
    }
    


    render() {

        var styleObj = {
            width: "10px",
            height: "10px",
            backgroundColor: "#E11837",
            position: "absolute",
            top: this.props.location.y,
            left: this.props.location.x,
            borderRadius: "10px",
            marginTop: "1px",
            marginLeft: "1px"
        }

        // var highlightObj = {
        //     width: "15px",
        //     height: "15px",
        //     backgroundColor: "purple",
        //     position: "absolute",
        //     top: this.props.location.y,
        //     left: this.props.location.x,
        //     borderRadius: "10px",
        // }

        // style={styleObj}

        return(
            <div style = {styleObj} onClick={() => {this.handleClick(this.props.location.id)}} >
                <div className={this.props.highlightPlaceID === this.props.location.id ? "shown" : "hidden"}>
                    <div className="highlightPoint"></div>
                    <p className="locationPointName">{this.props.location.name}</p>
                </div>
            </div>
        )
    }

}

export default Point;