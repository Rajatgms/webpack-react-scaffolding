import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAsyncAction } from '../actions/counterAction';

const Counter = () => {
  const [step, setStep] = useState(1);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleStep = (e) => setStep(parseInt(e.target.value));
  return (
    <>
      <label htmlFor='step'>Set Step Size - </label>
      <input id='step' type='number' onChange={handleStep} value={step} />

      <br /><br />
      <div>Counter App</div>
      <div>Count: {counter}</div>
      <button onClick={() => dispatch(incrementAsyncAction(step))}>Increment</button>
      <button onClick={() => dispatch(decrementAction(step))}>Decrement</button>
    </>
  );
};

export default Counter;
