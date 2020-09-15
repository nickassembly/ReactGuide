import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Nick', age: 41},
      {name: 'Keller', age: 99},
      {name: 'ummm', age: 14},
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 41},
        {name: 'Keller', age: 99},
        {name: 'erssssss', age: 14},
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Nick', age: 41},
        {name: event.target.value, age: 99},
        {name: 'erssssss', age: 14},
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'KellerCorpusCapris')}
              changed={this.nameChangedHandler}>
              My Hobbies: Racing
            </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
