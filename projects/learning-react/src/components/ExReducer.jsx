import React, { useReducer } from 'react' // eslint-disable-line
import Button from '../elements/Button'

const initialCounter = {counter: 0};

const reducer = (state, action) => {
    switch(action.type){
        case 'PLUS':
            return {counter: state.counter + 1}
        case 'MINUS':
            return {counter: state.counter - 1}
        case 'RESTART':
            return {counter: 0}
        default:
            return state;
    }
}

const ExReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialCounter)

    return (
    <div>
        <h1>Contador: {state.counter} </h1>
        <Button $black $marginRight onClick={() => dispatch({ type: 'PLUS' })}>Aumentar</Button>
        <Button $black $marginRight onClick={() => dispatch({ type: 'MINUS' })}>Disminuir</Button>
        <Button $black onClick={() => dispatch({ type: 'RESTART'})} >Reiniciar</Button>
    </div>
    )
}

export default ExReducer