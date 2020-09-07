import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// Guide setup test

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <Person name='Nick' age='41' />
        <Person name='Max' age='28'>
          My Hobbies: Racing
        </Person>
        <Person name='Keller' age='57' />
      </div>
    );
  }
}

export default App;
