import React, { useState,useEffect } from "react";

function Effect(){
    const [count,setCount]=useState(0);
    const [times,setTimes]=useState(0);

    // useEffect (()=>{
    //     // 1. code that we want to run
    //     // 2. Dependency Array
    //     // 3. Optional return function
    // },[])

    

    // //No dependencies
    // useEffect(()=>{          //mount when ever click
    //     console.log("No Dependencies")
    // })

    // //Empty dependency
    // useEffect (()=>{    //mount only at first
    //     console.log("Empty dependency")
    // },[])

//    //State Dependencies Array

    useEffect(()=>{
        console.log("State Dependency")
    },[count]) 
    return (
        <>
           <h1>Count : {count}</h1>
           <h1>Count : {times}</h1>
           <button onClick={()=>setCount((value)=>value-1)}> -</button>
           <button onClick={()=>setCount((value)=>value+1)}> +</button>
           <button onClick={()=>setTimes((value)=>value+1)}> T</button>
           
        </>
     
    )
}
export default Effect;