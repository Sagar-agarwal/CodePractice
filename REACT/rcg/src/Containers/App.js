import React, { Component } from "react";
import classes from "./App.css";
import Person from "../Components/Persons/Person/Person";

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
        // When Person Components are displayed
        let buttonRed = "";
        if (this.state.showPersons) {
            buttonRed = classes.red;
        }

        return (
            <div className={classes.App}>
                <h1 className={classes.heading}> Hi, This is React app </h1> <p> Yup, a working REACT app </p>
                <button className={buttonRed} onClick={this.togglePersonsDisplayHandler}>
                    Switch
                </button>
                {this.state.showPersons ? (
                    <div>
                        {this.state.persons.map((person, index) => {
                            return (
                                <Person
                                    name={person.name}
                                    age={person.age}
                                    click={() => this.deletePerson(index)}
                                    key={person.id}
                                    changed={event => {
                                        this.nameChangeHandler(event, person.id);
                                    }}
                                ></Person>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
