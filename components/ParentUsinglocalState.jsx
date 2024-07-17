import React, { useState } from 'react'

export const UseContext = () => {
    const [user]=useState("React")
  return (
    <div>
        <h1>Using local State</h1>
        <Component1 user={user}/>
    </div>
  )
}
function Component1({user}){
    return(
      <>
      <h3>Component 1</h3>
      <Component2 user={user}/>
      </>
    )
}

function Component2({user}){
    return(
      <>
      <h3>Component 2</h3>
      <Component3 user={user}/>
      </>
    )
}
function Component3({user}){
    return(
      <>
      <h3>Component 3</h3>
      <Component4 user={user}/>
      </>
    )
}
function Component4({user}){
    return(
      <>
      <h3>Component 4</h3>
      <Component5 user={user}/>
      </>
    )
}
function Component5({user}){
    return(
      <>
      <h3>Component 5</h3>
      <h1>{`user is ${user}`}</h1>
      </>
    )
}

   
   
