import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron text-center">
        <h1>React Clicky Game... The Office Style!</h1>
        <img src="./images/theOfficePainting.jpg" id="painting" alt="Office Painting" />
        <h3>Click on an image to earn points, but don't click any more than once!</h3>
        <p>Made with ReactJS</p>
        <img src="./images/logo.svg" alt="React Logo" id="reactLogo" />
    </div>
);

export default Jumbotron;