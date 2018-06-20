import React from "react";

const Character = props => (
<div className="card">
    <div className="img-container">
        <img src={props.image} alt={props.name} className="img-thumbnail" />
    </div>
</div>
)