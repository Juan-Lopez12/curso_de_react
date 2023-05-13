import React, { useState, useEffect } from 'react' // eslint-disable-line
import Button from '../elements/Button'

const Counter = ({ toPlus, toMinus, restart }) => { // eslint-disable-line
    const [count, setCount] = useState(0)
    const plus = amount => setCount(count + amount)
    const minus = amount => setCount(count - amount)

    // useEffect(() => {
    //     console.log('El componente se ha cargado!')
    // })

    // useEffect(() => {
    //     console.log('Primer renderizado del componente!')
    // }, [])

    // useEffect(() => {
    //     console.log('El estado cambio!')
    // }, [count])

    useEffect(() => {

        return(() => {
            console.log('Adios componente!')
        })
    }, [])

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