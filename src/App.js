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
  };

  switchNameHandler = () => {
    console.log('Was clicked..');
    this.setState({
      persons: [
        {name: 'bobba fet', age: 41},
        {name: 'Keller', age: 99},
        {name: 'erssssss', age: 14},
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
