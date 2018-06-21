import React from "react";
import Counter from "../Counter";


// update this to receive props to change text based on each click!!
const Header = props => (
    <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-text">Clicky... Office Style!</span>
        <span className="navbar-text">{props.text}</span>
        <span className="navbar-text">Score: {props.counter} | Top Score: {props.highScore}</span>
    </nav>
);

export default Header;