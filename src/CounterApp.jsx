import React from 'react';
import { PropTypes } from 'prop-types'
import { useState } from 'react';

export function CounterApp ( { value } ) {
    
  const [ Counter, setCounter ]= useState(value)
    const handleAdd = () =>{
       setCounter( Counter + 1);
        
    }
  
  return (<>
  <h1>Counter App</h1>
  <h1>{ title }</h1>
  <h1>{ Counter }</h1>
  <button onClick={handleAdd}>boton</button>
  </>
    
  )
}
CounterApp.propTypes = {
    value:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
  }
  

