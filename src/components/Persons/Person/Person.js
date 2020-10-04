import React, {Component} from 'react';
import classes from './Person.css';

import Auxillary from '../../../hoc/Auxillary';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxillary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </Auxillary>
    );
  }
}

export default Person;
