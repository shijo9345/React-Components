import React, { useState } from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);         //// Define a state variable called 'count' and a function to update it 'setCount'

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Hooks;