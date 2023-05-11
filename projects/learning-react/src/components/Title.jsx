import React from 'react' // eslint-disable-line

const Title = ({ user = "Anon", color = "grey" }) => { // eslint-disable-line
    return (<h1 className='title' style={{color: color}}>Hola {user}!</h1>)
}

export { Title };