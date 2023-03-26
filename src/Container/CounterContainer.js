import { connect } from 'react-redux';
import { decrementAction, incrementAsyncAction } from '../actions/counterAction';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (step) => incrementAsyncAction(dispatch, step),
    decrement: (step) => dispatch(decrementAction(step)),
  };
};
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;