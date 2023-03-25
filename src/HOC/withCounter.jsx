import React from 'react';
import { any, number } from 'prop-types';

function withCounter(WrappedComponent) {

  class Counter extends React.Component {
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
        <WrappedComponent
          ref={this.props.forwardRef}
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          {...this.props}
        />
      );
    }
  }

  Counter.propTypes = {
    counter: number,
    forwardRef: any
  };

  return React.forwardRef(
    (props, ref) =>
      <Counter {...props} forwardRef={ref} />,
  );
}

export default withCounter;