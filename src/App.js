import React from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user =>
        this.setState({
          monsters: user
        })
      );
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
