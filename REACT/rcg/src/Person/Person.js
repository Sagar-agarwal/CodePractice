import React from "react";

import classes from "./Person.css";

const person = props => {
    return (
        <div className={classes.Person}>
            <input type="text" onChange={props.changed} />
            <p onClick={props.click}>
                This is a person component of {props.name} and {props.age}
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
