import React from "react";

const person = props => {
    return (
        <div>
            <p>
                This is a person component of {props.name} and {props.age}
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
