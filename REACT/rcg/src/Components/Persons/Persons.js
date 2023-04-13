import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log(`[Persons.js] getDerivedStateFromProps... \n ${state} \n ${props}`);
        return state;
    }

    render() {
        console.log(`[Persons.js] Persons rendering...`);
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    clicked={() => this.props.clicked(index)}
                    key={person.id}
                    changed={event => {
                        this.props.changed(event, person.id);
                    }}
                ></Person>
            );
        });
    }
}

export default Persons;
