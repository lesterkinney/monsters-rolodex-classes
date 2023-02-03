import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {
          monsters: users,
          searchString: ''
        }
      }));
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLocaleLowerCase() }
    });
  }

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));

    return (
      <div className="App">
        <h1 className='app-title'>Monster's Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholderText="search monsters"
          className="search-box"/>
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;