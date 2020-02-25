import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        person: [{ name: "someName", age: 28 }]
    };

    switchHandler = () => {
        this.setState({ person: [{ name: "someName", age: 29 }] });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, This is React app</h1>
                <p>Yup, a working REACT app</p>
                <button onClick={this.switchHandler}>Switch</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}>
                    This is a child content
                </Person>
            </div>
        );
    }
}

export default App;
