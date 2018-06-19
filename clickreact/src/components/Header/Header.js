import React from "react";
import Counter from "../Counter";

const Header = () => (
    <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-text">Clicky... Office Style!</span>
        <span className="navbar-text">Click an image to begin.</span>
        <Counter />
    </nav>
);

export default Header;