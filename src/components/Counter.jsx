import React, { useState } from 'react';
import { number, func } from 'prop-types';

const Counter = (props) => {
  const [step, setStep] = useState(1);
  const { counter, increment, decrement } = props;

  const handleStep = (e) => setStep(parseInt(e.target.value));
  return (
    <>
      <label htmlFor='step'>Set Step Size - </label>
      <input id="step" type='number' onChange={handleStep} value={step} />

      <br/><br/>
      <div>Counter App</div>
      <div>Count: {counter}</div>
      <button onClick={() => increment(step)}>Increment</button>
      <button onClick={() => decrement(step)}>Decrement</button>
    </>
  );
};
Counter.propTypes = {
  counter: number.isRequired,
  increment: func.isRequired,
  decrement: func.isRequired,
};

export default Counter;
