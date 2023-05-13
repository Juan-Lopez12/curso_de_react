import React, { StrictMode, useState } from 'react' // eslint-disable-line
import ReactDOM from 'react-dom/client'
import User from './components/User'
import FormSession from './components/FormSession'
// import Counter from './components/Counter'
import './index.css'
import Button from './elements/Button'
import ExReducer from './components/ExReducer'
import Blog from './components/Blog'

const App = () => { // eslint-disable-line
  const [session, changeSession] = useState(true)

  return (
    <div className='contenedor'>
      {session ?
      <div>
        <User />
        <Blog />
        <ExReducer />
        {/* <Counter toPlus={5} toMinus={3} restart={0} /> */}
        <Button $long $marginTop onClick={() => changeSession(!session)}>Cerrar Sesion</Button>
      </div>
      :
      <div>
        <FormSession changeSession={changeSession} />        
      </div>
      }
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
