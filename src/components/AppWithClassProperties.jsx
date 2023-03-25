import React from 'react';
import { number } from 'prop-types';

class AppWithClassProperties extends React.Component {
  state = {
    count: this.props.counter
  }

  handleIncrement = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  handleDecrement = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      <>
        <h1>Component With Class Properties</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}

AppWithClassProperties.propTypes = {
  counter: number
}

export default AppWithClassProperties;