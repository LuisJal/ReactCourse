import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';
import {FirstApp} from './FirstApp' // Si hago exportacion por default de lo que quiero exportar
//import {App} from './FirstApp' si hago exportacion implicita de la funcion
import {ThirdApp} from './ThirdApp'
import {CounterApp} from './CounterApp'




//Punto de entrada


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <CounterApp value={20}/> 
       {/*  <ThirdApp titulo={'Luis'} subtitulo={'Palacios'}/> */}
    </React.StrictMode>
);


