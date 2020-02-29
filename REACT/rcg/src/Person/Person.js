import React from "react";

import "./Person.css";

const person = props => {
    return (
        <div className="Person">
            <input type="text" onChange={props.change} />

            <p onClick={props.click}>
                This is a person component of {props.name} and {props.age}
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
