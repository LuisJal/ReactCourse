import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'



const heavyStuff = (iterationNumber = 100)=>{
    for(let i= 0; i<iterationNumber;i++){
        console.log(`iteracion:${i}`)
    }

    return `${iterationNumber} numero de iteraciones`
}





export const MemoHook = () => {
    
    const{counter,increment} = useCounter(100); 
    const [show, setshow] = useState(true)
    
    //SOlo se va a ejecutar el for cuando cambie el valor del counter, y no
    //cuando se refresque el DOM del botton de true false
    const memorizedValue= useMemo(()=> heavyStuff(counter), [counter])
    
    return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button className='btn btn-primary me-3'
        onClick={()=>increment()}> +1</button>

        <button className='btn btn-outline-primary' onClick={()=>setshow(!show)}>
            Show/Hide----{JSON.stringify(show)}
        </button>
    
    
    
    </>
  )
}
