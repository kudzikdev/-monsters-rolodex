import React from "react";
import { CardList } from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
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
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1>Search Robots</h1>
        <SearchBox
          placeholder="search"
          handleInputSearch={this.handleInputSearch}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
