import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom/client'
import User from './components/User'

const sesion = true;

const App = () => { // eslint-disable-line
  return (
    <>
      {sesion ? <User /> : <h1>No haz iniciado sesion</h1>}
    </>
  );
};

// const verificarSesion = (sesion) => {
//   if (sesion) {
//     return JSX;
//   } else {
//     return <h1>No haz iniciado sesión</h1>
//   }
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
