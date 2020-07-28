import React, { useState } from 'react';
import {number} from 'prop-types'
const App = (props) => {
  const [count, setCount] = useState(props.counter);
  return (
    <>
      <div>Hello!!!</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
App.propTypes = {
  counter: number.isRequired
}

export default App;
