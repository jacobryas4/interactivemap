import React, {Component} from 'react';


class Places extends Component {

    handleClick(data) {
        this.props.updateParent(this.props.location.id);
    }


    render() {

        var styleObj = {
            width: "100%",
            height: "80px",
            backgroundColor: "white",
            borderRadius: "3px",
            textAlign: "left",
            margin: "10px 0",
            fontSize: "12px"
        }

       

        return(
            <div onClick={() => {this.handleClick(this.props.location.id)}} style={styleObj} className={this.props.highlightPlaceID === this.props.location.id ? "addBorder" : "placeContainer"}>
                <h3 class="placeTitle">{this.props.location.name}</h3>
                <p class="placeDescription">{this.props.location.descShort}</p>
            </div>
        )
    }

}

export default Places;