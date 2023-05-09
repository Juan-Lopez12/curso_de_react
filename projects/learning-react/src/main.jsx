import React from 'react'
import ReactDOM from 'react-dom/client'


const nombre = "Juan";
const JSX = (
  <>
    <h1 className='title' style={{color: 'red'}}>Hola {nombre}!</h1>
    <p>Como estas!</p>
  </>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  JSX
)
