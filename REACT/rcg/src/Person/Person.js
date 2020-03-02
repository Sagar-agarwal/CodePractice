import React from "react";

import "./Person.css";

const person = props => {
    return (
        <div className="Person">
            <input type="text" onChange={props.changed} />
            <p>
                This is a person component of {props.name} and {props.age}
            </p>
            <p>{props.children}</p>
            <i className="fa fa-delete" onClick={props.click}></i>
        </div>
    );
};

export default person;
