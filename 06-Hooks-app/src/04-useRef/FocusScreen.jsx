import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const onCLickBtn= ()=>{
      inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
        ref={inputRef}
        type="text"
        placeholder='Ingrese su nombre'
        className='form-control'

        />

        <button 
        className='btn btn-primary m-2'
        onClick={onCLickBtn}
        
        > Set Focus</button>



    </>
  )
}
