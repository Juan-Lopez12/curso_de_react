import React from 'react' // eslint-disable-line
// import ReactDOM from 'react-dom'
import { Title } from './Title'

const User = () => {
    const pais = "Venezuela"
    const amigos = ["Alejandro", "Manuel", "Cesar"];

    return (
    <>
        <Title user="Juan" color="green" />
        <Title user="Manuel" color="blue" />
        {pais && <p>Iniciaste sesion desde: {pais} </p>}
        <p>Tu lista de amigos es:</p>
        <ul>
        {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
        </ul>
        <p>Como estas! y que tengas un buen día. Saludos!</p>
    </>
    );
}

export default User;