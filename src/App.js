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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
