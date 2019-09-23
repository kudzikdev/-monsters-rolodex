import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [
      {
        id: 1,
        name: "Frankenstein"
      },
      {
        id: 2,
        name: "Dracula"
      },
      {
        id: 3,
        name: "Zombie"
      }
    ]
  };

  

  render() {
    return (
      <div className="app">
        {this.state.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
