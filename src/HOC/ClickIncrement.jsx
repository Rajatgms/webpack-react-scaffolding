import React from 'react';
import { any, number } from 'prop-types';
import withCounter from './withCounter';


class ClickIncrement extends React.Component {
  render() {
    return (
      <>
        <h1>Component With HOC - onClick</h1>
        <p>Counter: {this.props.count}</p>
        <button onClick={this.props.handleIncrement}>Increment</button>
        <button onClick={this.props.handleDecrement}>Decrement</button>
      </>
    );
  }
}

ClickIncrement.propTypes = {
  count: number,
  handleIncrement: any,
  handleDecrement: any,
};

export default withCounter(ClickIncrement);
