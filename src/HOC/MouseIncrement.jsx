import React from 'react';
import { any, number } from 'prop-types';
import withCounter from './withCounter';


class MouseIncrement extends React.Component {
  render() {
    return (
      <>
        <h1>Component With HOC - MouseEnter</h1>
        <p>Counter: {this.props.count}</p>
        <button onMouseEnter={this.props.handleIncrement}>Increment</button>
        <button onMouseEnter={this.props.handleDecrement}>Decrement</button>
      </>
    );
  }
}

MouseIncrement.propTypes = {
  count: number,
  handleIncrement: any,
  handleDecrement: any,
};

export default withCounter(MouseIncrement);
