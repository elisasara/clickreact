import React from "react";
import "./Character.css";

const Character = props => (
    <div className="img-container">
        <img  onClick={()=> props.handleClick(props.name)} alt={props.name} src={props.image} className="img-thumbnail" />
    </div>
)

export default Character;