import React, { Component } from 'react' // eslint-disable-line

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }

    componentDidMount(){
        console.log("El componente se cargo")
        // Llamamos a la API
    }

    componentDidUpdate(lastProps, lastState) {
        console.log("El componente se actualizo!")
        console.log('Propiedades anteriores del componente:', lastProps)
        console.log('Estado anterior del componente:', lastState)
    }

    componentWillUnmount(){
        console.log('Adiós componente!')
        // Acabamos llamada a la API
    }

    increase(amount){
        this.setState((lastState) => { return { counter: lastState.counter + amount }} );
    }

    decrease(amount){
        this.setState((lastState) => { return { counter: lastState.counter - amount }} );
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.counter} </h1>
                <button onClick={() => this.increase(this.props.toPlus)}>Incrementar</button> {/* eslint-disable-line */}
                <button onClick={() => this.decrease(this.props.toMinus)}>Disminuir</button> {/* eslint-disable-line */}
            </div>
        )
    }
}

export default CounterClass