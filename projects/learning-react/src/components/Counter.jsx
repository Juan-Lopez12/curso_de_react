import React, { useState } from 'react' // eslint-disable-line
import Button from '../elements/Button'

const Counter = ({ toPlus, toMinus, restart }) => { // eslint-disable-line
    const [count, setCount] = useState(0)
    const plus = amount => setCount(count + amount)
    const minus = amount => setCount(count - amount)

    return (
        <div>
            <h1>Contador: {count}</h1>
            <Button $black $marginRight onClick={() => plus(toPlus)}>Aumentar</Button>
            <Button $black $marginRight onClick={() => minus(toMinus)}>Disminuir</Button>
            <Button $black onClick={() => setCount(restart)}>Reiniciar</Button>
        </div>
    )
}

export default Counter