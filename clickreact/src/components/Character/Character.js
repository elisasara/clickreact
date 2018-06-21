import React from "react";

const Character = props => (
<div className="card">
    <div className="img-container">
        <img  onClick={()=> props.shuffleChar(props.name)} alt={props.name} src={props.image} className="img-thumbnail" />
    </div>
</div>
)

export default Character;