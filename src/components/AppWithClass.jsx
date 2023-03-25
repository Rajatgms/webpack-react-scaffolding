import React from 'react';
import { number } from 'prop-types';

class AppWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.counter };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  handleDecrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      <>
        <h1>Component With Class</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}

AppWithClass.propTypes = {
  counter: number,
};

export default AppWithClass;