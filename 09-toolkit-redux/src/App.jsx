import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'


function App() {
  const {counter} = useSelector(state=> state.pedro);

  const dispatch = useDispatch()
  



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is: {counter}</h1>
      <div className="card">
        <button onClick={()=>dispatch(increment())}> Suma
         
        </button>
        <button onClick={()=>dispatch(decrement())}>Resta
          
        </button>
        <button onClick={()=>dispatch(incrementByAmount(2))}> Suma 2
          
        </button>
        
      </div>
      
    </>
  )
}

export default App
