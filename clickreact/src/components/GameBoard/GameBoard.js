import React from "react";
import office from "../../office.json";
import Character from "../Character";

class GameBoard extends React.Component {
    state = {
        office
    };

    // create sort method to be passed to an on click event as a prop
    // create counter for successful on click as well
    // handleClick = () => {
    //     if (this.state.clicked) {

    //     }
    //     else {

    //     }
    // }

    // set up grip with a character component in each
    // pass props to character component to show which character goes where based on array order

    render() {
        return (
            <div className="col-md-4">

                {/* {this.state.office.map(character =>{
                <Character src={this.state.office.image} />
                })
                } */}
            </div>
        )
    }
};

export default GameBoard;
