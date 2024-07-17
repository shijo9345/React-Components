import React from 'react';

const Child = ({ handleMessage }) => {
  const handleClick = () => {
    // When the button is clicked, call the parent's callback function
    handleMessage('Hello from Child!');
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
};

export default Child;