import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        person: [
            {
                name: "someName",
                age: 28
            }
        ],
        other: "some text here"
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

    nameChangeHandler = event => {
        this.setState({
            person: [
                {
                    name: event.target.value,
                    age: 30
                }
            ]
        });
    };

    render() {
        const buttonStyle = {
            backgroundColor: "white",
            padding: "1rem 4rem",
            border: "1px solid gray",
            marginBottom: "10px",
            boxShadow: "0 2px 3px #eee",
            fontSize: "1.5rem",
            fontWeight: "600"
        };

        return (
            <div className="App">
                <h1> Hi, This is React app </h1> <p> Yup, a working REACT app </p>
                <button style={buttonStyle} onClick={this.switchNameHandler}>
                    Switch
                </button>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age}
                    click={this.switchNameHandler}
                    change={this.nameChangeHandler}
                >
                    {this.state.other}
                </Person>
            </div>
        );
    }
}

export default App;
