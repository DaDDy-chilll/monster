import { Component } from "react";
import ClardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (e) => {
    const serachString = e.target.value.toLowerCase();
    this.setState(() => {
      return { serachString };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Enter monster"
          className="search-box"
        />
        <ClardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
