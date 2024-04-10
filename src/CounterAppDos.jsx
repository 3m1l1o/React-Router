import React from "react";
import { useState } from "react";


function CounterAppDos({value}) {
  const [ Counter, setCounter]=useState(value)
  const counterAdd = ()=> setCounter( Counter + 1)
  const counterSubstract = ()=> setCounter( Counter - 1)
  const counterReset = ()=> setCounter( value )   
      
  return (
    <>
    <h1>{Counter}</h1>
    <button onClick={ counterAdd }>+1</button>
    <button onClick={ counterSubstract}>-1</button>
    <button onClick={counterReset}>Reset</button>
    </>
  )
  }

//export default CounterAppDos