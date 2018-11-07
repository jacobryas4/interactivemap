import React, {Component} from 'react';


class Places extends Component {


    render() {

        var styleObj = {
            width: "280px",
            height: "75px",
            backgroundColor: "white",
            // position: "absolute",
            // top: this.props.location.y,
            // left: this.props.location.x,
            borderRadius: "10px",
            textAlign: "left",
        }

       

        return(
            <div onClick={() => {this.handleClick()}} style={styleObj} className="placeContainer">
                <h4 class="placeTitle">{this.props.location.name}</h4>
                <p class="placeDescription">{this.props.location.desc}</p>
            </div>
        )
    }

}

export default Places;