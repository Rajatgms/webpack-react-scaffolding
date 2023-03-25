import React, { useState } from 'react';
import {number} from 'prop-types'
const AppWithHooks = (props) => {
  const [count, setCount] = useState(props.counter);
  return (
    <>
      <h1>Component With Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};
AppWithHooks.propTypes = {
  counter: number.isRequired
}

export default AppWithHooks;
