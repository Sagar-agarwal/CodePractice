import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../Components/Cockpit/Cockpit";
import Persons from "../Components/Persons/Persons";

//
class App extends Component {
    state = {
        persons: [
            {
                id: "aaa1",
                name: "Marsh Mellow",
                age: 28
            },
            {
                id: "aaa2",
                name: "Martin Garix",
                age: 23
            },
            {
                id: "aaa3",
                name: "David Guetta",
                age: 32
            }
        ],
        other: "some text here",
        showPersons: false
    };

    switchNameHandler = () => {
        this.setState({
            person: [
                {
                    name: "newName",
                    age: 29
                }
            ]
        });
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const persons = [...this.state.persons];

        persons[personIndex].name = event.target.value;

        this.setState({ persons: persons });
    };

    deletePerson = personIndex => {
        let persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    togglePersonsDisplayHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        return (
            <div className={classes.App}>
                <Cockpit clicked={this.togglePersonsDisplayHandler} classes={this.classes} state={this.state} />
                {this.state.showPersons ? (
                    <Persons
                        clicked={this.deletePerson}
                        changed={this.nameChangeHandler}
                        persons={this.state.persons}
                    />
                ) : null}
            </div>
        );
    }
}

export default App;
