
//rafc
import React from 'react'
import './maze.css'

const maze = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', '#', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#', ' ', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#', '#'],
    ['#', '#', '#', ' ', '#', '#', '#', ' ', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

const getMaze = (laberinto)=>{
    return laberinto.map((row, rowIndex) => (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`maze-cell ${cell === '#' ? 'wall' : 'path'}`}
            ></div>
          ))}
        </div>
      ));

}
const message = {
    message:'Hola buenas',
    title: 'Luis'
}

function getSaludo(Mensaje){
    return `Hola buenas, ${Mensaje}`

}

export const SecondApp = () => {
    


  return (
    <>
    <div className='maze'>
        {getMaze(maze)}
    </div>
        <code></code>
        <code>{JSON.stringify(message)}</code>
        <h1>{message.message}</h1>
        <h1>{getSaludo('EL PAPI')}</h1>
        <p>Soy un subtítulo</p>
    </>
    
  )
}
