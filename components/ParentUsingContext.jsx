import React, { createContext, useState, useContext } from 'react';

// Create a context with initial value
const UserContext = createContext();

export const ParentUsingContext = () => {
  // Define state for user
  const [user] = useState("React");

  return (
    <UserContext.Provider value={user}>
      <h1>ParentUsing Context</h1>
      <Component1 />
    </UserContext.Provider>
  );
};

function Component1() {
  return (
    <>
      <h3>Component 1</h3>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />
    </>
  );
}

function Component5() {
  // Use useContext hook to access the context
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component 5</h3>
      <h1>{`User is ${user}`}</h1>
    </>
  );
}

export default ParentUsingContext;