import React from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [],
    searchInput: ""
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

  handleInputSearch = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="search monster"
          onChange={this.handleInputSearch}
          value={this.state.searchInput}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
