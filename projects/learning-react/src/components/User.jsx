import React from 'react' // eslint-disable-line
import { Title } from './Title'
import styled from 'styled-components'

const User = () => {
    const country = "Venezuela"
    const friends = ["Alejandro", "Manuel", "Cesar"];

    return (
    <>
        <Title user="Juan" color="green" />
        <Title />
        {country && <p>Iniciaste sesion desde: {country} </p>}
        <Paragraph>Tu lista de amigos es:</Paragraph>
        <ul>
        {friends.map((friend, index) => <li key={index}>{friend}</li>)}
        </ul>
        <Paragraph>Como estas! y que tengas un buen día. Saludos!</Paragraph>
    </>
    );
}

const Paragraph = styled.p`
    margin: 20px 0;
`;

export default User;