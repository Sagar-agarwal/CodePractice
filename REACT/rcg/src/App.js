import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
    const [state, setState] = useState({
        person: [
            {
                name: "someName",
                age: 28
            }
        ]
    });

    const switchNameHandler = () => {
        setState({
            person: [
                {
                    name: "newName",
                    age: 29
                }
            ]
        });
    };

    return (
        <div className="App">
            <h1> Hi, This is React app </h1> <p> Yup, a working REACT app </p>{" "}
            <button onClick={switchNameHandler}> Switch </button>
            <Person name={state.person[0].name} age={state.person[0].age} />
        </div>
    );
};

export default App;
