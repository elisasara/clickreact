import React from "react";
import office from "/office.json";

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

    render (){
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Character PASS PROPS HERE />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
};

export default GameBoard;
