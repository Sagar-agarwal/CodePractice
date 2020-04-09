import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log(`[cockpit.js]: useEffect`);
    });

    return (
        <div className={classes.Cockpit}>
            <h1 className={classes.heading}> Hi, This is React app </h1>
            <p> Yup, a working REACT app </p>
            <button className={props.state.showPersons ? classes.red : classes.green} onClick={props.clicked}>
                Switch
            </button>
        </div>
    );
};

export default Cockpit;
