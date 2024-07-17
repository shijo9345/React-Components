import React from 'react'
import {useState,useMemo} from "react";
export const UseMemo = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);

    // const doubleNumber=slowfunction(number)
    const doubleNumber=useMemo(()=>{
        return slowfunction(number)

    },[number])
    const themeStyles={
        backgroundColor:dark?"black":"White",
        color:dark?"white":"black"
    }
  return (
    <div>
        <input type="number" 
        value={number} 
        onChange={(e)=>setNumber(e.target.value)}/>
       
        <button onClick={()=>setDark((cur)=>!cur)}>Toggle </button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}
function slowfunction(num){
    console.log("doble function");
    for(let i=0;i<100000000000;i++)
        return num*2
}