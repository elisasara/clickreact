import React from "react";

const Character = (props) => (
    <div className="container">
        <img src={props.image} alt={props.name} className="img-thumbnail" />
    </div>
)