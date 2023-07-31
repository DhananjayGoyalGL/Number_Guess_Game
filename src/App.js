import React, { Component } from "react";
import GuessingGame from "./components/guessgame";
import "./components/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuessingGame />
      </div>
    );
  }
}

export default App;
