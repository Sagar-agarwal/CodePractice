import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import classes from "./Person.css";

class Person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[Person.js] shouldComponentUpdate ... 
            ${this.props.name} != ${nextProps.name}
        `);
        return true;
    }
    render() {
        return (
            <Auxillary>
                <input type="text" onChange={this.props.changed} />
                <p onClick={this.props.clicked}>
                    This is a person component of {this.props.name} and {this.props.age}
                </p>
                <p>{this.props.children}</p>
            </Auxillary>
        );
    }
}

export default Person;
