import React from "react";

const Character = props => (
<div className="card">
    <div className="img-container">
        <img  alt={props.name} src={props.image} className="img-thumbnail" />
    </div>
</div>
)

export default Character;